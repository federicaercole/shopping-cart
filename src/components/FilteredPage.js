import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadCategoryProducts } from './utils/api';
import ProductCard from "./ProductCard";
import Breadcrumbs from "./Breadcrumbs";

function FilteredPage({ title }) {
    const location = useLocation();
    const [data, setData] = useState([]);

    useEffect(() => {
        let ignore = false;

        async function fetchData() {
            const data = await loadCategoryProducts(`${location.pathname}`);
            if (!ignore) {
                setData(data);
            }
        }
        fetchData();

        return () => {
            ignore = true;
        };
    }, [location])

    async function getSortedProducts(filter) {
        const data = await loadCategoryProducts(`${location.pathname}?sort=${filter}`);
        setData(data);
    }

    return (
        <>
            <Breadcrumbs />
            <main>
                <h1>{title}</h1>
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
                    {data.map((item) => <ProductCard key={item.url} product={item} />)}
                </div>
            </main>
        </>)
}

export default FilteredPage;