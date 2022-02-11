import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({setUserLogin}) {

    return (
        <div>
            <nav className="header">
                <h2 className="logo">My Blog</h2> {/* JSX*/}
                <div className="articles">
                    <Link className="link" to="/blog">Home</Link>
                    <Link className="link" to="/article-list">Articles</Link>
                    <Link className="link" to="/add-blog">Add Blog</Link>
                    <div className="link"onClick={()=>setUserLogin({})} >Log Out</div>
                    </div>
            </nav>
        </div>
    );
}

export default Header; 