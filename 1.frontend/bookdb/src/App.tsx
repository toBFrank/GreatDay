import { useState } from "react"
import Search from "./components/Search"

function App() {
  const [books, setBooks] = useState<any[]>([])

  return (
    <div className="App">
      <header>
        <h1>Book db</h1>
      </header>
      <main className="container">
        <Search 
          onResults={(results: any[]) => setBooks(results)}
        />
        <section className="results">
          {books.length > 0 ? (
            books.map((book, index) => (
              <div key={index} className="book">
                <h2>{book.title}</h2>
                <p>{book.author}</p>
              </div>
            ))
          ) : (
          <p></p>
          )}
        </section>
      </main>
    </div>
  )
}

export default App
