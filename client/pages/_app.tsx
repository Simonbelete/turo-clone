/* eslint-disable react/react-in-jsx-scope */
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export default MyApp;
