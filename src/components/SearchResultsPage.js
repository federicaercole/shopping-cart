import ProductCard from "./ProductCard";
import { useLoaderData, useOutletContext } from "react-router-dom";

function SearchResultsPage() {
    const { data } = useLoaderData();
    const submittedInput = useOutletContext();

    return (<main>
        {data.length !== 0 ?
            <><h1>Search results for {submittedInput}</h1>
                <div className="category">
                    {data.map((item) => <ProductCard key={item.url} product={item} />)}
                </div></> : <h1>There are no results</h1>}
    </main>)
}

export default SearchResultsPage;