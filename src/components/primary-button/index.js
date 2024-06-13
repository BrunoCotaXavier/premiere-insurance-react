import { Link } from "react-router-dom";


export const PrimaryButton = ({ url }) => {
    return (
        <Link to={url} className="btn-primary lusitana-regular text-center">REQUEST QUOTE</Link>
    );
} 