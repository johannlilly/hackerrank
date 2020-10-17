import React, { useEffect, useState } from "react";

const API_URL = 'https://jsonmock.hackerrank.com/api/articles';

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [pages, setPages] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const retrieveArticles = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_URL}?page=${page}`);
      const { total_pages, data } = await res.json();
      setPages(total_pages);
      setArticles(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClick = (p) => {
    if (loading) return;

    setPage(p);
  };

  useEffect(() => {
    retrieveArticles();
  }, [page]);

  return (
    <React.Fragment>
      <div className="pagination">
        {pages &&
          Array(pages)
            .fill()
            .map((_, i) => (
              <button
                disabled={loading}
                onClick={() => handleClick(i + 1)}
                data-testid="page-button"
                key={`page-button-${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
      </div>
      <ul className="results">
        {articles.filter(({ title }) => title).map(({ title }) => (
          <li key={title} data-testid="result-row">
            {title}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Articles;