import Link from "next/link";
import Head from "next/head";
//import Script from "next/script";
import Layout from "../../components/layout";
import Founders from "../../components/founders";
import utilStyles from "../../styles/utils.module.css";
import layoutStyle from "../../components/layout.module.css";

const founder = {
   craig:
    "Born only a stones throw from King Arthurs Round Table this Founder has longed for the days of justice and conquest. One day the world will be his, but until that day perhaps this screen will do.",
};

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Resume</title>
      </Head>
      <h1 className={utilStyles.headingXl}>Craig N. Linscott</h1>
      <div className={utilStyles.blogArticle}>
        <div className={utilStyles.rowC}>
          <Founders
            image="/images/NH-Craig.gif"
            name="Craig Linscott"
            move="4 "
            ws="3 "
            bs="5 "
            str="8 "
            tough="8 "
            wounds="6 "
            attacks="4 "
            leadership="8 "
            save="4+"
            description={founder.craig}
          />
        </div>
      </div>
    </Layout>
  );
}
