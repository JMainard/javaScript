var ok;	
ok=document.getElementById("buton");
var nomText;
nomText=document.getElementById("nom");
function functionButon() 
{
	if (nomText.value.length > 1) 
	{
		ok.style.visibility="visible";
	}
	else 
	{
		ok.style.visibility="hidden";
	 }
	 //affiche buton
}

function valider()
{
	var nomSaisi=document.getElementById("nom").value;
	alert(nomSaisi);
}
