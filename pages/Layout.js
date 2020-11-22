//c88e307ba7a44a73a3958d776e7b4947
//4003e5a0008e4809b65ff979833053e6
import React, { Component, Children, useEffect, useState} from 'react';
import axios from 'axios';
import Head from 'next/head'
import Header from '../components/Layout/Header';
import Categories from '../components/Layout/Categories';
import JSON_countryList from '../data/countryList.json';
import useWindowSize from '../hooks/useWindowSize'

import "./index.scss"


const Layout = ({children, title="NEXT NEWS"}) => {
	const [newsSource, setNewsSource] = useState([])

	const windowSize = useWindowSize();
	console.log("SAYFA BOYUTU: ", windowSize);

	const isClient = typeof window === 'object';

	/* console.log(window.localStorage); */
	
	if(isClient) {
		console.log(window.localStorage);
	}
	console.log("sunucu mu: ", isClient ? 'hayır' : 'evet');
	
	const fetchMyApi = async () => {
		
		const result = await axios(`https://newsapi.org/v2/sources?apiKey=c88e307ba7a44a73a3958d776e7b4947`)
		const json = await result.data;
		
		setNewsSource(json.sources);
		console.log(newsSource);
		
	}

	useEffect(() => {
		
			fetchMyApi();
		
	}, []);
      return (
        <React.Fragment>
            <Head>
              <title>{title}</title>
              <meta property="og:title" content={title} key="title" />
              <link href={'https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700&display=swap'} rel="stylesheet" />
            </Head>
			<Header />
            <div className="Main">
				<Categories sourceList={newsSource} countryList={JSON_countryList} />
              	{children}
            </div>
        </React.Fragment>
      );
  

};

export default Layout;