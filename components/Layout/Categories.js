import React, { useState } from 'react';
import Link from 'next/link'

import {  MdFace, MdCast } from 'react-icons/md';
import './Categories.scss';

const Categories = ({countryList, sourceList}) => {
    const categoryList = [
        {
			id: 1,
			query: 'covid',
            title: 'Covid-19'
        },
        {
			id: 2,
			query: 'galatasaray',
            title: 'Galatasaray'
        },
        {
			id: 3,
			query: 'istanbul',
            title: 'İstanbul'
        },
        {
			id: 4,
			query: 'ateş',
            title: 'Ateş'
        },
        {
			id: 5,
			query: 'su',
            title: 'Su'
        },
        {
			id: 6,
			query: 'toprak',
            title: 'Toprak'
        },
        {
			id: 7,
			query: 'tahta',
            title: 'Tahta'
        }
    ]

    return (
        <div className="category-list">
          
            <div className="list list-categories">
                <ul>
                    <li>
                        <Link href="/iletisim">
                            <a>İletişim</a>
                        </Link>
                    </li>
                </ul>
                <div className="list-title">Source List</div>
                <ul>
                    {
                        sourceList.map(item =>
                            <li key={item.id}>
                                <Link as={`/kaynak/${item.id}`} href="/kaynak/[id]">
                                    <a>
                                        <em className="icon">
                                            <MdCast />
                                        </em>
                                        <span className="text">{item.name}</span>
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                    
                </ul>
                <div className="list-title">Category List</div>
                <ul>
                    {
                        categoryList.map(item =>
                            <li key={item.id}>
                                <Link as={`/kategori/${item.query}`} href="/kategori/[id]">
                                    <a>
                                        <em className="icon">
                                            <MdFace />
                                        </em>
                                        <span className="text">{item.title}</span>
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                    
                </ul>
                <div className="list-title">Country List</div>
                <ul>
                    
                    {
                        
                       countryList.map((item) => 
					   <li key={item.id}>
                           
                            <Link as={`/ulkeler/${item.short}`} href="/ulkeler/[id]">
                                <a>
                                    <em className="icon">
                                        <img width="20px" src={item.flag} alt=""/>
                                    </em>
                                    <span className="text">{item.name}</span>
                                </a>
                            </Link>
                       </li>
                       )
                    }
                </ul>
            </div>
        </div>
    )
}



export default Categories


