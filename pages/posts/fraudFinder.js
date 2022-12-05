import Layout, { siteTitle } from "../../components/layout";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";


export default function FraudFinder() {
  return (
    <Layout>
      <Head>
        <title>Fraud Finder</title>
      </Head>
      <h1 className={utilStyles.headingXl}>FraudFinder</h1>
      
    </Layout>
  );
}
