import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

import Layout from '../Layout';
import NewsBox from '../../components/NewsBox';


const Ulkeler = ({serverNewsTopHeadlines}) => {
	
	const router = useRouter()
	const [newsData, setNewsDAta] = useState(serverNewsTopHeadlines)
	
	const fetchMyApi = async () => {
		
		const result = await axios(`http://newsapi.org/v2/top-headlines?country=${router.query.id}&apiKey=c88e307ba7a44a73a3958d776e7b4947`)
		const json = await result.data;
		
		setNewsDAta(json.articles);
	}

	useEffect(() => {
		if(serverNewsTopHeadlines.length !== 0) {
			fetchMyApi();
		}
		setNewsDAta(serverNewsTopHeadlines)
	}, [router.query.id]);
	
  return (
    <Layout>
		{newsData ?
		<NewsBox newsData={newsData}  /> : <h1>qweqwe</h1>}
    </Layout>
  )
}


export default Ulkeler



export async function getServerSideProps({params}) {
	const res = await axios(`http://newsapi.org/v2/top-headlines?country=${params.id}&apiKey=c88e307ba7a44a73a3958d776e7b4947`)
	const json = await res.data;
	return { props: { serverNewsTopHeadlines: json.articles }}
}

