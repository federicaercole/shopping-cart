import ProductCard from "./ProductCard";

function filteredPage({ products }) {

    return (
        products.map((item) => <ProductCard key={item.id} image={item.images[0]} title={item.name} product={item} link={item.id} />)
    )

}

export default filteredPage;