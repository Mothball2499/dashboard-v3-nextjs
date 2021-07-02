import 'tailwindcss/tailwind.css';
import DashboardLayout from '../src/dashboard/layout';
import DashboardProvider from '../src/dashboard/provider/context';

function MyApp({ Component, pageProps }) {
  return (
    <DashboardProvider>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </DashboardProvider>
  );
}

export default MyApp;
