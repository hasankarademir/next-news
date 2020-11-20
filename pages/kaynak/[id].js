import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head'


import Layout from '../Layout';
import ListTitles from '../../components/Layout/ListTitles';


const Kaynak = ({kaynakData, error}) => {
	const [newsData, setNewsDAta] = useState(kaynakData)
	const router = useRouter();
	console.log('newsData', newsData);

	useEffect(() => {
		setNewsDAta(kaynakData)
	}, [router.query.id]);
	
  return (
    <Layout>
		<Head>
  		<title>KAYNAK {router.query.id}</title>
		<meta property="og:title" content="İLETİŞİM" />      
		<meta property="og:description" content="İLETİŞİM SAYFAM" />
		<meta property="og:url" content="LOCALHOST" />
		<link rel="icon" href="/favicon.ico" />
		</Head>
		{
			!error ?
			(
				<ListTitles newsData={newsData && newsData}  />
			)
			: <h1>HATA VAR</h1>
		}
    </Layout>
  )
}


export default Kaynak


Kaynak.getInitialProps = async (context) => {
    const id = context.query.id;

    if (id !== null || id) {
        const res = await fetch(`http://newsapi.org/v2/top-headlines?sources=${id}&apiKey=4003e5a0008e4809b65ff979833053e6`);
        const data = await res.json();

        return {
            kaynakData: data.articles
        }
    }
    else
        return {
            error: "haber bulunamadı :/"
        };
}