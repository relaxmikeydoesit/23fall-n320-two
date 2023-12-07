import React from 'react';
import styles from '@/styles/Services.module.css';


export default function ServiceSide(props){
    return (
        <>
        <div className={styles.sideImage} 
        style={{backgroundImage: `url(${props.sideImage})`}}></div>
        </>

    )
}