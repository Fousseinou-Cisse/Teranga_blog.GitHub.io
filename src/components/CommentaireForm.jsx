import { useState } from "react"
export default function CommentaireForm({ onAjouterCommentaire }) {
const [nom, setNom] = useState("")
  const [message, setMessage] = useState("")
  const [erreur, setErreur] = useState("")

  function gereEnvoi(evenement) {
    evenement.preventDefault()

    const nomNettoye = nom.trim()
    const messageNettoye = message.trim()
    
    if (nomNettoye ==="" || messageNettoye.length <3){
setErreur("Veuillez saisir des bons caractères.")
      return
    }
    onAjouterCommentaire({
      id:Date.now(),
      nom: nomNettoye,
      message: messageNettoye,
    })
    setNom("")
    setMessage("")
    setErreur("")
  }
  return(
  <form onSubmit={gereEnvoi} className="commentaire-form">  
<div> 
  <input
  type="text"
  value={nom}
  onChange={evenement => setNom(evenement.target.value)}
  placeholder="Votre nom"
  />
</div>
<div> 
  <textarea
  value={message}
  onChange={evenement => setMessage(evenement.target.value)}
  placeholder="Votre commentaire"
  />
</div>
{erreur && <p className="erreur">{erreur}</p>}
<button type="submit">publier</button>
  </form>
  )
}
