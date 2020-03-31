let total;
let grand;
let petit;
document.getElementById('sub').addEventListener('click',execute);

function execute () {
	
	let nbre=Number(document.getElementById('nbr').value);
	let tab=[];
	tab.push(nbre);
	total=somme(tab);
	grand=max(tab);
	petit=min(tab);
	console.log(total); console.log(grand); console.log(petit);
}

function somme(tab) {
	let som = 0;
	for (let i = 0; i < tab.length; i++) {
		som=som+tab[i];
	}
	return som;
}

function min(tab) {
	let min =tab[0];

	for (let i = 0; i < tab.length; i++) {
		if (min>tab[i]) {
			min=tab[i];
		}
	}
	return min;
}

function max(tab){
	let max = tab[0];

	for (var i = 0; i < tab.length; i++) {
		if (max<tab[i]) {
			max=tab[i];
		}
	}
	return max;
}

function moyenne(tab) {

}

function Nnbre() {

}


/*var nbr;
	nbr1 = Number(document.getElementById("nbr1").value);
	nbr2 = Number(document.getElementById("nbr2").value);
	sum = nbr1 + nbr2;
	document.getElementById("sum").value = sum;*/
/*
function numAverage(a) {
  var b = a.length,
      c = 0, i;
  for (i = 0; i < b; i++){
    c += Number(a[i]);
  }
  return c/b;
}

numAverage([5, 1, 1, 1, 5]);
somme();
*/