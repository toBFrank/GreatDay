import { useState } from "react"
import fetchWorks from "../services/bookApi"

interface SearchProps {
    onResults: (results: any[]) => void
}

function Search({ onResults }: SearchProps) {
    const [query, setQuery] = useState<string>("")

    const handleSearch = async () => {
        try {
            const works = await fetchWorks(query)
            onResults(works)
        } catch (err) {
            onResults([])
        }
    }

    return (
        <section className="searchbox-container">
            <input 
                type="text" 
                placeholder="Search for a title or author..." 
                className="searchbox" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
        </section>
    )
}

export default Search