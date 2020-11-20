import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';

import Layout from '../Layout';
import ListTitles from '../../components/Layout/ListTitles';


const Ulkeler = ({serverNewsTopHeadlines}) => {
	console.log('qweqwewq', serverNewsTopHeadlines);
	
	const router = useRouter()
	const [newsData, setNewsDAta] = useState(serverNewsTopHeadlines)
	
	const fetchMyApi = async () => {
		
		const result = await axios(`http://newsapi.org/v2/top-headlines?country=${router.query.id}&apiKey=4003e5a0008e4809b65ff979833053e6`)
		const json = await result.data;
		
		setNewsDAta(json.articles);
	}

	useEffect(() => {
		console.log('1111111111111');
		
		if(serverNewsTopHeadlines.length !== 0) {
			fetchMyApi();
		}
	}, [router.query.id]);
	
  return (
    <Layout>
		<h1></h1>
		<ListTitles newsData={newsData && newsData}  />
    </Layout>
  )
}


export default Ulkeler



export async function getServerSideProps({params}) {
	const res = await axios(`http://newsapi.org/v2/top-headlines?country=${params.id}&apiKey=4003e5a0008e4809b65ff979833053e6`)
	const json = await res.data;
	return { props: { serverNewsTopHeadlines: json.articles }}
}

