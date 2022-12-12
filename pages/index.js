import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Image from "next/image";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

const profilePic = {
  width: 128,
  height: 128,
};

const founderImage = {
  width: 256,
  height: 256,
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <div className={utilStyles.rowC2}>*/}
      <section className={utilStyles.headingMd}>
        <h4>White Hat. Developer. Writer.</h4>
      </section>
      <section
        className={`${utilStyles.headingMd} ${utilStyles.floatContainer}`}
      >
        <div className={utilStyles.floatChild}>
          <h6>Fraud Finder</h6>
          <p>
            Above are links to my major projects and my resume. Fraud Finder is
            a website fraud finder in the vein of
            <Link href={"https://github.com/elceef/dnstwist"}>
              <a target="_blank"> DNS TWIST. </a>
            </Link>
            The code for Fraud Finder is entirely mine. Check it out!
          </p>
        </div>
        <div className={utilStyles.floatChild}>
          <h6>TriFighter</h6>
          <p>
            TriFighter is a fun little game I am developing in{" "}
            <Link href={"https://phaser.io/"}>
              <a target="_blank"> Phaser. </a>
            </Link>
            It is a continuous 2D base defence game where TriAngle runs around
            punching evil Squares that are sent by the One of Infinite Angles,
            The Circle. Eventually the game will apply upgrades and a saving
            mechanism.
          </p>
        </div>
        <div className={utilStyles.floatChild}>
          <h6>Blog</h6>
          <p>
            Below are a series of blog posts that include thoughts on many
            things that interest me. They range from learning to program,
            warhammer, politics and writing. If this is of interest to you have
            a look!
          </p>
        </div>
      </section>
      {/* </div> */}
      <section
        className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.blogArticle}`}
      >
        <h1>Rambles</h1>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, author }) => (
            <li className={utilStyles.listItem} key={id}>
              <div className={utilStyles.rowC}>
                <a className={utilStyles.imageF}>
                  <Image
                  priority
                    src={
                      author === "Craig Linscott"
                        ? "/images/NH-Craig.gif"
                        : "/images/NH-Brad.gif"
                    }
                    alt="Pixel Craig."
                    width={profilePic.width}
                    height={profilePic.height}
                  />
                </a>
                <div>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />

                  <small className={utilStyles.lightText}>
                    <a className={utilStyles.lightText}>{author} </a>
                    <Date dateString={date} />
                  </small>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
