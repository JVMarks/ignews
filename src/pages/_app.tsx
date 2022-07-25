import { AppProps } from 'next/app';
import { Header } from '../components/Header';
import {Provider as NextAuthProvider} from 'next-auth/client';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <AnyComponent {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp

//yarn create next-app ignews
//yarn add typescript @types/react @types/node -D