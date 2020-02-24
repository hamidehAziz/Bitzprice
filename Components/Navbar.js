import Link from 'next/link';

const Navbar =  () => (
    <div>
        <ul>
            <li><Link href = "/"><a>Home</a></Link></li>
            <li><Link href = "/about"><a>About</a></Link></li>
        </ul>
        <style jsx>{`
            ul {
                background: yellow;
                color: #fff;
                list-style: none;
                display: flex;
            }

            ul il {
                font-size: 18px;
                margin-right: 20px;
            }

            ul il a {
                color:#fff;
                text-decoration :none;
            `}
        </style>
    </div>


    
    );

    export default Navbar;