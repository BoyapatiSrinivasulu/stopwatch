function getCards() {
    fetch("https://fakestoreapi.com/products")
        .then((result) => result.json())
        .then((data) => {
            let str = `<div class="row gy-4">`;

            for (let k of data) {
                str += `
                    <div class="col-md-3 col-sm-12">
                        <div class="card h-100 shadow">
                            <img src="${k.image}" height="330px" class="card-img-top" alt="${k.title}"/>
                            <div class="card-body">
                                <p><b>Product Name :</b> ${k.title}</p>
                                <p><b>Price :</b> ₹${k.price}</p>
                            </div>
                            <div class="card-footer d-flex justify-content-between">
                                <button class="btn btn-danger" onclick="addToCart(${k.id})">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                `;
            }

            str += `</div>`;
            document.getElementById("mycards").innerHTML = str;
        });
}

// Example Cart Handler
function addToCart(id) {
    console.log("Added product with ID:", id);
}

getCards();
