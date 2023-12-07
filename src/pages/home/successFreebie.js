import React from "react";
 import styles from '@/styles/Home.module.css';
export default function SuccessFreebie() {
    return (
    <>
         <div class="container">
        <h1>You`&apos;`ve joined. Here`&apos;`s your gift...</h1>
        <div>
        <img id="freebie" src="/freebieimg.jpg" width={638} height={825}/>
        </div>
        </div> 
    </>
    )
}