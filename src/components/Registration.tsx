'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Registration.module.css';

export default function Registration() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className={styles.pageContainer}>
      <Image
        src="/gdsclogo.svg"
        alt="GDSC Logo"
        width={150}
        height={150}
        className={styles.logo}
      />
      <div className={styles.googleFormContainer}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeZUpAqWjVz2p05VLOiVmpxZwfIt6MS_8SVzNo9fkaxJjBAhA/viewform?embedded=true"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
