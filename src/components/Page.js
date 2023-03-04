import ProductCard from "./ProductCard";
import { products } from "./products/products";

function Page() {

    return <main>
        <h2>Latest Arrivals</h2>
        <div className="category">
            {products.filter(item => item.latestArrival === true).map(item => <ProductCard image={item.images[0]} title={item.name} product={item} link={item.id} key={item.id} />)}
        </div>
        <h2>Most-selled board games</h2>
        <h2>Our Favorite Games</h2>
        <div className="category">
            {products.filter(item => item.highlight === true).map(item => <ProductCard image={item.images[0]} title={item.name} product={item} link={item.id} key={item.id} />)}
        </div>
    </main>
}

export default Page;