import React from 'react';
import './Blog.css';

function Blog() {

    return (
        <>
            <div className='blog'>
                <h1 id='blog-header' >Welcome to <span id='my-blog'>My Blog</span></h1>
                <p id='blog-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean at diam nunc. Aenean porttitor, erat nec laoreet dignissim, urna quam sollicitudin ex, id vehicula odio nulla a mauris. Morbi et tempus eros, ac venenatis mauris. Sed leo quam, molestie bibendum varius at, sodales et dui. Suspendisse eget enim laoreet, vestibulum leo rhoncus, pellentesque nisi. Aenean non mollis ante. Mauris mollis scelerisque odio, eu tempor purus pellentesque at. Nunc velit nunc, viverra eget tellus sed, egestas vulputate lacus. Proin faucibus cursus euismod. Nam bibendum sapien et congue dapibus. Ut iaculis, quam quis placerat scelerisque, quam tortor gravida leo, sit amet maximus risus ex a enim.</p>
            </div>
        </>
    );
}

export default Blog;