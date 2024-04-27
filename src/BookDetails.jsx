import { useParams } from "react-router-dom";

const BookDetails = () => {
    // Access the route parameters using useParams hook
    let { id } = useParams();

    return (
        <div>
            <p>Book Details</p>
            <p>Book ID: {id}</p>
        </div>
    );
}

export default BookDetails;