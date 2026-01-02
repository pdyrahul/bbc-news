
import Card from "../ui/Card";

export default function NewsGrid({data}) {
  return (
    <section className="row g-4 mb-5">
      {data.slice(0,3).map((item, index) => (
        <article key={index} className="col-md-6 col-lg-4">
          <Card data={item} />
        </article>
      ))}
    </section>
  );
}
