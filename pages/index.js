import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Link from 'next/link'
import NewsBox from '../components/NewsBox';
import axios from 'axios';


import '../styles/styles.scss';

const Home = ({serverNewsTopHeadlines}) => {

	const [newsData, setNewsDAta] = useState(serverNewsTopHeadlines)
	console.log(newsData);
	
	useEffect( () => {
		if(serverNewsTopHeadlines.length == 0) {
			async function fetchMyApi() {
				const result = await axios(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=c88e307ba7a44a73a3958d776e7b4947`)
				setNewsDAta(result.data.articles);
			}
			fetchMyApi();
		}
	}, []);
	
  return (
    <Layout>
		<NewsBox newsData={newsData}  />
    </Layout>
  )
}




export default Home;

export async function getServerSideProps() {
	const res = await axios(`http://newsapi.org/v2/top-headlines?country=tr&apiKey=c88e307ba7a44a73a3958d776e7b4947`)
	const json = await res.data;
	return { props: { serverNewsTopHeadlines: json.articles }}
}
