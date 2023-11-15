import React from "react";
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import UtilityTimer from '@/components/UtilityTimer';
import LilListr from '@/components/LilListr';


export default function Home() {

  return (
    <>
    <h1 className={styles.bigGoldText}>Hello, Friend!</h1>
      <h2 className={styles.inverseText}>PRODUCTIVITY HUB | Created with React and NEXT.js</h2>
      <Hero heroImage='/hero-flash.jpg'/>
      <UtilityTimer className={styles.timer} />
      <LilListr className={styles.LilListr} />     
  
    </>
  );
}