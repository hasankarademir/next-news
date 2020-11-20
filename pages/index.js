import React, { useEffect, useState } from 'react';
import Layout from './Layout';
import Link from 'next/link'
import ListTitles from '../components/Layout/ListTitles';
import ListContent from '../components/Layout/ListContent';
import axios from 'axios';


import '../styles/styles.scss';

const Home = ({serverNewsTopHeadlines}) => {

	const [newsData, setNewsDAta] = useState(serverNewsTopHeadlines)
	console.log(newsData);
	
	useEffect( () => {
		if(serverNewsTopHeadlines.length == 0) {
			async function fetchMyApi() {
				const result = await axios(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=4003e5a0008e4809b65ff979833053e6`)
				setNewsDAta(result.data.articles);
			}
			fetchMyApi();
		}
	}, []);
	
  return (
    <Layout>
		<ListTitles newsData={newsData}  />
    </Layout>
  )
}




export default Home;

export async function getServerSideProps() {
	const res = await axios(`http://newsapi.org/v2/top-headlines?country=tr&apiKey=4003e5a0008e4809b65ff979833053e6`)
	const json = await res.data;
	return { props: { serverNewsTopHeadlines: json.articles }}
}
