import { useEffect } from "react";
import ProductCard from "./ProductCard";


function SearchResultsPage({ keyword, searchResults }) {

    useEffect(() => {
        const searchInput = document.querySelector("#search");
        searchInput.value = "";
    }, [])

    return (<main>
        {searchResults.length !== 0 ?
            <><h1>Search results for {keyword}</h1>
                <div className="category">
                    {searchResults.map((item) => <ProductCard key={item.id} product={item} />)}
                </div></> : <h1>There are no results</h1>}
    </main>)
}

export default SearchResultsPage;