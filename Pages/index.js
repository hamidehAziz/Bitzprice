import Fetch from 'isomorphic-unfetch';
import Layout from '../Components/Layout';

const Index = (props) => (
    <Layout>
        <div>
            <h1>Welcome to Bitz Prises.</h1>
            {props.bpi.time.updated}
        </div>
    </Layout>
);

Index.getInitialProps =  async function(){
    const result = await fetch
    ('https://api.coindesk.com/v1/bpi/currentprice.json');
    const data = await result.json();

    return {
        bpi: data
    }; 
};

export default Index;