export default function ArticleCard({ title, body }) {
  return (
    <div className="article-card">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}