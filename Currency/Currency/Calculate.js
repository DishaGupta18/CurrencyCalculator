
const from_currencyEl = document.getElementById('from_currency');
const from_ammountEl = document.getElementById('from_ammount');
const to_currencyEl = document.getElementById('to_currency');
const to_ammountEl = document.getElementById('to_ammount');
const rateEl = document.getElementById('rate');
const convert = document.getElementById('convert');

convert.addEventListener('click', calculate);

function calculate() {
	const from_currency = from_currencyEl.value;
	const to_currency = to_currencyEl.value;

	fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
		.then(res => res.json())
		.then(res => {
			const rate = res.rates[to_currency];
			//to_ammountEl.value = (from_ammountEl.value * rate).toFixed(4);
			to_ammountEl.value = (from_ammountEl.value * rate);
			rateEl.innerText = `${from_ammountEl.value} ${from_currency} = ${to_ammountEl.value} ${to_currency}`
			
		})
}
