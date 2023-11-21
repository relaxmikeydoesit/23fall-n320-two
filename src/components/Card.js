import React from 'react';
import styles from '@/styles/Card.module.css';


export default function Card(props){
    return (
        <>
        <div className={styles.card}>
            <h3 className={styles.cardTitle}>{props.title}</h3>
            <p>{props.description}</p>
            <p>{props.image}</p>
        </div>
        </>

    )
}