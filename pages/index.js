// this is a layout wrapper that will wrap around all pages.
import Layout from '../components/Layout';
//use the fetch API on the client and server
// import Fetch from 'isomorphic-unfetch';
import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <div>
      <h1>Home</h1>
      {props.coindesk.disclaimer}
      <Prices coindesk={props.coindesk} />
    </div>
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    coindesk: data,
  };
};

export default Index;
