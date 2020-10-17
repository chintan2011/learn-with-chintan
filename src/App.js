import React from 'react';
import './App.css';
import BlogPreview from './components/BlogPreview'
import ContactInfo from './components/ContactInfo'
import data from './data.json';
import ScrollUpButton from "react-scroll-up-button"

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <h1>Learn With Chintan</h1>
        <h3>Welcome to My Blog</h3>
        <h4>Help yourself with these projects to learn and boost your software skills!!!</h4>
      </div>

      <div className="app__content">
        <div className="app__left">
        {
          data.map((data)=> {
            return(
              <BlogPreview 
                          data={data}
                          />
            )
          })
        }
        <ScrollUpButton/>
        </div>

        <div className="app__right">
          <ContactInfo/>
        </div>
        
      </div>
    </div>
  );
}

export default App;
