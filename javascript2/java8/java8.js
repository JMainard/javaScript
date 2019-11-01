var tabNote=[];

function valider()
{
	note=document.getElementById("note");
	tabNote[tabNote.length]=note.value*1;
    var mini=tabNote[0];
    var maxi=tabNote[0]; 
	var somme=0;
	//Boucle des condittion max , min  
    for(var noCase=0;noCase<tabNote.length;noCase++)
	{
       if(mini>tabNote[noCase])
       {
			mini=tabNote[noCase];
		}
       if(maxi<tabNote[noCase])
       {
			maxi=tabNote[noCase];
		}
        somme+=tabNote[noCase];
	}
	//Calcule de la moyenne 
    var moyenne=somme/tabNote.length;
	//Si variable undefined =  optimizer bloque la logique ou le navig, le faire par un autre moyen 

	divMoyenne=document.getElementById("moyenne");
	divMoyenne.innerText=moyenne;
	//Teste la note la plus haute
	divNoteHaut=document.getElementById("noteHaut");
	divNoteHaut.innerText=maxi;
	//Teste note la plus basse
	divNoteBas=document.getElementById("noteBas");
	divNoteBas.innerText=mini;
	//Teste de nombre de note entrer
	nbrNote=document.getElementById("nbrNote");
	nbrNote.innerText=tabNote.length;
	
}
