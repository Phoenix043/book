import React, { useState, useEffect } from 'react';
import Rating from 'react-rating-stars-component';
import { useTheme } from '../Theme/ThemeContext';


interface Book {
  id: string;
  title: string;
  subtitle: string;
  imageLinks: {
    smallThumbnail: string;
  };
  categories: string[];
  averageRating: number;
  ratingsCount: number;
  authors: string[];
}
interface BooksProps {
    searchTerm: string;
  }

  const Books: React.FC<BooksProps> = ({ searchTerm}) => {
    const [books, setBooks] = useState<Book[]>([]);
    const {nightMode}=useTheme()
  
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('https://reactnd-books-api.udacity.com/books', {
          headers: { 'Authorization': 'whatever-you-want' },
        });
        const data = await response.json();
        setBooks(data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, [searchTerm]);

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleBookClick = (id: string) => {
    alert(`Book with ID ${id} clicked`);
  };
  const mode = `text-${nightMode?"white":"black"}`;
  // const background=`bg-${nightMode?'black':'white'}`

  return (
    <>
    <div className={`bg-${nightMode?'black':"white"} w-full`}>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12">
          {filteredBooks.map(book => (
            <div
              key={book.id}
              className={`bg-${nightMode?'black':"white"} p-4 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer flex flex-col items-center border-4 border-yellow-300 border-y-red-600`}
              onClick={() => handleBookClick(book.id)}
            >
              <h2 className={`text-lg ${mode} font-bold mb-2`}>{book.title}</h2>
              <p className={`text-gray-600  ${mode} `}>{book.subtitle}</p>
              <img
                src={book.imageLinks.smallThumbnail}
                alt={book.title}
                className="w-36 h-48 object-cover mb-8 transition-transform transform hover:scale-110"
              />
              <p className={`${mode}`}>Categories: {book.categories|| "Others"}</p>
              <Rating
                count={5}
                value={book.averageRating}
                size={40}
                edit={true}
                activeColor="green"
              />
              <p className={`${mode}`} >Ratings Count: {book.ratingsCount}</p>
              <p className={`${mode}`}>Authors: {book.authors[0]}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
};

export default Books;
