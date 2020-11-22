import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Head from 'next/head'


import Layout from '../Layout';
import NewsBox from '../../components/NewsBox';


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
				<NewsBox newsData={newsData && newsData}  />
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
        const res = await fetch(`http://newsapi.org/v2/top-headlines?sources=${id}&apiKey=c88e307ba7a44a73a3958d776e7b4947`);
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