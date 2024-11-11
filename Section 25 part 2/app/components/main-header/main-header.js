import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";

import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <Image src={logoImg} />
        Next Level Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <Link href="/community">Foodies Community</Link>
          <Link href="/meals">Browse Meals</Link>
        </ul>
      </nav>
    </header>
  );
}
