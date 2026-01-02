import React from 'react'
import MockData from "../../public/data/mock.json"

export const metadata = {
  title: "BBC News – Article Detail",
  description: "BBC News Article Detail Page",
};

const SingleArticle = ({ slug }) => {
  const article = MockData.news;
  const newsDetails = article.find((news) => news.slug === slug);

  if (!newsDetails) {
    return <div className="container mt-4 h50 text-center">Article not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="row g-4">
        <div className="col-lg-8 col-md-10 mx-auto">
          <h1 className='fw-semibold'>{newsDetails.title}</h1>
          
          <div className="d-flex justify-content-between py-2 mb-4">
            <span className="text-muted fs-12">{newsDetails.lastUpdated}</span>
            <div className="d-flex gap-3 fs-14">
              <span>Share <i className="bi bi-share-fill"></i></span>
              <span>Save <i className="bi bi-bookmark"></i></span>
            </div>
          </div>
          
          <div className="author mb-3">
            <div className="d-flex flex-column">
              <span className="fw-semibold">{newsDetails.author}</span>
              <span className="text-muted fs-12">{newsDetails.place}</span>
            </div>
          </div>
          
          <figure className="mb-4">
            <img
              src={newsDetails.image}
              alt={newsDetails.title}
              className="img-fluid w-100"
              loading="lazy"
            />
          </figure>
          
          <p>{newsDetails.summary}</p>
          
          <p className="text-muted fs-12">
            {newsDetails.lastUpdated} | {newsDetails.tag}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SingleArticle