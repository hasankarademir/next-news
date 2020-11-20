import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head'


import Layout from '../Layout';
import ListTitles from '../../components/Layout/ListTitles';


const Kategori = () => {
	
	const router = useRouter()
	const [newsData, setNewsDAta] = useState([])
	
	const fetchMyApi = async () => {
		
		const result = await axios(`http://newsapi.org/v2/everything?q=${router.query.id}&from=2020-10-20&sortBy=publishedAt&apiKey=4003e5a0008e4809b65ff979833053e6`)
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
		<ListTitles newsData={newsData && newsData}  />
    </Layout>
  )
}


export default Kategori
