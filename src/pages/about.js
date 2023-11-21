import React from 'react';
import styles from '@/styles/About.module.css'
import Sidekick from '@/components/Sidekick';
import Card from '@/components/Card';
export default function About() {
    return (
        <>
        <Sidekick sidekickImage='/sidekick.jpg'/>
        <div className={styles.cardContainer}>
        <Card className={styles.cardTitle} title='About' description='This is an example of a Card Component. Cards are used as containers on many ecommerce sites, and frequently displayed to contain profiles of team members in the case of business website architecture.' />
        </div>
        </>
        )   

    }