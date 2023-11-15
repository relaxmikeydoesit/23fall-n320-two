import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  // console.count('App Loaded')
  return (
<>
<nav className='navbar'>
  <ul>
    <li>
	<Link href='/'>HOME</Link>
    </li>
    <li>
	<Link href='/about'>ABOUT</Link>
    </li>
    <li>
	<Link href='/services'>SERVICES</Link>
    </li>
    <li>
	<Link href='/contact'>CONTACT</Link>
    </li>
  </ul>
</nav>
<Component {...pageProps} />


     </>
  ); 
  
  

}
