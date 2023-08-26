import React from 'react'

const Newsitem = (props) => {

  let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
  return (
    <div>
      <div className="card" >
        <div style={{
          position: "absolute",
          display: "flex",
          justifyContent: "flex-end",
          right: "0"
        }}>
          <span className="badge rounded-pill bg-danger" >{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(publishedAt).toGMTString()}</small></p>
          <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark">Read More</a>
        </div>
      </div>
    </div>
  )
}

export default Newsitem
