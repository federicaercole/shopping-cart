import { useState } from "react";
import { products } from "./products/products";
import ProductCard from "./ProductCard";
import Breadcrumbs from "./Breadcrumbs";

function FilteredPage({ title, category }) {
    const [sortType, setSortType] = useState("featured");
    const filteredProducts = products.filter((item) => item.category === category);

    function sortGames() {
        const productsCopy = [...filteredProducts];

        switch (sortType) {
            case "featured": return productsCopy;
            case "alphabeticalAZ": return productsCopy.sort((a, b) => ascendingOrder(a.name, b.name));
            case "alphabeticalZA": return productsCopy.sort((a, b) => descendingOrder(a.name, b.name));
            case "priceLH": return productsCopy.sort((a, b) => ascendingOrder(a.price, b.price));
            case "priceHL": return productsCopy.sort((a, b) => descendingOrder(a.price, b.price));
            default: return;
        }
    }

    function ascendingOrder(a, b) {
        if (a < b) { return -1; }
        if (a > b) { return 1; }
        return 0;
    }

    function descendingOrder(a, b) {
        if (a < b) { return 1; }
        if (a > b) { return -1; }
        return 0;
    }

    const sortedGames = sortGames();

    return (
        <main>
            <h1>{title}</h1>
            <div className="breadcrumbs-container">
                <Breadcrumbs />
                <div className="sort-container">
                    <label htmlFor="sortOptions">Sort by:</label>
                    <select id="sortOptions" name="sortOptions" onChange={(e) => setSortType(e.target.value)}>
                        <option value="featured">Featured</option>
                        <option value="alphabeticalAZ">Alphabetical: A-Z</option>
                        <option value="alphabeticalZA">Alphabetical: Z-A</option>
                        <option value="priceLH">Price: Low to High</option>
                        <option value="priceHL">Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className="category">
                {sortedGames.map((item) => <ProductCard key={item.id} product={item} />)}
            </div>
        </main>)
}

export default FilteredPage;