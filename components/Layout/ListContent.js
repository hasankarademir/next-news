import React, { useState } from 'react';
import TimeAgo from 'react-timeago'
import {MdFavoriteBorder } from 'react-icons/md';
import './ListContent.scss';



const ListContent = (props) => {
    const [dataListContent, setdataListContent] = useState(props.dataListContent);

    return (
        <div className="ListContent">
                <ul>
                    {
                        dataListContent.map((item) => 
                            <li key={item.id}>
                                <span className="order">
                                    {item.id}
                                </span>
                                <span className="author">
                                    @{item.author}
                                </span>
                                <span className="likes">
                                    <span className="text">
                                        {item.likes}
                                    </span>
                                    <span className="icon">
                                        <MdFavoriteBorder />
                                    </span>
                                </span>
                            </li>
                        )
                    }
                </ul>
        </div>
    )
}



export default ListContent