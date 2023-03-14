"use client"
import { useState, useEffect } from 'react';
import SearchBar from "../components/SearchBar";
import Results from "../components/Results";

interface Entity {
  facet_ids: string[]
  identifier: {
    uuid: string
    permalink: string
    value: string
    image_id: string
    entity_def_id: string
  }
  short_description: string
}

export interface Data {
  entities: Entity[]
}

const Home = () => {
  const [results, setResults] = useState<Data | null>(null)
  const getQuery = async (q: string) => {
    const response = await fetch(`/api/data?query=${q}`)
    const data: Data = await response.json()
    setResults(data)
  }

  return (
    <main className='max-w-6xl min-h-screen p-3 mx-auto'>
      <h1 className="pt-20 pb-5 text-4xl font-extrabold tracking-tight scroll-m-20 lg:text-5xl">Startup browser</h1>
      <div>
        <SearchBar getQuery={getQuery} />
        {results &&
          <Results results={results} />
        }
        <div>
        </div>
      </div>
    </main>
  )
}

export default Home



