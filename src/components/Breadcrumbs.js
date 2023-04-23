
import { useMatches, Link } from "react-router-dom";
import { separatorIcon } from "./icons";

export function Breadcrumbs() {
    let matches = useMatches();
    let crumbs = matches
        .filter((match) => Boolean(match.handle?.crumb))
        .map((match) => match.handle.crumb(match.data));

    const breadcrumbs = crumbs.map((crumb, index) => {
        const notLast = index < crumbs.length - 1;
        if (notLast) {
            return <li key={index}><Link to={matches[index].pathname}>{crumb}</Link> {separatorIcon}</li>;
        } else {
            return <li key={index}><Link to={matches[index].pathname} aria-current="page">{crumb}</Link></li>;
        }
    });

    return <nav aria-label="Breadcrumb" className="breadcrumb"><ol>{breadcrumbs}</ol></nav>;
}

export default Breadcrumbs;