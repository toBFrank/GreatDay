
const API_URL = 'https://openlibrary.org';

export default async function fetchWorks(query: string) {
  const response = await fetch(`${API_URL}/search.json?q=${query}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.docs.map((doc: any) => ({
        title: doc.title,
        author: doc.author_name ? doc.author_name.join(', ') : 'Unknown',
        works_key: doc.key
    }));
}

// export default async function fetchBookCovers(worksKey: string) {

// }