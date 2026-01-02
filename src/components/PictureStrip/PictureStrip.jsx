
export default function PictureStrip({data}) {
  return (
    <section className="mb-5">
      <h5 className="mb-3 fw-semibold">In Pictures</h5>
      <div className="row g-3">
        {data.map((item, index) => (
          <figure key={index} className="col-12 col-md-4 col-lg-3">
            <img
              src={item.image}
              alt={item.caption}
              className="img-fluid"
              loading="lazy"
            />
            <figcaption className="mt-2 small article-link fw-semibold">
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
