import ProductCard from "./ProductCard";
import { useLoaderData } from 'react-router-dom';
// import { products } from "./products/products";

function Homepage() {
    const { data } = useLoaderData();

    return <main>
        <h1 className="visually-hidden">Homepage</h1>
        <section aria-labelledby="latest-arrival" className="scroll-box">
            <h2 id="latest-arrival">Latest Arrivals</h2>
            <div className="category scroll">
                {data.latestProducts.map(item => <ProductCard product={item} key={item.url} />)}
            </div>
        </section>

        <section aria-labelledby="best-selling" className="scroll-box">
            <h2 id="best-selling">Best-selling</h2>
            <div className="category scroll">
                {data.bestSellingProducts.map(item => <ProductCard product={item} key={item.url} />)}
            </div>
        </section>

        <section aria-labelledby="favorites" className="scroll-box">
            <h2 id="favorites">Our Favorite Games</h2>
            <div className="category scroll">
                {data.favoriteProducts.map(item => <ProductCard product={item} key={item.url} />)}
            </div>
        </section>
    </main>
}

export default Homepage;