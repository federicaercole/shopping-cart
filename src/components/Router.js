import App from '../App';
import Homepage from "./Homepage";
import ProductDetails from "./ProductDetails";
import Cart from "./Cart";
import FilteredPage from "./FilteredPage";
import ErrorPage from './ErrorPage';
import { createHashRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";
import { loadProduct, loadHomepageProducts, loadCategoryProducts, loadSearchResults } from './utils/api';

const Router = () => {
    const router = createHashRouter(
        createRoutesFromElements(
            <Route element={<App />} handle={{ crumb: () => "Home" }} errorElement={<ErrorPage />}>
                <Route path="/" index element={<Homepage />} loader={loadHomepageProducts} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<FilteredPage />} loader={loadSearchResults} />

                <Route path="/board-games" handle={{ crumb: () => "Board Games" }}>
                    <Route index element={<FilteredPage key="board-games" title="All Board Games" />} loader={loadCategoryProducts} />
                    <Route path=":productId" element={<ProductDetails />} loader={loadProduct} handle={{ crumb: (product) => product.name }} />
                </Route>

                <Route path="/card-games" handle={{ crumb: () => "Card Games" }}>
                    <Route index element={<FilteredPage key="card-games" title="All Card Games" />} loader={loadCategoryProducts} />
                    <Route path=":productId" element={<ProductDetails />} loader={loadProduct} handle={{ crumb: (product) => product.name }} />
                </Route>

                <Route path="/rpgs" handle={{ crumb: () => "RPGs" }}>
                    <Route index element={<FilteredPage key="rpgs" title="All RolePlaying Games" />} loader={loadCategoryProducts} />
                    <Route path=":productId" element={<ProductDetails />} loader={loadProduct} handle={{ crumb: (product) => product.name }} />
                </Route>
                <Route path="*" element={<ErrorPage />} loader={loadCategoryProducts} />
            </Route >
        ));

    return <RouterProvider router={router} />;
}

export default Router;