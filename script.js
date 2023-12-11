const cardscontainer = document.querySelector('.cardscontainer');

let products = null;

async function getAllProducts() {
	await fetch('https://fakestoreapi.com/products')
		.then((res) => res.json())
		.then((data) => (products = data));

	createProductCard(products);
}
 
 
function createProductCards(productData) {
	//console.log(productData)

	productData.forEach(el => {
		console.log(el)
	})

}

function createProductCard() {
	
	
	
	const card = document.createElement('div');

	cardscontainer.appendChild(card);

	const title = document.createElement('h3');
	const image = document.createElement('img');
	const description = document.createElement('p');
	const cardbtn = document.createElement('div');
	const price = document.createElement('p');
	const addtocartbutton = document.createElement('button');

	card.appendChild(title);
	card.appendChild(image);
	card.appendChild(description);
	card.appendChild(cardbtn);

	cardbtn.appendChild(price);
	cardbtn.appendChild(addtocartbutton);
}

getAllProducts(products);
