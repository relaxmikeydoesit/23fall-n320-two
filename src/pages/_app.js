import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
<>
<nav className='navbar'>
  <ul>
    <li>
	<a href='/'>HOME</a>
    </li>
    <li>
	<a href='/about'>ABOUT</a>
    </li>
    <li>
	<a href='/services'>SERVICES</a>
    </li>
    <li>
	<a href='/contact'>CONTACT</a>
    </li>
  </ul>
</nav>
<Component {...pageProps} />
     </>
  ); 
  
  

}
