import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import DashboardLayout from '../src/dashboard/layout';
import DashboardProvider from '../src/dashboard/provider/context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Salvia-kit Dashboard v3 Next.js</title>
      </Head>
      <DashboardProvider>
        <DashboardLayout>
          <Component {...pageProps} />
        </DashboardLayout>
      </DashboardProvider>
    </>
  );
}

export default MyApp;
