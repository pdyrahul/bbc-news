
import Link from "next/link";
import NewsGrid from "../NewsGrid/NewsGrid";
import Card from "../ui/Card";

export default function HeroSection({ data }) {
  const mainData = data.hero;
  const slug = mainData.main.slug;
  return (
    <section className="row g-4 mb-4">
      <article className="col-lg-8">
        <div className="row g-3">
          <div className="col-md-4 order-md-1 order-2">
            <Link href={`/news/${slug}`} className="nav-item"> <h3 className="mt-md-0 mt-3 fw-semibold article-link">{mainData.main.title}</h3></Link>
            <p>{mainData.main.summary}</p>
            <p className="text-muted fs-12">
              {mainData.main.lastUpdated} | {mainData.main.tag}
            </p>
          </div>
          <div className="col-md-8 order-md-2 order-1">
            <img
              src={mainData.main.image}
              alt={mainData.main.title}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-4">
          <NewsGrid data={data.news} />
        </div>

      </article>

      <aside className="col-lg-4">
        {mainData.secondary.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </aside>
    </section>
  );
}