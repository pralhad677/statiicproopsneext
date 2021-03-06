// import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import '../styles/Home.module.css' 

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
 
// export default MyApp
// import App from "next/app";
import type { AppProps/*, AppContext */ } from 'next/app' 

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
