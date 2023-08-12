async function fetchAPI(path = "") {
    const response = await fetch(`https://shopping-cart-api-production-4bc5.up.railway.app/api/${path}`);
    checkStatus(response);
    return response.json();
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
    return await fetchAPI(params.productId);
}

export async function loadHomepageProducts() {
    return await fetchAPI();
}

export async function loadCategoryProducts({ request }) {
    const url = new URL(request.url);
    return fetchAPI(`category${url.pathname}`);
}

export async function sortProducts(filter) {
    return fetchAPI(filter);
}

export async function loadSearchResults({ request }) {
    const url = new URL(request.url);
    return fetchAPI(`search${url.search}`);
};