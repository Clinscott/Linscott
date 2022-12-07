import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import Button from "./button";

const name = "Linscott, Craig";
const profilePicStatic = {
  width: 500,
  height: 256,
};
const profilePicOnScroll = {
  width: 768,
  height: 256,
};
let profilePic = profilePicStatic;

export default function Header(props) {
  return (
    <header>
      <div className={styles.header}>
        {props.home ? (
          <>
            <Image
              priority
              src="/images/NH-Craig.gif"
              height={profilePic.height}
              width={profilePic.width}
              alt={name}
            />
          </>
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
