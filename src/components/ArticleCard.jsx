export default function ArticleCard({ article }) {
  return (
    <div className="article-card">
      <h2>{article.title}</h2>
      <p>{article.excerpt}</p>
      <button onClick={() => console.log(article.id)}>Read More</button>
    </div>
  );
}