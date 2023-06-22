import '../styles/globals.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Add the required icons to the library
library.add(fas);
library.add(fab);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp