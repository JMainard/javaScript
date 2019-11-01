

function chiffre(event)
{
	var zoneAffichage=document.getElementById("code");
	var elementClique=event.target;
    var sonChiffre=elementClique.value;

	if (zoneAffichage.value.length<4)
{
		zoneAffichage.value+=sonChiffre;
}
}




/* function chiffre()
{
	var boutonCliquer;
	boutonCliquer=event.target;
	var leChiffre=boutonCliquer.value;
		

}*/
