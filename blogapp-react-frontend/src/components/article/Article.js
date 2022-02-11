import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useParams ,Link, useNavigate} from 'react-router-dom';
import Error from '../error/Error';

function Article(props) {
    const navigate = useNavigate();
    const {name} = useParams();

    const {setArticleName} = props;

    const [articleData,setArticleData] = useState({});

    async function fetchAPI (){
        const response = await fetch(`/api/article/${name}`);
        const body = await response.json();
        console.log(body); 
        setArticleData(body);
    }

    useEffect(()=>{
        fetchAPI();  
    },[]);

    async function deleteBlog() {
        await axios.delete(`/api/article/${name}/delete-blog`);
        navigate('/article-list');
    }

    return (
        <>
            <div className='article'>
                <h1 id='article-title'>{articleData.title}</h1>
                <p id='article-body'>{articleData.description}</p>
                <br/><br/>
            </div>
            <div id='buttons'>
                <Link to={`/article/${articleData.name}/edit`} >
                    <button onClick={()=>setArticleName(articleData.name)} id='editbtn'>Edit</button>
                </Link>
                
                <button onClick={()=>deleteBlog()} id='delete'>Delete</button>
            </div>
        </>
    );
}

export default Article;