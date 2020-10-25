import Api from './Api'

const imageBaseUrl = 'https://image.tmdb.org/t/p'

export const fetchTop = async (): Promise<object[]> => {
  const res = await Api.get('/trending/movie/week')
  if (!res.status) return []
  return res.data.results
}

export const imageLink = (imagePath: string, width = 300) => {
  return `${imageBaseUrl}/w${width}${imagePath}`
}

export const search = async (query: string): Promise<object[]> => {
  const res = await Api.get(`/search/movie?query=${query}`)
  if (!res.status) return []
  return res.data.results.slice(0, 5)
}
