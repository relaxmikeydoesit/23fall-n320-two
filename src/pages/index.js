import React from "react";
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';

export default function Home() {

  return (
    <>
          <Hero heroImage='/hero-flash.jpg'/>
      <h1 className={styles.bigGoldText}>Hello, friend!</h1>
      <h2 className={styles.inverseText}> This Single Page Application is built with React & Next.js. </h2>
     
  
    </>
  );
}