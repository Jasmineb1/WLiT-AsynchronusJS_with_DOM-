
        const DEMO_URL = "https://course-api.com/react-store-products";

        function fetchData(DEMO_URL, callback) {
            fetch(DEMO_URL)
                .then((response) => response.json())
                .then((data) => {
                    callback(data);
                })
                .catch((error) => {
                    console.log("Error occurred", error);
                });
        }

        function handleData(data) {
            const listElement = document.getElementById('list');
            console.log(data)

           data.forEach((product) => {
                const productElement = document.createElement('li');
                productElement.classList.add('product');

                // Create elements for the product details
                const productNameElement = document.createElement('p');
                productNameElement.innerText = `Product: ${product.name}`;

                const productPriceElement = document.createElement('p');
                productPriceElement.innerText = `Price: ${product.price}`;

                const productCategoryElement = document.createElement('p');
                productCategoryElement.innerText = `Category: ${product.category}`;

                const productCompanyElemet= document.createElement('p');
                productCompanyElemet.innerText= `company: ${product.company}`;

                const productIdElement= document.createElement('p');
                productIdElement.innerText=`id: ${product.id}`;

                const productImageElement= document.createElement('p');
                productImageElement.innerText=`Image: ${product.image}`;

                const productDescElement= document.createElement('p');
                productDescElement.innerText=`Description: ${product.description}`;

                const productShippingElement= document.createElement('p');
                productShippingElement.innerText=`Shipping: ${product.shipping}`;


                // Create a list for colors
                const colorsList = document.createElement('ul');
                product.colors.forEach((color) => {
                    const colorItem = document.createElement('li');
                    colorItem.innerText = color;
                    colorsList.appendChild(colorItem);
                });

                // Appending all elements to the product container
                productElement.appendChild(productNameElement);
                productElement.appendChild(productPriceElement);
                productElement.appendChild(productCategoryElement);
                productElement.appendChild(productCompanyElemet);
                productElement.appendChild(productIdElement);
                productElement.appendChild(productImageElement);
                productElement.appendChild(productDescElement);
                productElement.appendChild(productShippingElement);
                productElement.appendChild(colorsList);
                


                // Append the product container to the list
                listElement.appendChild(productElement);
            });
        }

fetchData(DEMO_URL, handleData);
    
