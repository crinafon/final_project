import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/layout';
import { useEffect } from 'react';
import Footer from '../components/footer';
import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);

  return (
    // <NextUIProvider>
      <Layout>
        <Component {...pageProps} />
     </Layout>
    // {/* </NextUIProvider> */}
    
  );
}

export default MyApp;
