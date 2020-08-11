import Navbar from './Navbar';
import Head from 'next/head';

// this is a layout wrapper that will wrap around all pages.

const Layout = (props) => (
  <div>
    <Head>
      <title>Nextjs</title>
      <link
        rel='stylesheet'
        href='https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cerulean/bootstrap.min.css'
        integrity='sha384-b+jboW/YIpW2ZZYyYdXczKK6igHlnkPNfN9kYAbqYV7rNQ9PKTXlS2D6j1QZIATW'
        crossorigin='anonymous'
      />
    </Head>
    <Navbar />
    <div className='container'>{props.children}</div>
  </div>
);

export default Layout;
