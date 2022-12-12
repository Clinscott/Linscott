import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Button from "./button";

const name = "Linscott, Craig";
const LINSCOTT = {
  width: 256,
  height: 256,
};
const CRAIGN = {
  width: 256,
  height: 256,
};


export default function Header(props) {
  return (
    <header>
      <div className={`${styles.header} ${utilStyles.floatContainer1}`}>
        {props.home ? (
          <div className={utilStyles.floatChild1}>
            <Image
              priority
              src="/images/CRAIG.png"
              height={CRAIGN.height}
              width={CRAIGN.width}
              alt={name}
            />
            <Image
              priority
              src="/images/LINSCOTT.png"
              height={LINSCOTT.height}
              width={LINSCOTT.width}
              alt={name}
            />
          </div>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/NH-Craig.gif"
                  height={profilePic.height}
                  width={profilePic.width}
                  alt={name}
                />
              </a>
            </Link>
          </>
        )}    
      
          <div id="bar" className={styles.line}>
            <Button title="FraudFinder" link="/posts/fraudFinder"></Button>
            <Button title="TriFighter" link="/posts/TriFighter"></Button>
            <Button title="Resume" link="/posts/CraigLinscott"></Button>
          </div>
      </div>
 
    </header>
  );
}
