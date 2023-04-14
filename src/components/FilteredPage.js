import ProductCard from "./ProductCard";

function filteredPage({ products, title }) {

    return (
        <main>
            <h1>{title}</h1>
            <div className="category">
                {products.map((item) => <ProductCard key={item.id} image={item.images[0]} title={item.name} price={item.price} product={item} link={item.id} />)}
            </div>
        </main>)

}

export default filteredPage;