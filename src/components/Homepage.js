import ProductCard from "./ProductCard";
import { products } from "./products/products";

function Homepage() {

    function sortGames() {
        const productsCopy = [...products];
        return productsCopy.sort((a, b) => {
            return b.totalSold - a.totalSold
        })
    }

    const sortedGames = sortGames();

    return <main>
        <h1 className="visually-hidden">Homepage</h1>
        <section aria-labelledby="latest-arrival" className="scroll-box">
            <h2 id="latest-arrival">Latest Arrivals</h2>
            <div className="category scroll">
                {products.filter(item => item.latestArrival === true).map(item => <ProductCard product={item} key={item.id} />)}
            </div>
        </section>

        <section aria-labelledby="best-selling" className="scroll-box">
            <h2 id="best-selling">Best-selling</h2>
            <div className="category scroll">
                {sortedGames.slice(0, 5).map(item => <ProductCard product={item} key={item.id} />)}
            </div>
        </section>

        <section aria-labelledby="favorites" className="scroll-box">
            <h2 id="favorites">Our Favorite Games</h2>
            <div className="category scroll">
                {products.filter(item => item.highlight === true).map(item => <ProductCard product={item} key={item.id} />)}
            </div>
        </section>
    </main>
}

export default Homepage;