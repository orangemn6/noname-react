import Head from 'next/head'
import Link from 'next/link'

import './_app.css'
import style from './_app.module.css'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
	   <script type="module" data-currency="USD" data-id="RRdd09EfbB" src="https://api.jamcart.io/v1/jamcart.js"></script>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content="No Name Tech - Custom Mousepads and Controllers." />
    </Head>

    <nav className={ style.nav }>
      <h1 className={ style.logo }>
        <Link href="/">
          <a>No Name Tech {/* Our Demo Website's Title */}</a>
        </Link>
      </h1>
      <jamcart-open class={ style.open } />
    </nav>

    <Component {...pageProps} />

    <footer className={ style.demo }>
      <p>
        E-commerce website built with <a href="https://reactjs.org/">React</a>, <a href="https://nextjs.org/">Next.js</a>, and <a href="https://jamcart.io">Jamcart</a>
      </p>
      <p>
      </p>
      <p>
        Site made by <a href="https://orangemn6.xyz">Orangemn6</a>
  </p>
    </footer>
  </>
}
