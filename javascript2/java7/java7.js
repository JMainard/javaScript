function valider()
{
	var maNouvelleLigne=document.createElement("tr"); // Ligne 


	var tdNom=document.createElement("td"); //creation du td 
	var tdPrenom=document.createElement("td");
	var tdTelephone=document.createElement("td");
	var tdMail=document.createElement("td");

	var leNom=document.getElementById("nom").value; // création des variable
	var lePrenom=document.getElementById("prenom").value;
	var leTelephone=document.getElementById("telephone").value;
	var leMail=document.getElementById("adresseMail").value;

	var leTextNodeNom=document.createTextNode(leNom);
	var leTextNodePrenom=document.createTextNode(lePrenom);
	var leTextNodeTelephone=document.createTextNode(leTelephone);
	var leTextNodeMail=document.createTextNode(leMail);

	tdNom.appendChild(leTextNodeNom); // liason enfant des donnée à td 
	tdPrenom.appendChild(leTextNodePrenom);
	tdTelephone.appendChild(leTextNodeTelephone);
	tdMail.appendChild(leTextNodeMail);

	maNouvelleLigne.appendChild(tdNom);//liaison de td à tr 
	maNouvelleLigne.appendChild(tdPrenom);
	maNouvelleLigne.appendChild(tdTelephone);
	maNouvelleLigne.appendChild(tdMail);

	tableauFormulaire=document.getElementById("tableauContact");
	tableauFormulaire.appendChild(maNouvelleLigne);
}
