import React from 'react';
import styles from '@/styles/Services.module.css';

export default function Services() {
    return (
        <>
        <div className={styles.servicesContainer}>
        <h1>Services</h1>
        <h2>Base Package</h2>
        <ul>
            <li>Website Design</li>
            <li>Website Development</li>
            <li>Website Deployment</li>
            <li>Website Maintenance</li>
            <li>Website Support</li>
        </ul>
        {/* <Image src="../../public/bulb.JPG" width={500} height={500} alt="Website Design" /> */}
        </div>
        
        
        </>
    )   

    }