async function fetchAPI(path = "") {
    const response = await fetch(`${process.env.REACT_APP_API}${path}`);
    checkStatus(response);
    return await response.json();
}

function checkStatus(response) {
    if (response.status === 404) {
        throw new Response("Not Found", { status: 404 });
    }
    if (!response.ok) {
        throw new Response("Server Problems", { status: 500 });
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

export async function loadCategoryProducts({ request }) {
    const url = new URL(request.url);
    const data = await fetchAPI(`category${url.pathname}`);
    return { data };
}

export async function sortProducts(filter) {
    const data = await fetchAPI(filter);
    return data;
}

export async function loadSearchResults({ request }) {
    const url = new URL(request.url);
    const data = await fetchAPI(`search${url.search}`);
    return { data };
}