import React from "react";
import Link from "next/link";
import Head from "next/head";

export function MainLayout({children, title = 'Next app'}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content='js,es6+,react,next'/>
        <meta name='description' content='This page is created by js,es6+,react,next'/>
        <meta charSet='utf-8'/>
      </Head>
      <nav>
        <Link href='/'><a>Latest posts</a></Link>
        <Link href='/posts/new'><a>Create post</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
        position: fixed;
        height: 60px;
        left: 0;
        top: 0;
        right: 0;
        background: darkblue;
        display: flex;
        justify-content: space-around;
        align-items: center;
        }
        
        nav a {
        color: white;
        text-decoration: none;
        }
        
        main {
        margin-top: 60px;
        padding: 1rem
        }
      `}</style>
    </>
  )
}
