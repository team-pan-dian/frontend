import React from "react";
import Head from "next/head";
import type { ReactNode } from "react";
import styles from "../../styles/BasePage.module.css";
import { PRODUCT_NAME } from "../../consts";
import Navbar from "../Navbar/Navbar";

export interface BasePageProps {
  id: string;
  children: ReactNode;
  full?: boolean;
  navbar?: boolean;
  title: string;
}

export default function BasePage({
  title,
  id,
  full = false,
  navbar = true,
  children,
}: BasePageProps) {
  return (
    <>
      <Head>
        <title>
          {PRODUCT_NAME} - {title}
        </title>
      </Head>
      {navbar && <Navbar />}
      <section
        className={`page-root page-${id} grid ${styles.basepageGrid} ${
          full && "max-h-screen min-h-screen w-screen"
        }`}
      >
        {children}
      </section>
    </>
  );
}
