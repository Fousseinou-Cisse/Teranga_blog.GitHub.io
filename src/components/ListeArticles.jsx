import ArticleCard from "./ArticleCard"
export default function ListeArticles({articles, favoris, onToggleFavori}) {
  return (
<div className="liste-articles">
    {articles.map(article=> (
        <ArticleCard
          key={article.id}
          title={article.title}
          body={article.body}
          estFavori={Boolean(favoris[article.id])}
          onToggleFavori={() => onToggleFavori(article.id)}
          />
      ))}
    </div>
  )}
