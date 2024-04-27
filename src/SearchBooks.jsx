import React, { useState } from "react";
import BookResults from "./BookResults";

const SearchBooks = () => {
    const [userSearch, setUserSearch] = useState('');
    const [response, setResponse] = useState([]);

    async function requestBooks(searchQuery) {
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchQuery}`);
        const resJson = await res.json();
        setResponse(resJson.items);
    }

    function changeBookHandler(event) {
        setUserSearch(event.target.value);
    }

    function handleSearch(event) {
        event.preventDefault();
        requestBooks(userSearch);
    }

    return (
        <div className="my-0 mx-auto w-11/12">
            <form onSubmit={handleSearch} className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg flex flex-col justify-center items-center">
                <label htmlFor="books" className="search-input">
                    Search Book
                    <input id="books" name="books" className="" type="text" placeholder="search any book" value={userSearch} onChange={changeBookHandler} />
                </label>
                <button type="submit" className="rounded px-6 py-2 text-white hover:opacity-50 border-none bg-orange-500">Search</button>
            </form>

            {/* {
    response && Array.isArray(response) && response.length > 0 && response.map((item) => (
        // <li key={item.id}>{item.volumeInfo.title}
        //     {
        //         item?.volumeInfo?.imageLinks?.smallThumbnail && <img src={item.volumeInfo.imageLinks.smallThumbnail} alt={item.volumeInfo.subtitle} />
        //     }
            
        // </li>

        

    ))
} */}

<BookResults books={response}/>

        </div>
    );
}

export default SearchBooks;