import Fetch from 'isomorphic-unfetch';
import Layout from '../Components/Layout';

import Prices from'../Components/Prices';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to BitzPrice</h1>
            <Prices bpi= {props.bpi}/>
        </div>
    </Layout>
);

Index.getInitialProps =  async function(){
    const result = await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await result.json();

    return {
        bpi: data.bpi
    }; 
};

export default Index; 