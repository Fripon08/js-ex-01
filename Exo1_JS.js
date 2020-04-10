let double;
let annees;
let conver;
let degres;
let deuxnombres;


document.getElementById('pair').addEventListener('click',execute);
document.getElementById('biss').addEventListener('click',execute);
document.getElementById('conv').addEventListener('click',execute);
document.getElementById('equa').addEventListener('click',execute);
document.getElementById('cal').addEventListener('click',execute);
document.getElementById('som').addEventListener('click',execute);


function execute() {
	const nbre1=Number(document.getElementById('nbp').value);
	const nbre2=Number(document.getElementById('nbi').value);
	const nbre3=Number(document.getElementById('nbc').value);
	const nbre4=Number(document.getElementById('a').value);
	const nbre5=Number(document.getElementById('b').value);
	const nbre6=Number(document.getElementById('nbs1').value);
	const nbre7=Number(document.getElementById('nbs2').value);
	const nbre8=Number(document.getElementById('nbcal1').value);
	const nbre9=Number(document.getElementById('nbcal2').value);

	double = pair(nbre1);
	annees = bissextile(nbre2);
	conver = convertisseur(nbre3);
	degres = equation(nbre4, nbre5);
	deuxnombres = somdeuxnombres(nbre6, nbre7);

	writeResponse();
}

function pair(nbre1) {
	var rep = "";
	if (nbre1%2==0) {
		rep = "pair";
	} else {
		rep = "impair";
	}

	return rep;
}

function bissextile(nbre2) {
	let annee = "";
	if (nbre2 % 400 == 0 || (nbre2 % 4 == 0 && nbre2 % 100 != 0)) {
		annee = "bissextile";
	} else {
		annee = "non bissextile";
	}

	return annee;
}

function convertisseur(nbre3) {
	let ans;
	let mois;
	let jour;
	let heure;
	let minute;
	let temps;

	ans = Math.trunc(nbre3/31536000);
	nbre3 %= 31536000; 
	mois = Math.trunc(nbre3/2678400);
	nbre3 %= 2678400;
	jour = Math.trunc(nbre3/86400);
	nbre3 %= 86400; 
	heure = Math.trunc(nbre3/3600);
	nbre3 %= 3600;
	minute = Math.trunc(nbre3/60);
	nbre3 %=60;

	temps = ( ans + " AN(S) " + mois + " MOIS " + jour + " J " + heure + " H " + minute + " MIN " + nbre3 + " S " );

	return temps;
}

function equation(nbre4, nbre5) {
	let reponse;

	if (nbre4==0 && nbre5!=0) {
    	reponse = "Solution impossible";
	}
	if (nbre4==0 && nbre5==0) {
   	 	reponse = "X peut prendre n'importe quelle valeur";
	}
	if (nbre4!=0 && nbre5!=0) {
    	reponse = (" x = " + (-nbre5/nbre4));
	}

	return reponse;
}

function somdeuxnombres(nbre6, nbre7){
	let temp;
	let temp2;
	let somme = 0;
	let total;

	temp = nbre6;
	temp2 = nbre7;
	
	if (nbre6>nbre7){
	    while (nbre6>=nbre7){
	        somme=somme+nbre7;
	        nbre6=nbre6-1;
	    }
	}

	if (nbre7>nbre6){
	    while (nbre7>=nbre6){
	        somme=somme+nbre7;
	        nbre7=nbre7-1;
	    }
	}

	if (nbre6==nbre7){
	    total = ("La somme des nombres compris entre " + nbre6 + " et " + nbre7 + " est 0 ")
	}
	else{
	    total = ("La somme des nombres compris entre " + temp + " et " + temp2 + " est " + somme)
	}

	return total;
}

function calculatrice() {

}

function writeResponse() {
	document.getElementById("Nbpair").value = double;
	document.getElementById("Bissextile").value = annees;
	document.getElementById("Convertisseur").value = conver;
	document.getElementById("Equation").value = degres;
	document.getElementById("Somme2nombres").value = deuxnombres;
}
