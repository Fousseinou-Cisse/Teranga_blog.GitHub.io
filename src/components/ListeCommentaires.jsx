export default function ListeCommentaires({ commentaires }) {
return (
    <div className="Liste-commentaire">
      <h3>Commentaires</h3>
      {commentaires.length === 0 ?(
        <p>Pas de commentaires pour l'instant.</p>
      ):(
        <ul>
          {commentaires.map(item =>(
            <li key={item.id}>
              <strong>{item.nom}</strong> : {item.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}