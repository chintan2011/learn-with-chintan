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
        <b> bold Html </b>
    */
    const [readMore,setReadMore]=useState(false);
    const extraContent=<div className="react-card-content">
    {
        data.content.steps.map((elem)=> {
            return(
                <ReactMarkdown source={elem}/>
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
                <div className="react-card-language-framework">
                    <ReactMarkdown source={'```'+ data.language + '```'}/>
                    <ReactMarkdown source={'```' + data.framework + '```'}/>
                </div>

                <div className="react-card-github">
                    {
                        //data.github ? 'Github: ' + <a href="{data.github}">{data.github}</a> : ""
                        (()=> {
                            console.log(data.github)
                            if(data.github){
                                return(
                                    <div>
                                        Github: <a href="{data.github}">{data.github}</a>
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
                                        Hosting Url: <a href="{data.hostingUrl}">{data.hostingUrl}</a>
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