import React from "react";
import PageHeading from "./PageHeading";
import List from "./List";
import Gallery from "./Gallery";
import Footer from "./Footer";
import movies from "../movies";

function createGallery(movie) {
  return (
    <Gallery
      key={movie.id}
      fName={movie.name}
      imghrf={movie.imghrf}
      alt={movie.name}
    />
  );
}

export default function App() {
  return (
    <div className="center">
      <PageHeading />
      <List />
      {movies.map(createGallery)}
      <Footer />
    </div>
  );
}
