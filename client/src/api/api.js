export async function fetchData(url) {
  const res = await fetch(url)
  if (!res) {
    throw res
  }

  const data = await res.json()
  return data
}

export async function handleLike(url) {
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify('increment like')
  })
  
  if (!res) {
    throw res
  }

  const data = await res.json()
  return data
}

