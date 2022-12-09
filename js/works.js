const data = [
	{
		id: 1,
		name: "Ֆերմայի աշխատող",
		price: 740000,
		regeon: "2",
		info: {
			info1: 'Այս պաշտոնը լրիվ դրույքով է` նպաստներով:',
			info2: 'Բացի աշխատավարձից, այս պաշտոնը կփոխհատուցվի.',
			info3: 'Գործատուն վճարել է բժշկական, ատամնաբուժական և տեսողության ապահովագրություն,…'
		}
	},
	{
		id: 2,
		name: "Ֆերմայի աշխատող",
		price: 740000,
		regeon: "2",
		info: {
			info1: 'Այս պաշտոնը լրիվ դրույքով է` նպաստներով:',
			info2: 'Բացի աշխատավարձից, այս պաշտոնը կփոխհատուցվի.',
			info3: 'Գործատուն վճարել է բժշկական, ատամնաբուժական և տեսողության ապահովագրություն,…'
		}
	},
	{
		id: 3,
		name: "Ցորեն",
		price: 400000,
		regeon: "3",
		info: {
			info1: 'Այս պաշտոնը լրիվ դրույքով է` նպաստներով:',
			info2: 'Բացի աշխատավարձից, այս պաշտոնը կփոխհատուցվի.',
			info3: 'Գործատուն վճարել է բժշկական, ատամնաբուժական և տեսողության ապահովագրություն,…'
		}
	},
	{
		id: 4,
		name: "Ֆերմայի աշխատող",
		price: 200000,
		regeon: "2",
		info: {
			info1: 'Այս պաշտոնը լրիվ դրույքով է` նպաստներով:',
			info2: 'Բացի աշխատավարձից, այս պաշտոնը կփոխհատուցվի.',
			info3: 'Գործատուն վճարել է բժշկական, ատամնաբուժական և տեսողության ապահովագրություն,…'
		}
	},
	{
		id: 5,
		name: "Ֆերմայի աշխատող",
		price: 160000,
		regeon: "2",
		info: {
			info1: 'Այս պաշտոնը լրիվ դրույքով է` նպաստներով:',
			info2: 'Բացի աշխատավարձից, այս պաշտոնը կփոխհատուցվի.',
			info3: 'Գործատուն վճարել է բժշկական, ատամնաբուժական և տեսողության ապահովագրություն,…'
		}
	},
	{
		id: 6,
		name: "Ֆերմայի աշխատող",
		price: 740000,
		regeon: "2",
		info: {
			info1: 'Այս պաշտոնը լրիվ դրույքով է` նպաստներով:',
			info2: 'Բացի աշխատավարձից, այս պաշտոնը կփոխհատուցվի.',
			info3: 'Գործատուն վճարել է բժշկական, ատամնաբուժական և տեսողության ապահովագրություն,…'
		}
	},
	{
		id: 7,
		name: "Ֆերմայի աշխատող",
		price: 200000,
		regeon: "2",
		info: {
			info1: 'Այս պաշտոնը լրիվ դրույքով է` նպաստներով:',
			info2: 'Բացի աշխատավարձից, այս պաշտոնը կփոխհատուցվի.',
			info3: 'Գործատուն վճարել է բժշկական, ատամնաբուժական և տեսողության ապահովագրություն,…'
		}
	},
	{
		id: 8,
		name: "Ֆերմայի աշխատող",
		price: 160000,
		regeon: "2",
		info: {
			info1: 'Այս պաշտոնը լրիվ դրույքով է` նպաստներով:',
			info2: 'Բացի աշխատավարձից, այս պաշտոնը կփոխհատուցվի.',
			info3: 'Գործատուն վճարել է բժշկական, ատամնաբուժական և տեսողության ապահովագրություն,…'
		}
	},
	{
		id: 9,
		name: "Ֆերմայի աշխատող",
		price: 740000,
		regeon: "2",
		info: {
			info1: 'Այս պաշտոնը լրիվ դրույքով է` նպաստներով:',
			info2: 'Բացի աշխատավարձից, այս պաշտոնը կփոխհատուցվի.',
			info3: 'Գործատուն վճարել է բժշկական, ատամնաբուժական և տեսողության ապահովագրություն,…'
		}
	}
];

