import React, { useState } from 'react';
import TimeAgo from 'react-timeago'
import Masonry from 'react-masonry-css'
import ModalDetail from './ModalDetail'
import {MdClearAll, MdMoodBad} from 'react-icons/md';
import './NewsBox.scss';
import ContentLoader from "react-content-loader";



const NewsBox = ({newsData}) => {
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };
    return (
        <div className="Titles">
                <div className="TitlesContainer">
				
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {
							
                            newsData?.map((item, index) => 
								item ? <TitleItem key={index} item={item}/> : <h1> sadasdsadsadasdas</h1>
                            )
                        }
                        </Masonry>
                </div>
        </div>
    )
}



export default NewsBox




const TitleItem = ({item}) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal(value) {
		setIsOpen(true);
	}
    return (
        <div className="listTitle-item">
			<div onClick={openModal}>
				<div className="listTitle-cover">
					<div className="image-wrapper">
						<img src={item.urlToImage} alt=""/>
					</div>
					<div className="listTitle-created-date">
						<TimeAgo date={item.publishedAt} />
					</div>
					<span className="listTitle-author">@{item.author}</span>
					<div className="listTitle-icon">
						<MdMoodBad/>
					</div>
				</div>
				<div className="listTitle-desc">{item.title}</div>
			</div>
            <ModalDetail isOpen={modalIsOpen} setIsOpen={setIsOpen} newsDetail={item}> </ModalDetail>
        </div>
    )
}