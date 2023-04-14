import ProductCard from "./ProductCard";
import { products } from "./products/products";

function Page() {

    function sortGames() {
        const productsCopy = [...products];
        return productsCopy.sort((a, b) => {
            return b.totalSold - a.totalSold
        })
    }

    const sortedGames = sortGames();

    return <main>
        <h2>Latest Arrivals</h2>
        <div className="category scroll">
            {products.filter(item => item.latestArrival === true).map(item => <ProductCard image={item.images[0]} title={item.name} product={item} price={item.price} link={item.id} key={item.id} />)}
        </div>
        <h2>Best-selling</h2>

        <div className="category scroll">
            {sortedGames.slice(0, 5).map(item => <ProductCard image={item.images[0]} title={item.name} product={item} price={item.price} link={item.id} key={item.id} />)}
        </div>
        <h2>Our Favorite Games</h2>
        <div className="category scroll">
            {products.filter(item => item.highlight === true).map(item => <ProductCard image={item.images[0]} title={item.name} product={item} price={item.price} link={item.id} key={item.id} />)}
        </div>
    </main>
}

export default Page;