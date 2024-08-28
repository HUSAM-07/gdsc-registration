import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS || ''),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Updated to include all fields from the form
    const { email, fullName, whatsappNumber, membershipType, discipline, comments } = req.body;

    // You might want to add some validation here
    if (!email || !fullName || !whatsappNumber || !membershipType || !discipline) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Convert membershipType to a more readable format for the sheet
    let membershipTypeForSheet;
    switch (membershipType) {
      case 'normal':
        membershipTypeForSheet = '30 AED/yr (Normal)';
        break;
      case 'fourYear':
        membershipTypeForSheet = '60 AED For 4 yrs (Most Value)';
        break;
      case 'groupOfFive':
        membershipTypeForSheet = '20 AED/yr For group of 5 (Most Popular)';
        break;
      default:
        membershipTypeForSheet = membershipType;
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A1', // Adjust this if your sheet name is different
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          email, 
          fullName, 
          whatsappNumber, 
          membershipTypeForSheet, 
          discipline, 
          comments, 
          new Date().toISOString()
        ]],
      },
    });

    res.status(200).json({ message: 'Registration submitted successfully', response: response.data });
  } catch (error) {
    console.error('Error submitting to Google Sheet:', error);
    res.status(500).json({ message: 'Error submitting registration' });
  }
}
