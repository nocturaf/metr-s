let inputValue = document.getElementById('metersInput');
let cards = document.getElementById('result');
let km = document.getElementById('kmResult');
let hm = document.getElementById('hmResult');
let dam = document.getElementById('damResult');
let dm = document.getElementById('dmResult');
let cm = document.getElementById('cmResult');
let mm = document.getElementById('mmResult');

inputValue.addEventListener('input', (e) => {
	cards.style.display = 'block';
	let meters = e.target.value;
	km.innerHTML = meters/1000;
	hm.innerHTML = meters/100;
	dam.innerHTML = meters/10;
	dm.innerHTML = meters*10;
	cm.innerHTML = meters*100;
	mm.innerHTML = meters*1000;
});