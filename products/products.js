const trendingProductsDB = [
    {
        title: "Leather Brown Strap Smartwatch",
        colorName: ''
    },
    {
        title: "ALIENWARE M15 R3 GAMING LAPTOP",
        colorName: "dark-grey"
    },
    {
        title: "Core Innovations 2-in-1 Touchscreen Laptop",
        colorName: 'blue'
    },
    {
        title: "Core Innovations 2-in-1 Touchscreen Laptop",
        colorName: 'pink'
    }
];

const watchesDB = [
    {
        title: "Leather Brown Strap Smartwatch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/leather_brown_strap-smartwatch",
        imageName: '1.png',
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#e6e6e6",
        status: "new"
    },
    {
        title: "Rubber Black Strap Smartwatch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/rubber_black_strap-smartwatch",
        imageName: "1.png",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#e61d1d",
        status: ""
    },
    {
        title: "Rose Gold DBLSK Watch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/rose_gold-dblsk",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Rubber Green-Black Strap Smartwatch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/rubber_green-black_strap-smartwatch",
        imageName: "1.png",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#921de6",
        status: ""
    },
    {
        title: "Gold Rubber Black Strap Smartwatch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/gold_rubber_black_strap-smartwatch",
        imageName: "1.png",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#e61d1d",
        status: ""
    },
    {
        title: "Slim Smartwatch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/slim_smartwatch",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: "sale"
    },
    {
        title: "Leather Strap Smartwatch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/leather_white_strap-smartwatch",
        imageName: "1.png",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#de19ae",
        status: ""
    },
    {
        title: "Fitness Tracker Watch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/fitness_tracker",
        imageName: "1.png",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#77ef8f",
        status: "new"
    },
    {
        title: "Throne T25 Watch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/throne t25",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: "sale"
    },
    {
        title: "Carpenter Watch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/carpenter",
        imageName: "1.png",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#6e6e6e",
        status: "new"
    },
    {
        title: "Total Black DBLSK Watch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/total_black-dblsk",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Apple Smart Watch",
        price: 98.00,
        discountedPrice: 65.00,
        colorName: '',
        imageLocation: "img/products/watches/leather_brown-black-apple_watch",
        imageName: "1.jpg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    }
];
let laptopsDB = [
    {
        title: "ALIENWARE M15 R3 GAMING LAPTOP",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: "dark-grey",
        imageLocation: "img/products/laptops/ALIENWARE M15 R3 GAMING LAPTOP",
        imageName: "1.webp",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Core Innovations 2-in-1 Touchscreen Laptop",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: 'black',
        imageLocation: "img/products/laptops/Core Innovations 2-in-1 Touchscreen Laptop",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Core Innovations 2-in-1 Touchscreen Laptop",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: 'blue',
        imageLocation: "img/products/laptops/Core Innovations 2-in-1 Touchscreen Laptop",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Core Innovations 2-in-1 Touchscreen Laptop",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: 'pink',
        imageLocation: "img/products/laptops/Core Innovations 2-in-1 Touchscreen Laptop",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Galaxy Book Flex",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: '',
        imageLocation: "img/products/laptops/Galaxy Book Flex",
        imageName: "1.webp",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Lenovo ChromeBookx",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: '',
        imageLocation: "img/products/laptops/Lenovo ChromeBook",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Dell G7 15 Gaming Laptop",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: '',
        imageLocation: "img/products/laptops/Dell G7 15 Gaming Laptop",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Acer Flagship chromebook",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: '',
        imageLocation: "img/products/laptops/Acer Flagship chromebook",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Acer Spin 3 Thin and Light Convertible",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: '',
        imageLocation: "img/products/laptops/Acer Spin 3 Thin and Light Convertible",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "ASUS VivoBook Flip",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: '',
        imageLocation: "img/products/laptops/ASUS VivoBook Flip",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Lenovo Chromebook Duet",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: '',
        imageLocation: "img/products/laptops/Lenovo Chromebook Duet",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "Lenovo IdeaPad",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: '',
        imageLocation: "img/products/laptops/Lenovo IdeaPad",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "New XPS 13 Laptop",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: 'lightgrey-darkgrey',
        imageLocation: "img/products/laptops/New XPS 13 Laptop",
        imageName: "1.webp",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "New XPS 13 Laptop",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: 'lightgrey-white',
        imageLocation: "img/products/laptops/New XPS 13 Laptop",
        imageName: "1.webp",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    },
    {
        title: "SAMSUNG Chromebook",
        price: 999.00,
        discountedPrice: 499.00,
        colorName: '',
        imageLocation: "img/products/laptops/SAMSUNG Chromebook",
        imageName: "1.jpeg",
        image: function () {
            return imagePath(this)
        },
        backgroundColor: "#fff",
        status: ""
    }
];

let categoriesDB = {
    watches: watchesDB,
    laptops: laptopsDB
};





;(function ($, window, document, undefined) {
    'use strict';
    
    for (let trendingProduct of trendingProductsDB) {
        let productTitle = trendingProduct.title;
        let productColorName = trendingProduct.colorName;
        for (let categoryName in categoriesDB) {
            for (let product of categoriesDB[categoryName]) {
                if (product.title === productTitle && product.colorName == productColorName) {
                    $('.product-grid').append(
                        `<div class="product-card">
                            <div class="img-wrapp" style="background-color: ${product.backgroundColor};">
                                <img src="${product.image()}" alt="${product.title}">
                                <div class="content">
                                    <div>
                                        <a href="product/pink-sweater.html" class="add-to-cart">add to cart</a>
                                    </div>
                                    <a href="product/pink-sweater.html" class="link">buy</a>
                                </div>
                            </div>
                            ${ product.status ? '<span class="'+product.status+'">'+product.status+'</span>' : ''}
                            <div class="product-info">
                                <p class="title">${product.title}</p>
                                <div class="price">
                                    <p class="discounted now current">£${product.discountedPrice}</p>
                                    <p class="main before previous">£${product.price}</p>
                                </div>
                            </div>
                        </div>`
                    )
                }
            }
        }
    };
    stackGridOpacity()



    $('#topmenu .menu .menu-item a.link').click(function () {
        let pageUrl = $(this).attr('href');
        if (pageUrl.length != 0) {
            let hashIndex = pageUrl.search('#');
            if (hashIndex > -1) {
                let categoryName = pageUrl.slice(hashIndex + 1);
                if (categoryName) {
                    $('.product-grid .product-card').remove();
                    for (let product of categoriesDB[categoryName]) {
                        $('.product-grid').append(
                            `<div class="product-card">
                                <div class="img-wrapp" style="background-color: ${product.backgroundColor};">
                                    <img src="${product.image()}" alt="${product.title}">
                                    <div class="content">
                                        <div>
                                            <a href="product/pink-sweater.html" class="add-to-cart">add to cart</a>
                                        </div>
                                        <a href="product/pink-sweater.html" class="link">buy</a>
                                    </div>
                                </div>
                                ${ product.status ? '<span class="'+product.status+'">'+product.status+'</span>' : ''}
                                <div class="product-info">
                                    <p class="title">${product.title}</p>
                                    <div class="price">
                                        <p class="discounted now current">£${product.discountedPrice}</p>
                                        <p class="main before previous">£${product.price}</p>
                                    </div>
                                </div>
                            </div>`
                        );
                    };
                    stackGridOpacity()
                }
            }
        }
    });





    function stackGridOpacity () {
        $('.product-card').each(function (i, e) {
            $(this).css({
                'z-index': $('.product-card').length - i,
            })
        })
    }
})(jQuery, window, document);



    

function imagePath(product) {
    let path;
    if (product.colorName) {
        path = `${product.imageLocation}/${product.colorName}/${product.imageName}`;
    } else {
        path = `${product.imageLocation}/${product.imageName}`
    };
    return path
}