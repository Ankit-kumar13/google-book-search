import React  from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import SearchBooks from "./SearchBooks";
import BookDetails from "./BookDetails";

const queryClient = new QueryClient({
  defaultOptions : {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
});

const App = () => {
  const adoptedPet = useState(null);
  return (
    <div className="p-0 m-0" style={{
      background: "#82e88a"
    }}>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
          <header className="w-full mb-10 text-center p-7 bg-gradient-to-b from-rose-300 via-pink-200 to-blue-200">
            <Link className="text-6xl text-black hover:text-gray-600" to="/">Search Books</Link>
          </header>
            <Routes>
              <Route path="/books" element={<SearchBooks/>}/>
              <Route path="/books/:id" element={<BookDetails/>} />
            </Routes>
            </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);