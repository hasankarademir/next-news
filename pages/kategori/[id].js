import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head'


import Layout from '../Layout';
import NewsBox from '../../components/NewsBox';


const Kategori = () => {
	
	const router = useRouter()
	const [newsData, setNewsDAta] = useState([])
	
	const fetchMyApi = async () => {
		
		const result = await axios(`http://newsapi.org/v2/everything?q=${router.query.id}&sortBy=publishedAt&apiKey=c88e307ba7a44a73a3958d776e7b4947`)
		const json = await result.data;
		
		setNewsDAta(json.articles);
	}

	useEffect(() => {
		console.log(router.id);
		
		fetchMyApi();
	}, [router.query.id]);
	
  return (
    <Layout>
		<Head>
  		<title>KATEGORİ {router.query.id}</title>
		<meta property="og:title" content="İLETİŞİM" />      
		<meta property="og:description" content="İLETİŞİM SAYFAM" />
		<meta property="og:url" content="LOCALHOST" />
		<link rel="icon" href="/favicon.ico" />
		</Head>
		<NewsBox newsData={newsData && newsData}  />
    </Layout>
  )
}


export default Kategori
