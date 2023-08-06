import Header from "./Header";
import Footer from "./Footer";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


function ErrorPage() {
    const error = useRouteError();
    return (
        <>
            <Header />
            <main>
                {error.status === 404 && <><h1>Page Not Found</h1>
                    <p>Sorry, the page couldn't be found. <Link to="/">Return to the homepage</Link></p></>}
                {error.status !== 404 && <><h1>Something went wrong</h1>
                    <p>There are problems on the server. Please retry another time.</p></>}
            </main >
            <Footer />
        </>
    )
}

export default ErrorPage;