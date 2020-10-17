import React, {useState} from 'react'
import './BlogPreview.css'
import ReactMarkdown from "react-markdown";
import Button from 'react-bootstrap/Button';
//import BlogDetail from './BlogDetail';
import "bootstrap/dist/css/bootstrap.min.css";



function BlogPreview({ data }) {
    /* 
        markdown
        # Header 1
        ## Header 2
        _ italic _
        ** bold **
        <b> bold Html </b> markdown reference link https://github.com/remarkjs/react-markdown
    */
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div className="react-card-content">
    {
        data.content.steps.map((elem)=> {
            return(
                <ReactMarkdown source={elem} escapeHtml={false}/>
            )
        })
    }</div>
    const linkName=readMore?'Read Less':'Read More'

    return (
        <div className="blog-preview-container">
            <div className="react-card">
                <div className="react-card-header">
                    <ReactMarkdown source={'## '+data.header}/>
                </div>
                <div className="react-card-language">
                    <ReactMarkdown source={'##### With: ' + data.language}/>
                </div>

                <div className="react-card-framework">
                    <ReactMarkdown source={'##### Using: ' + data.framework}/>
                </div>

                <div className="react-card-github">
                    {
                        (()=> {
                            console.log(data.github)
                            if(data.github){
                                return(
                                    <div>
                                        <h6>Github: <a href="{data.github}">{data.github}</a></h6>
                                    </div>
                                )
                            }
                        })
                    ()}
                    
                </div>

                <div className="react-card-hosting">
                {
                        (()=> {
                            console.log(data.hostingUrl)
                            if(data.hostingUrl){
                                return(
                                    <div>
                                        <h6>Hosting Url: <a href="{data.hostingUrl}">{data.hostingUrl}</a></h6>
                                    </div>
                                )
                            }
                        })
                    ()}
                </div>

                <div className="react-card-content-title">
                {
                    (()=> {
                        if(data.content.title){
                            return(
                                <div>
                                    <ReactMarkdown source={data.content.title}/>
                                </div>
                            )
                        }
                    })
                ()}
                </div>

                <div className="react-card-content-subtitle">
                {
                    (()=>{
                        if(data.content.subtitle){
                            return(
                                <div>
                                    <ReactMarkdown source={data.content.subtitle}/>
                                </div>
                            )
                        }
                    })
                ()}
                </div>
                <Button 
                    variant="outline-success"  
                    size="lg" 
                    className="react-bs-read-more"
                    onClick={()=>{setReadMore(!readMore)}}>
                    {linkName}                        
                </Button>
                {readMore && extraContent} 

                
                     
            </div>
        </div>
    )
}

export default BlogPreview;