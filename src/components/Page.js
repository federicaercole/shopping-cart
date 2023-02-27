import ProductInHome from "./ProductInHome";
import { products } from "./products/products";

function Page() {

    return <article>
        <h2>Latest Arrivals</h2>
        <ProductInHome image={products[0].images[0]} title={products[0].name} />
        <h2>Most-selled board games</h2>
    </article>
}

export default Page;