import React from "react";
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Hero from '@/components/Hero';
import UtilityTimer from '@/components/UtilityTimer';
import LilListr from '@/components/LilListr';


export default function Home() {

  return (
    <>
    <h1 className={styles.bigGoldText}>Hello, Friend!</h1>
      <h2 className={styles.inverseText}>PRODUCTIVITY HUB | Created with React and NEXT.js</h2>
      <Navbar className={styles.navbar} style={{}}>
        <Link href='/'>Home ||</Link>
        <Link href='/'>About || </Link>
        <Link href='/'>Contact ||</Link>
        <Link href='/'>Need Help?</Link>
  </Navbar>
      <Hero heroImage='/hero-flash.jpg'/>
      <UtilityTimer className={styles.timer} />
      <LilListr className={styles.LilListr} />     
  
    </>
  );
}