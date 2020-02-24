import Head from 'next/head';
import Navbar from './Navbar';
const Layout = (props) => (
    
    <div>
        <head> 
            <title>BitzPrice</title> 
           <link rel="stylesheet"
            href="https://bootswatch.com/4/cerulean/bootstrap.min.css"/>
        </head>
        <Navbar/>
        {props.children}

    </div>
    
);

export default Layout;
