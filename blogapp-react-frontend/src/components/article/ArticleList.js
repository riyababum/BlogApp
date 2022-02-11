import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
// import Error from '../error/Error';
import './Article.css';

function ArticleList(props) {

    const [articleData,setArticleData] = useState([]);

    async function fetchAPI (){
        const response = await fetch(`/api/article-list`);
        const body = await response.json();
        console.log(body); 
        setArticleData(body);
    }

    useEffect(()=>{
        fetchAPI();  
    },[]);


    return (
        <>
            <div>
                <h1 id='articles'>Articles</h1>
                {articleData.map( (article,key)=> (
                    <Link id='body' key={key} to={`/article/${article.name}`}>
                        <h3 id='list'>
                            {article.title} 
                        </h3>  
                        <p id='list-body'>
                            {article.description.substring(0,150)}....
                        </p>
                        <br/>
                        <hr/>
                        <br/>
                    </Link>          
                ))}
            </div>
        </>
    );
}

export default ArticleList;