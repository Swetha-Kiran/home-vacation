import '@/styles/globals.css'
import Navbar from '../components/Navbar'
import { usePathname } from 'next/navigation';
import UnderConstruction from '../components/UnderConstruction'
import { FormProvider } from '../../context/FormContext';




export default function App({ Component, pageProps }) {

  const pathname = usePathname();
  const urlFlag = pathname.startsWith('/contact') ? false : true;
  return (

    <div>
      <FormProvider>
      <UnderConstruction />
      {urlFlag && <Navbar />}
      <Component {...pageProps} />
      </FormProvider>
     
    </div>
  )
}
