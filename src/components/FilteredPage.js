import { useLocation, useLoaderData, useOutletContext } from 'react-router-dom';
import { useState } from 'react';
import { sortProducts } from './utils/api';
import ProductCard from "./ProductCard";
import Breadcrumbs from "./Breadcrumbs";

function FilteredPage({ title }) {
    const data = useLoaderData();
    const location = useLocation();
    const submittedInput = useOutletContext();
    const [sortedProducts, setSortedProducts] = useState([]);

    async function getSortedProducts(filter) {
        if (location.pathname !== "/search") {
            setSortedProducts(await sortProducts(`category${location.pathname}?sort=${filter}`))
        } else {
            setSortedProducts(await sortProducts(`search${location.search}&sort=${filter}`));
        }
    }

    return (
        <>
            {location.pathname !== "/search" && <Breadcrumbs />}
            <main>
                {data.length !== 0 ?
                    <>
                        <h1>{title ? title : `Search results for ${submittedInput}`}</h1>
                        <div className="sort-container">
                            <label htmlFor="sortOptions">Sort by:</label>
                            <select id="sortOptions" name="sortOptions" onChange={(e) => getSortedProducts(e.target.value)}>
                                <option value="latest">Latest Arrivals</option>
                                <option value="alphabeticalAZ">Alphabetical: A-Z</option>
                                <option value="alphabeticalZA">Alphabetical: Z-A</option>
                                <option value="priceLH">Price: Low to High</option>
                                <option value="priceHL">Price: High to Low</option>
                            </select>
                        </div>
                        <div className="category">
                            {sortedProducts.length === 0 ? data.map((item) => <ProductCard key={item.url} product={item} />) : sortedProducts.map((item) => <ProductCard key={item.url} product={item} />)}
                        </div>
                    </> : <h1>There are no results</h1>}
            </main>
        </>)
}

export default FilteredPage;