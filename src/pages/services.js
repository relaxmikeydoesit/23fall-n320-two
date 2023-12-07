import React from 'react';
import styles from '@/styles/Services.module.css';
import Sidekick from '@/components/Sidekick';
import Image from '@/components/Images';   
import { useRouter } from 'next/router';

export default function Services() {
    const [email, setEmail] = React.useState
    ('mikeylee@zohomail.com')
    // let fullName = 'Mikey Lee';
    // let email = 'hello@domain.xyz';

    const router = useRouter();

    function contactFormSubmit(e) {
        e.preventDefault();
        if( email !== '') {
            router.push('/contact/success');
        }
           }

    function updateContactInfo(e) {
        if(e.currentTarget.name === 'fullName') {
            //fullName = e.currentTarget.value;
            setFullName(e.currentTarget.value);
        }
        if(e.currentTarget.email === 'email') {
            // email = e.currentTarget.value;
            setEmail(e.currentTarget.value);
        }
    }
    return (
        <>
         <Sidekick sidekickImage='/sidekick.jpg'/>
        <div className={styles.servicesContainer}>
        <h1>Services</h1>
        <ul>
        <h2>Base Package</h2>
            <li>Website Design</li>
            <li>Website Development</li>
            <li>Website Deployment</li>
            <li>Website Maintenance</li>
            <li>Website Support</li>
        </ul>
        <ul>
        <h2>Base Package</h2>
            <li>Website Design</li>
            <li>Website Development</li>
            <li>Website Deployment</li>
            <li>Website Maintenance</li>
            <li>Website Support</li>
        </ul>
        <h3>To Learn More About Our Services, Please Enter Your Work Email, and we will respond by the next business day.</h3>      
        <form className={styles.form}
        onSubmit={contactFormSubmit}>
        {/* <h1 className={styles.heading}>Contact</h1> */}

    <div className={styles.formField}>
        <label className={styles.label}>Email</label>
        <input className={styles.input} name='email' 
        type='email' placeholder='hello@yourdomain.xyz'
        onChange={updateContactInfo} value={email}/>
    </div>
    <div className={styles.formField}>
        <input className={styles.submit} 
        type='submit' value='Send Contact' />
    </div>
    
    
</form>
        </div>    
        </>
    )   

    }