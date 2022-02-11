import React from 'react'; 
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {

    return (
        <div className='home'>
            <h1 className='welcome'>My Blog</h1>
            <div className='buttons'>
                <Link to={'/login'} >
                    <button className='button'>Log In</button>
                </Link>
                <Link to={'/signup'} >
                    <button className='button'>Sign Up</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;