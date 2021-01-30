import Head from 'next/head';
import Navbar from './navbar';

const Layout = ({children}) => (
    <>
        <Head>
            <title>Note app</title>
        </Head>
        {children}
    </>
)
 export default Layout; 