import ProductCard from "./ProductCard";
import { products } from "./products/products";

function Page() {

    return <article>
        <h2>Latest Arrivals</h2>
        <div className="latest">
            <ProductCard image={products[0].images[0]} title={products[0].name} link={products[0].id} product={products[0]} />
            <ProductCard image={products[1].images[0]} title={products[1].name} link={products[1].id} product={products[1]} />
        </div>
        <h2>Most-selled board games</h2>
    </article>
}

export default Page;