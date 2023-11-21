import React from "react";
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import LilListr from '@/components/LilListr';


export default function Home() {
  const [email, setEmail] = React.useState('mikeylee@zohomail.com');
 // let email = 'mikeylee@zohomail.com';
  function mailingListSubmit(e) {
    e.preventDefault();
    // console.log('submit');
  }
  function updateListInfo(e) {
    console.log(e.target.name, e.currentTarget.value);
    if (e.target.name === 'email') {
      let email = e.currentTarget.value;
       setEmail(e.currentTarget.value);
    }
  }
  return (
    <>
    <h1 className={styles.bigGoldText}>Hello, Friend!</h1>
      <h2 className={styles.inverseText}>PRODUCTIVITY HUB | Created with React and NEXT.js</h2>
      <Hero heroImage='/hero-flash.jpg'/>
      <form className={styles.form} onSubmit={mailingListSubmit}>
        <h2>Join the mailing list for a Freebie!</h2>
        <div className={styles.formField}>
          <label>Enter Your Email Address:</label>
          <input name="email" type="email" 
          placeholder="hello@domain.xyz" onChange={updateListInfo} value={email}/>
        </div>
        <div className={styles.formField}>
          <input type="submit" value="Get Freebie" />


        </div>
      </form>
      <LilListr className={styles.Listr} />     
    </>
  );
}