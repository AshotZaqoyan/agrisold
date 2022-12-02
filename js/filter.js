const data = [
	{
		id: 1,
		name: "Վարունգ",
		img: "img/var.png",
		price: 74,
		cat: "2"
	},
	{
		id: 2,
		name: "Սունկ",
		img: "img/sun.jpg",
		price: 74,
		cat: "2"
	},
	{
		id: 3,
		name: "Ցորեն",
		img: "img/cor.png",
		price: 40,
		cat: "3"
	},
	{
		id: 4,
		name: "Լոլիկ",
		img: "img/lol.png",
		price: 200,
		cat: "2"
	},
	{
		id: 5,
		name: "Բազուկ",
		img: "img/baz.png",
		price: 16,
		cat: "2"
	},
	{
		id: 6,
		name: "Լոբի",
		img: "img/lob.png",
		price: 74,
		cat: "2"
	},
	{
		id: 7,
		name: "Կաղամբ",
		img: "img/kax.png",
		price: 200,
		cat: "2"
	},
	{
		id: 8,
		name: "Գազար",
		img: "img/gaz.png",
		price: 16,
		cat: "2"
	},
	{
		id: 9,
		name: "Եգիպտացորեն",
		img: "img/eg.png",
		price: 74,
		cat: "2"
	}
];

const categories = {
	'1': 'Ամբողջը',
	'2': 'Բանջարեղեն',
	'3': 'Հացահատիկ'
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

const displayProducts = filteredProducts => {
	productsContainer.innerHTML = filteredProducts
		.map(
			product =>
				`
					<div class="product">
							 <img
							 src=${product.img}
							 alt=""
							 />
							 <span class="name">${product.name}</span>
							 <span class="priceText">֏${product.price}</span>
						</div>
			 `
		)
		.join("");
};

const setCategories = () => {
	categoriesContainer.innerHTML = Object.keys(categories)
		.map(
			cat =>
				`
				<br>
				<input type="checkbox" id="${categories[cat]}" value="${cat}" class="cat">
				<label for="${categories[cat]}" class="cat">${categories[cat]}</label><br>
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
	priceRange.addEventListener("input", e => {
		rangevalu = e.target.value;
		priceValue.textContent = "֏" + e.target.value;
		checkfilter();
	});

};

function checkfilter() {
	filteredData = (data.filter(item => item.name.toLowerCase().indexOf(searchvalue) !== -1)).filter(item => item.price <= rangevalu);
	if (choices[0] !== undefined && !(choices.includes("1"))) {
		filteredData = filteredData.filter(item => choices.includes(item.cat));
	}
	displayProducts(filteredData);
}

displayProducts(data);
setCategories();
setPrices();

const cat = document.querySelectorAll('.cat');

cat.forEach(category => {
	category.addEventListener('change', () => {
		category.checked ?
			choices.push(category.value) :
			choices.splice(choices.indexOf(category.value), 1);
		console.log(choices);
		checkfilter();
	});
});