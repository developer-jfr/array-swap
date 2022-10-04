import '../styles/globals.scss'
import Page from './../layout/page';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Page>
       <Component {...pageProps} />
     </Page>
    </>
  )
}

export default MyApp
