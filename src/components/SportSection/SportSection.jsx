import Card from "../ui/Card";

export default function SportSection({data}) {
  return (
    <section className="mb-5">
      <h5 className="mb-3 fw-semibold">{data.category}</h5>

      <div className="row g-4">
        {data.articles.map((item, index) => (
          <article key={index} className="col-md-6 col-lg-4">
            <Card data={item} />
          </article>
        ))}
      </div>
    </section>
  );
}
