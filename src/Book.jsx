import { Link } from 'react-router-dom';

const Book = (props) => {
    const { authors, key, title, subtitle, thumbnail, previewLink, publisher, id } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (thumbnail) {
    hero = thumbnail;
  }
  return (
    <Link to={`/books/${id}`} className="shadow-lg bg-gray-200 rounded-lg relative block">
      <div className="image-container w-64 h-64 flex items-center justify-center bg-white">
        <img className="object-cover w-full h-full" src={thumbnail} alt={title} />
    </div>

      <div className="bottom-0 left-0 shadow-lg bg-gray-300 pr-2 pt-2 my-4">
        <h1>{title}</h1>
        <span>{subtitle}</span>
        <h2>{`${authors[0]} — ${publisher} — ${location}`}</h2>
        <a href={previewLink} target="_blank"> Preview Link</a>
      </div>
    </Link>
  );
};

export default Book;