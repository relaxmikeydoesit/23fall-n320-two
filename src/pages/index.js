import React from "react";
import styles from '@/styles/Home.module.css';
import Hero from '@/components/Hero';
import UtilityTimer from '@/components/UtilityTimer';

export default function Home() {

  return (
    <>
    <h1 className={styles.bigGoldText}>Hello, friend!</h1>
      <h2 className={styles.inverseText}> This Single Page Application is built with React & Next.js. </h2>
      <Hero heroImage='/hero-flash.jpg'/>
      <UtilityTimer className={styles.timer} />
      
     
  
    </>
  );
}