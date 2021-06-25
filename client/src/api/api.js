async function fetchData(url) {
  const res = await fetch(url)
  if (!res) {
    throw res
  }

  const data = await res.json()
  return data
}

export default fetchData
