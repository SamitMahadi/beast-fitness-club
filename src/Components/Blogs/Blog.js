import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
    
        <div>
          <div><h1 className='Blog'>Blogs</h1></div>
          <div className='blogs'>
              <div>
              <h2 className='blog-name'>1.How Does React Work?</h2>
               <p className='blog-paragraph'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering the code</p>
              </div>
              <div>
              <h2 className='blog-name'>2.whats the diffrence betweeen props and state?</h2>
               <p className='blog-paragraph'>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this.setState property is used to update the state values in the component</p>
              </div>
              <div>
              <h2 className='blog-name'>3.What are uses of use state withhout api loading?</h2>
               <p className='blog-paragraph'>useState is a Hook (function) that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.</p>
              </div>
          </div>
            
              
       </div>
       
    );
};

export default Blog;