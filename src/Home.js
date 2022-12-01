import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="Stainless Steel Autoseal Water Bottle, Insulated Water Bottles Keep Hot and Cold, Wide Mouth Sports Water Bottle for Hiking, Cycling, Sports, All Colors"
                        price={22.99}
                        rating={5}
                        image="https://www.junglescout.com/wp-content/uploads/2021/01/product-photo-water-bottle-hero.png"
                    />
                    <Product
                        id="49538094"
                        title="Recycled, comfortable & lightweight running shoes, Blue Color"
                        price={49.99}
                        rating={4}
                        image="https://i.insider.com/5e8758de0b3c9b36230c6bfc?width=700"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Rudy's Shampoo 100% Natural, Fresh Scent"
                        price={19.99}
                        rating={3}
                        image="https://images.wondershare.com/pixcut/assets/blog/product-images-for-ecommerce-sitse-3.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Men's Essential three stripe shorts"
                        price={20.99}
                        rating={5}
                        image="https://assets.adidas.com/images/w_600,f_auto,q_auto/1c8017456cc948a78f8cad230080f107_9366/Primegreen_Essentials_Warm-Up_3-Stripes_Shorts_White_H48436_21_model.jpg"
                    />
                    <Product
                        id="3254354345"
                        title="Leather comfortable shoe, brown color"
                        price={58.99}
                        rating={4}
                        image="https://www.befunky.com/images/wp/wp-2017-09-Background-Remover-1.jpg?auto=avif,webp&format=jpg&width=944"
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Beats Studio3 Wireless Noise-Canceling Headphones, Apple W1 Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone, Black (Latest Model)"
                        price={199.95}
                        rating={4}
                        image="https://www.pcworld.com/wp-content/uploads/2022/06/BeatsStudio3-1.png?w=1024"
                    />
                </div>
            </div>
        </div >
    );
};

export default Home;