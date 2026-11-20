export default function BarreRecherche({ recherche, onChangeRecherche }) {
return(
    <div className="barre-recherche">
      <input
      type="text"
      value={recherche}
onChange={evenement => onChangeRecherche(evenement.target.value)}
      placeholder="Rechercher par titre d'article"
      />
    </div>
  )}