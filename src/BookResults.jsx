import Book from "./Book"

const BookResults = ({books}) => {
    return (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {
            !books.length ? (<h1>No books Found</h1>) : (books.map(book => (
            
            <Book 
                authors={book.volumeInfo.authors}
                id={book.id}
                key={book.id}
                title={book.volumeInfo.title}
                subtitle={book.volumeInfo.subtitle}
                thumbnail={book?.volumeInfo?.imageLinks?.smallThumbnail && book.volumeInfo.imageLinks.smallThumbnail}
                previewLink={book.volumeInfo.previewLink}
                publisher={book.volumeInfo.publisher}
            />
            )))
        }
    </div>
    )
}

export default BookResults;