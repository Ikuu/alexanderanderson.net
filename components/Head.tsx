import React from 'react'
import Head from 'next/head'

interface Head {
  title: string;
}

const UpdatedHead: React.FC<Head> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="Description" content="Alexander Anderson, Front-End Developer based in Glasgow" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet" />
  </Head>
)

export default UpdatedHead
