(async () => {

    // get products 
    let response = await fetch("/products.json"),
        originalProducts = await response.json();
    
    // filter products by category
    let products = originalProducts.filter(el => {
        if(el.category == document.querySelector("body").dataset.category)
            return true;
        
        return false;
    });

    // display products
    const parentProdutos = document.querySelector(".articles");
    let id = -1;
    products.forEach(p => {
        id ++;
        let product = document.createElement("div");
        product.classList.add("col-12", "col-md-4", "article");
        product.innerHTML = `<a class="teste">
            <div class="image">
            <img src="/Pagina/img/calcoes/${p.tag}.jpg" alt="${p.tag}">
            <h3>${p.name}</h3>
            <h3>${p.price},00 €</h3>
            <a class="add-cart cart1" data-value= ${id}><i class="fa-solid fa-cart-plus"></i></a>
            <input type="hidden" value="${p.price}"/>
            </div>
        </a>`

        parentProdutos.append(product);
    });

    // add number to span for each click on cart
    const addCart = document.querySelectorAll(".add-cart");
    const HeaderCartNumber = document.querySelector("header .cart");
    let cartSpan = document.createElement("span");
    let numberItems = 0;

    // parte carrinho


    addCart.forEach(el =>{
        el.addEventListener('click', el =>{

            numberItems = numberItems + 1;
            cartSpan.innerHTML = `${numberItems}`;
            HeaderCartNumber.append(cartSpan);

            var size = Object.keys(products).length;
            let dataValue = event.currentTarget.getAttribute("data-value");
            products[dataValue].inCart = 1;

            let inCartProducts = products.filter(el => { 
                if(el.inCart >= 1){
                    return true;
                
                return false;
                }
            });

            window.localStorage.setItem("productsLs", JSON.stringify(inCartProducts));
            const productsCarrinhoLs = JSON.parse(window.localStorage.getItem("productsLs"));
            console.log(productsCarrinhoLs);
        });
    });

    const productsCarrinhoLs = JSON.parse(window.localStorage.getItem("productsLs"));
    const parentCarrinho = document.querySelector(".products");
    if(parentCarrinho) {
        productsCarrinhoLs.forEach(p => {
        let productsTwo = document.createElement("div");
            productsTwo.classList.add("product")
            productsTwo.innerHTML = `<i class="fa-solid fa-xmark"></i>
            <img src="/Pagina/img/calcoes/${p.tag}.jpg"/>
            <span class="sm-hide">${p.name}</span>
            <div class="price sm-hide">${p.price},00€</div>
            <div class="quantity">
            <button class="decrease"> - </button>
            <span>${p.inCart}</span>
            <button class="increase"> + </button>   
            </div>
            <div class="total">${p.inCart * p.price},00€</div>` // adicionar div com preço total

            parentCarrinho.append(productsTwo);

        });
    }
})
();