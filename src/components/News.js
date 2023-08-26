import React, {useState} from 'react'
import { useEffect } from 'react';
import Newsitem from './Newsitem'
import Load from './load';
import PropTypes from 'prop-types'

import InfiniteScroll from "react-infinite-scroll-component";


const News=(props)=>{
  
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState(true)
  const [page,setPage]=useState(1)
  const [totalResult,setTotalResult]=useState(0)
 

  const capitalize=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
  }

  
  
  

  const updateNews=async()=>{
    props.setProgress(10);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page}&pagesize=${props.pagesize}`;
    setLoading(true)
    props.setProgress(50);
    let data=await fetch(url);
    let parseddata=await data.json();
    props.setProgress(80);
    setArticles(parseddata.articles);
    setLoading(false);
    setTotalResult(parseddata.totalResults);

    props.setProgress(100);
  }

  useEffect(()=>{
    document.title=capitalize(`${props.category}`)+"-NewsHunt";
    updateNews();
    // eslint-disable-next-line
  },[])

const fetchMoreData = async() => {
  
  
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api}&page=${page+1}&pagesize=${props.pagesize}`;
  setPage(page+1);
    let data=await fetch(url);
    let parseddata=await data.json();
    setArticles(articles.concat(parseddata.articles));
    setTotalResult(parseddata.totalResults)
    
};

    return (
      <>
        <h1 className='text-center' style={{margin:"90px 0px 40px 0px"}}>NewsHunt-Top {capitalize(`${props.category}`)} Headlines</h1>
        {loading && <Load/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length<totalResult}
          loader={<Load/>}
        >
          <div className="container">
        <div className="row my-3" >
        {articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
            <Newsitem title={element.title} description={element.description?element.description:""} imageUrl={element.urlToImage?element.urlToImage:"https://cdn1.expresscomputer.in/wp-content/uploads/2022/04/20113309/EC_Merger_01_750.jpg"} 
            newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name}/>
            </div>
        })}
        </div>
        </div>
        </InfiniteScroll>
        
      </>
    )
}

News.defaultPropsdefaultProps = {
  country: "in",
  pagesize: 6,
  category:"general"
  
};

News.propTypes={
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string

};

export default News
