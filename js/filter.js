const data = [
	{
		id: 1,
		name: "Վարունգ",
		img: "img/var.png",
		price: 74,
		cat: "Բանջարեղեն"
	},
	{
		id: 2,
		name: "Սունկ",
		img: "img/sun.jpg",
		price: 74,
		cat: "Բանջարեղեն"
	},
	{
		id: 3,
		name: "Ցորեն",
		img: "img/cor.png",
		price: 40,
		cat: "Հացահատիկ"
	},
	{
		id: 4,
		name: "Լոլիկ",
		img: "img/lol.png",
		price: 200,
		cat: "Բանջարեղեն"
	},
	{
		id: 5,
		name: "Բազուկ",
		img: "img/baz.png",
		price: 16,
		cat: "Բանջարեղեն"
	},
	{
		id: 6,
		name: "Լոբի",
		img: "img/lob.png",
		price: 74,
		cat: "Բանջարեղեն"
	},
	{
		id: 7,
		name: "Կաղամբ",
		img: "img/kax.png",
		price: 200,
		cat: "Բանջարեղեն"
	},
	{
		id: 8,
		name: "Գազար",
		img: "img/gaz.png",
		price: 16,
		cat: "Բանջարեղեն"
	},
	{
		id: 9,
		name: "Եգիպտացորեն",
		img: "img/eg.png",
		price: 74,
		cat: "Բանջարեղեն"
	}
];


const productsContainer = document.querySelector(".products");
const searchInput = document.querySelector(".search");
const categoriesContainer = document.querySelector(".cats");
const priceRange = document.querySelector(".priceRange");
const priceValue = document.querySelector(".priceValue");
let searchvalue = "";
let rangevalu;

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

displayProducts(data);

searchInput.addEventListener("keyup", e => {
	searchvalue = e.target.value.toLowerCase();
	checkfilter();
});

const setCategories = () => {
	const allCats = data.map(item => item.cat);
	const categories = [
		"Ամբողջը",
		...allCats.filter((item, i) => {
			return allCats.indexOf(item) === i;
		})
	];

	categoriesContainer.innerHTML = categories
		.map(
			cat =>
				`
				<br>
				<input type="checkbox" id="${cat}" value="${cat}" class="cat">
				<label for="${cat}" class="cat">${cat}</label><br>
			 `
		)
		.join(""); 
};

function checkfilter() {
	choices[0] === undefined || choices.some(Set.prototype.has, new Set(["Ամբողջը"])) ?
		displayProducts((data.filter(item => item.name.toLowerCase().indexOf(searchvalue) !== -1)).filter(item => item.price <= rangevalu)) :
		displayProducts(((data.filter(item => choices.includes(item.cat))).filter(item => item.name.toLowerCase().indexOf(searchvalue) !== -1)).filter(item => item.price <= rangevalu));
}

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

setCategories();
setPrices();

let choices = [];
const cat = document.querySelectorAll('.cat');

cat.forEach(category => {
	category.addEventListener('change', () => {
		console.log(rangevalu);
		category.checked ?
			choices.push(category.value)
			: choices.splice(choices.indexOf(category.value), 1);
		//console.log(choices)
		checkfilter();
	})
})