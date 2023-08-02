import { useLocation } from 'react-router-dom';
import ProductCard from "./ProductCard";
import Breadcrumbs from "./Breadcrumbs";

function FilteredPage({ title }) {
    const location = useLocation();

    async function loadCategoryProducts(string) {
        const response = await fetch(`http://localhost:5000/api/category/${string}`, { method: "get" });
        const data = await response.json();
        return data;
    }

    function getSorteredProducts(filter) {
        switch (filter) {
            // case "alphabeticalAZ": return productsCopy.sort((a, b) => ascendingOrder(a.name, b.name));
            // case "alphabeticalZA": return productsCopy.sort((a, b) => descendingOrder(a.name, b.name));
            // case "priceLH": return productsCopy.sort((a, b) => ascendingOrder(a.price, b.price));
            // case "priceHL": return productsCopy.sort((a, b) => descendingOrder(a.price, b.price));
            default: return loadCategoryProducts(`${location.pathname}?sort=latest`);
        }
    }

    const data = loadCategoryProducts(location.pathname);

    return (
        <>
            <Breadcrumbs />
            <main>
                <h1>{title}</h1>
                <div className="sort-container">
                    <label htmlFor="sortOptions">Sort by:</label>
                    <select id="sortOptions" name="sortOptions" onChange={(e) => getSorteredProducts(e.target.value)}>
                        <option value="latest">Latest Aarrivals</option>
                        <option value="alphabeticalAZ">Alphabetical: A-Z</option>
                        <option value="alphabeticalZA">Alphabetical: Z-A</option>
                        <option value="priceLH">Price: Low to High</option>
                        <option value="priceHL">Price: High to Low</option>
                    </select>
                </div>
                <div className="category">
                    {data.map((item) => <ProductCard key={item.url} product={item} />)}
                </div>
            </main>
        </>)
}

export default FilteredPage;