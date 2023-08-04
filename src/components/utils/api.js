async function fetchAPI(path) {
    if (path) {
        const response = await fetch(`${process.env.REACT_APP_API}${path}`);
        return await response.json();
    } else {
        const response = await fetch(`${process.env.REACT_APP_API}`);
        return await response.json();
    }
}

export async function loadProduct({ params }) {
    const product = await fetchAPI(params.productId);
    return { product };
}

export async function loadHomepageProducts() {
    const data = await fetchAPI();
    return { data };
}

export async function loadCategoryProducts(string) {
    const data = await fetchAPI(`category${string}`);
    return data;
}