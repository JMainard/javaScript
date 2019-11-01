var tabFruit=["Peche","Banane","Pamplemousse","Orange","Framboise","Myrtille","Cassis","Citron","Tomate","Fraise"];
alert(tabFruit);
function supprimer()
{

	var numARetirer=document.getElementById("suppr").value;
	numARetirer=numARetirer-1;
	alert(numARetirer);

	var tabMoinsLeFruits=[];
	//Prend les cases avant le num retirer et les mets dans le nouveau tableaux
	for (var noCase=0; noCase<numARetirer; noCase++)
	{
		tabMoinsLeFruits[noCase]=tabFruit[noCase];
	}
	for (var noCase=numARetirer+1; noCase<tabFruit.length*1; noCase++)
	{
		tabMoinsLeFruits[noCase-1]=tabFruit[noCase];
	}
	tabFruit=tabMoinsLeFruits;
	alert(tabMoinsLeFruits);
}
