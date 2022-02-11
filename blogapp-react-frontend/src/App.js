import Home from'./components/home/Home';
import Blog from './components/blog/Blog';
import ArticleList from './components/article/ArticleList';
import Article from './components/article/Article';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error from './components/error/Error';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import React, { useState } from 'react';
import Header from './components/header/Header';
import Edit from './components/edit/Edit';
import AddBlog from './components/addBlog/AddBlog';


function App() {

  const [userLogin,setUserLogin]= useState({});

  const [articleName,setArticleName]= useState({});

  return (
    <Router>
      <>
        <Header setUserLogin={setUserLogin}/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>

          <Route path='/login' element={<Login setUserLogin={setUserLogin} />}/>

          <Route path='/signup' element={<Signup/>}/>

          <Route path='/blog'  element={ userLogin && userLogin._id ? <Blog/> : <Login setUserLogin={setUserLogin} />} />

          <Route path='/article-list' element={ userLogin && userLogin._id ? <ArticleList/> : <Login setUserLogin={setUserLogin} />} />

          <Route path='/article/:name' element={<Article setArticleName={setArticleName}/>} />

          <Route path='/article/:name/edit' element={<Edit articleName={articleName}/>} />

          <Route path='/add-blog' element={<AddBlog/>} />

          <Route path='*' element={<Error/>} />
        </Routes> 
      </>
    </Router>
  );
}

export default App;