const regeons = {
	'1': 'Ամբողջը',
	'2': 'Կոտայք',
	'3': 'Գեղարքունիք'
};

const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");
let searchvalue = "";
let rangevalu;
let choices = [];
let filteredData;
let maxPricecheck;

const displayProducts = filteredProducts => {
	productsContainer.innerHTML = filteredProducts
		.map(
			product =>
				`
					<div class="product">
							 <span class="name">${product.name}</span>
							 <span class="regeon">${regeons[product.regeon]}</span>
							 <div class="div_money"><img src="img/money.svg" alt="Գումարի նկար"class="money">֏${product.price}</div>
							 <span class="info"><div class="prdklor"></div>${product.info["info1"]}</span>
							 <span class="info"><div class="prdklor"></div>${product.info["info2"]}</span>
							 <span class="info"><div class="prdklor"></div>${product.info["info3"]}</span>
							 <span class="priceText" onclick="openwindow(${product.id})">Ավելին․․․</span>
						</div>
			 `
		)
		.join("");
};

const setCategories = () => {
	categoriesContainer.innerHTML = Object.keys(regeons)
		.map(
			regeon =>
				`
				<br>
				<input type="checkbox" id="${regeons[regeon]}" value="${regeon}" class="cat">
				<label for="${regeons[regeon]}" class="cat">${regeons[regeon]}</label><br>
			 `
		)
		.join("");
};

searchInput.addEventListener("keyup", e => {
	searchvalue = e.target.value.toLowerCase();
	checkfilter();
});

const setPrices = () => {
	const priceList = data.map(item => item.price);
	const minPrice = Math.min(...priceList);
	const maxPrice = Math.max(...priceList);

	priceRange.min = minPrice;
	priceRange.max = maxPrice;
	priceRange.value = maxPrice;
	priceValue.textContent = "֏" + maxPrice;
	rangevalu = maxPrice;
	maxPricecheck = maxPrice;
	priceRange.addEventListener("input", e => {
		rangevalu = e.target.value;
		priceValue.textContent = "֏" + e.target.value;
		checkfilter();
	});

};

function checkfilter() {
	filteredData = data;
	if (rangevalu !== maxPricecheck) {
		filteredData = filteredData.filter(item => item.price <= rangevalu);
	}
	if (searchvalue !== "") {
		filteredData = filteredData.filter(item => item.name.toLowerCase().indexOf(searchvalue) !== -1);
	}
	if (choices[0] !== undefined && !(choices.includes("1"))) {
		filteredData = filteredData.filter(item => choices.includes(item.regeon));
	}
	displayProducts(filteredData);
}

function openwindow(id) {
	let productwindowinfo = data.filter(item => item.id === id);
	console.log(productwindowinfo);
	document.body.innerHTML += `
	<div class="windowbg">
		<div classs=window>
			<span class="window_name">${productwindowinfo[0].name}</span>
			<span class="window_regeon">${regeons[productwindowinfo[0].regeon]}</span>
			<div class="window_div_money"><img src="img/money.svg" alt="Գումարի նկար"class="money">֏${productwindowinfo[0].price}</div>
			<span class="window_info"><div class="prdklor"></div>${productwindowinfo[0].info["info1"]}</span>
			<span class="window_info"><div class="prdklor"></div>${productwindowinfo[0].info["info2"]}</span>
			<span class="window_info"><div class="prdklor"></div>${productwindowinfo[0].info["info3"]}</span>
			<span class="priceText" onclick="openwindow(${productwindowinfo[0].id})">Ավելին․․․</span>
		</div>
	</div>
`;
}

displayProducts(data);
setCategories();
setPrices();

const cat = document.querySelectorAll('.cat');

cat.forEach(regeon => {
	regeon.addEventListener('change', () => {
		regeon.checked ?
			choices.push(regeon.value) :
			choices.splice(choices.indexOf(regeon.value), 1);
		console.log(choices);
		checkfilter();
	});
});