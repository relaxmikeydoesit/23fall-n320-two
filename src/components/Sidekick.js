import React from 'react';
import styles from '@/styles/About.module.css';

export default function Sidekick(props){
    return (
        <>
        <div className={styles.sidekick} 
        style={{backgroundImage: `url(${props.sidekickImage})`}}></div>
        </>

    )
}