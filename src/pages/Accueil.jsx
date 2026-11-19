import {useState} from "react"
import ArticleCard from '../components/ArticleCard'
export default function Accueil(){
  const [favori, setFavori] = useState([false, false, false])
  function basculerFavori(index){
    setFavori(etatActuel =>
      etatActuel.map((valeur, i) =>(i === index ? !valeur : valeur))

    )
  }
  const nombreFavori=favori.filter(Boolean).length
  return(
<>
<h1>Accueil du Blong</h1> 
<p>Nombre d'articles en favori : {nombreFavori}</p>
<ArticleCard
title="Developeur Débutant"
body="j'ai beacoup le cours de react." 
estFavori={favori[0]}
onToggleFavori={() => basculerFavori(0)}
 />
 <ArticleCard
 title="la presion."
 body="on souffre de la presion de Mr.Diouf"
 estFavori={favori[1]}
 onToggleFavori={() => basculerFavori(1)}
 />
 <ArticleCard
 title="Sécurité"
 body=" je suis pationné par la Cyber sécurité."
 estFavori={favori[2]}
 onToggleFavori={() => basculerFavori(2)}
 />
 </>
  )
}