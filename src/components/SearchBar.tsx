"use client"

import { useEffect, useState } from 'react'

const SearchBar: React.FC<{ getQuery: (q: string) => void }> = ({ getQuery }) => {
  const [search, setSearch] = useState('')
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getQuery(search)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  return (
    <form>
      <input className="w-full p-2.5 rounded-b-none mt-1 text-sm text-gray-700 bg-white border-gray-200 rounded-md shadow-sm" type="text" value={search} onChange={handleSearch} placeholder="Apple" />
    </form>
  )
}

export default SearchBar
