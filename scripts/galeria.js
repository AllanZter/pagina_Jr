const produtos = [
    {id: 0, name: "img1",  image: "img/imagem1.jpg"},
    {id: 1, name: "img2",  image: "img/img2.jpg"},
    {id: 2, name: "img3",image: "img/img3.jpg"},
    {id: 3, name: "img4",image: "img/img7.jpg"},
    {id: 4, name: "img5",image: "img/img5.jpg"},
    {id: 5, name: "img7",image: "img/img6.jpg"},
    {id: 6, name: "img7",image: "img/img8.jpg"},
    {id: 7, name: "img7",image: "img/img9.jpg"},
    {id: 8, name: "img7",image: "img/img10.jpg"},
    {id: 9, name: "img7",image: "img/img1.jpg"},
    {id: 10, name: "img7",image: "img/img2.jpg"},
    {id: 5, name: "img7",image: "img/img3.jpg"},

    
    
    // Adicione mais produtos aqui
];

// Loop para exibir cada produto do array na página
const produtosContainer = document.querySelector("#produtos .product-list");
produtos.forEach(product => {
    const productItem = document.createElement("div");
    
    productItem.classList.add("product-item");
 
    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;

  

    productItem.appendChild(productImage);
   
    produtosContainer.appendChild(productItem);
});