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
        <h2>Latest Arrivals</h2>
        <div className="scroll-box">
            <section className="category scroll">
                {products.filter(item => item.latestArrival === true).map(item => <ProductCard product={item} key={item.id} />)}
            </section>
        </div>

        <h2>Best-selling</h2>
        <div className="scroll-box">
            <section className="category scroll">
                {sortedGames.slice(0, 5).map(item => <ProductCard product={item} key={item.id} />)}
            </section>
        </div>

        <h2>Our Favorite Games</h2>
        <div className="scroll-box">
            <section className="category scroll">
                {products.filter(item => item.highlight === true).map(item => <ProductCard product={item} key={item.id} />)}
            </section>
        </div>
    </main>
}

export default Homepage;