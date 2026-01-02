import Link from "next/link";

export default function Card({ data }) {
  const slug = data.slug;
  return (
    <div className="Card mb-3 border-bottom border-grey pb-4">
      <img
        src={data.image}
        alt={data.title}
        className="img-fluid"
        loading="lazy"
      />

      <Link href={`/news/${slug}`} className="nav-item"><h6 className="Card-title mt-2 fw-semibold">
        {data.title}
      </h6>
      </Link>

      <p className="mt-2 line-clamp-2">
        {data.summary}
      </p>
      {(data.lastUpdated || data.tag) && (
        <div className="d-flex align-items-center gap-2 text-muted fs-12 mt-2">
          {data.lastUpdated && <span>{data.lastUpdated}</span>}
          {data.lastUpdated && data.tag && (
            <span className="meta-separator">|</span>
          )}
          {data.tag && <span className="fw-semibold">{data.tag}</span>}
        </div>
      )}
    </div>
  );
}
