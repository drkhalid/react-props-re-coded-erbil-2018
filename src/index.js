const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
 
ReactDOM.render(
  <MovieCard 
    title="Mad Max: Fury Road"
    poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
    genres={madMaxGenres}
  />,
  document.getElementById('root')
);