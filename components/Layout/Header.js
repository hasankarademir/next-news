import Link from 'next/link';
import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import './Header.scss';


const Header = () => {
    return (
        <header>
            <Logo />
        </header>
    )
}

export default Header;


const Logo = () => {
    return (
        <div className="Logo">
            <Link href="/">
                <a>	
					<div className="o"></div>
					<div className="next">next</div>
					<div className="news">news</div>
				</a>
            </Link>
        </div>
    )
}

const Search = () => {
    return (
        <div className="Search">
            <input placeholder="search" type="text"/>
        </div>
    )
}

