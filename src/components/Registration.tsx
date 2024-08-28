'use client';

import { useState } from 'react';

export default function Registration() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    whatsappNumber: '',
    membershipType: '',
    discipline: '',
    comments: ''
  });
  const [showConfetti, setShowConfetti] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/submit-registration', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 5 seconds
        alert('Registration submitted successfully!');
        // Reset form or redirect user
      } else {
        alert('Failed to submit registration. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Registration Form</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.fullName}
              />
            </div>
            <div>
              <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700">WhatsApp Number</label>
              <input
                type="tel"
                name="whatsappNumber"
                id="whatsappNumber"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.whatsappNumber}
              />
            </div>
            <div>
              <label htmlFor="membershipType" className="block text-sm font-medium text-gray-700">Membership Type</label>
              <select
                name="membershipType"
                id="membershipType"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.membershipType}
              >
                <option value="">Select a membership type</option>
                <option value="normal">30 AED/yr (Normal)</option>
                <option value="fourYear">60 AED For 4 yrs <span className="text-green-600 font-bold">(Most Value)</span></option>
                <option value="groupOfFive">20 AED/yr For group of 5 <span className="text-blue-600 font-bold">(Most Popular)</span></option>
              </select>
            </div>
            <div>
              <label htmlFor="discipline" className="block text-sm font-medium text-gray-700">Discipline/Course</label>
              <select
                name="discipline"
                id="discipline"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.discipline}
              >
                <option value="">Select your discipline</option>
                <option value="CS">CS</option>
                <option value="BioTech">BioTech</option>
                <option value="Mechanical">Mechanical</option>
                <option value="EEE">EEE</option>
                <option value="ECE">ECE</option>
                <option value="Chemical">Chemical</option>
              </select>
            </div>
            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Additional Comments</label>
              <textarea
                name="comments"
                id="comments"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                onChange={handleChange}
                value={formData.comments}
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Registration
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
