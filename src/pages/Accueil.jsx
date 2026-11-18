import ArticleCard from '../components/ArticleCard'
export default function Accueil(){
  return(
<>
<h1>Accueil du Blong</h1> 
<ArticleCard
title="Developeur Débutant"
body="j'ai beacoup le cours de react." 
 />
 <ArticleCard
 title="la presion."
 body="on souffre de la presion de Mr.Diouf"
 />
 <ArticleCard
 title="Sécurité"
 body=" je suis pationné par la Cyber sécurité."
 />
 </>
  )
}