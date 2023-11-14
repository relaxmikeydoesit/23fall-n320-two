import React from 'react';
import styles from '@/styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
    return (
    <>
    <div className={styles.navbar}>
  <Link href='/'>Home</Link>
  <Link href='/about'>About</Link>
  <Link href='/services'>Services</Link>
  <Link href='/contact'>Contact</Link>
    </div>
    </>
    )
}
