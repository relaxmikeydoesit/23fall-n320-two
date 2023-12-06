import React from 'react';
import styles from '@/styles/Contact.module.css'
import { useRouter } from 'next/router';
export default function Contact() {
    const [fullName, setFullName] = React.useState
    ('Mikey Lee');
    const [email, setEmail] = React.useState
    ('mikeylee@zohomail.com')
    // let fullName = 'Mikey Lee';
    // let email = 'hello@domain.xyz';

    const router = useRouter();

    function contactFormSubmit(e) {
        e.preventDefault();
        if(fullName !== '' && email !== '') {
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
        <form className={styles.form}
        onSubmit={contactFormSubmit}>
        <h1 className={styles.heading}>Contact</h1>

    <div className={styles.formField}>
        <label className={styles.label}>Full Name:</label>
        <input className={styles.input} name='fullName' 
        type='text' placeholder='Your Name' 
        onChange={updateContactInfo} value={fullName}/>
    </div>
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
        
        </>
    )   

    }