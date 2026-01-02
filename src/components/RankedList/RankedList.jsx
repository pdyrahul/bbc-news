import Link from "next/link";

export default function RankedList({data}) {
  return (
    <section className="mb-5 border-top border-bottom border-black py-4">
      <h5 className="mb-4 fw-bold">Most Watched</h5>

      <div className="row g-4">
        {data.map((item) => (
          <div
            key={item.id}
            className="col-12 col-sm-6 col-lg-3"
          >
            <div className="d-flex align-items-start gap-2">
              {/* Rank */}
              <span className="fs-3 fw-bold text-muted">
                {item.rank}
              </span>

              {/* Content */}
              <Link href="/" className="article-link">
                <div className="d-flex">
                  <i className="bi bi-play-fill mt-1"></i>
                  <span className="fw-semibold article-title">
                    {item.title}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
