import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Head from 'next/head'
import Link from 'next/link'

import axios from 'axios';



const Iletisim = ({data}) => {



	
  return (
    <Layout>
		<Head>
		<title>İLETİŞİM</title>
		<meta property="og:title" content="İLETİŞİM" />      
		<meta property="og:description" content="İLETİŞİM SAYFAM" />
		<meta property="og:url" content="LOCALHOST" />
		<link rel="icon" href="/favicon.ico" />
		</Head>
		  <div className="iletisim">
			<h1>İLETİŞİM</h1>
			<h3>TELEFON: 0555 555 55 55</h3>
			<h2>KAYNAKLARIMIZ İÇİN BAĞLANTILAR</h2>
			<ul>
				{data.map((item) => (
					<li>{item.url}</li>
				))}
				</ul>
		  </div>
    </Layout>
  )
}




export default Iletisim;


export async function getStaticProps() {
	
	const res = await axios('https://newsapi.org/v2/sources?apiKey=c88e307ba7a44a73a3958d776e7b4947')
	const posts = await res.data
	const data = posts.sources;

	return {
	  props: {
		data,
	  },
	}
}