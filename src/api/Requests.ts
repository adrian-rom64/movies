import Api from './Api'

export const fetchTop = async (): Promise<object[]> => {
  const res = await Api.get('/trending/movie/week')
  if (!res.status) return []
  return res.data.results
}
