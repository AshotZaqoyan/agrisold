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
	const value = e.target.value.toLowerCase();

	if (value) {
		displayProducts(
			data.filter(item => item.name.toLowerCase().indexOf(value) !== -1)
		);
	} else {
		displayProducts(data);
	}
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
				  <span class="cat"><div class="o"></div>${cat}</span>
			 `
		)
		.join("");

	categoriesContainer.addEventListener("click", e => {
		const selectedCat = e.target.textContent;

		selectedCat === "Ամբողջը" ?
			displayProducts(data) :
			displayProducts(data.filter(item => item.cat === selectedCat));
	});
};

const setPrices = () => {
	const priceList = data.map(item => item.price);
	const minPrice = Math.min(...priceList);
	const maxPrice = Math.max(...priceList);

	priceRange.min = minPrice;
	priceRange.max = maxPrice;
	priceRange.value = maxPrice;
	priceValue.textContent = "֏" + maxPrice;

	priceRange.addEventListener("input", e => {
		priceValue.textContent = "֏" + e.target.value;
		displayProducts(data.filter(item => item.price <= e.target.value));
	});
};

setCategories();
setPrices();