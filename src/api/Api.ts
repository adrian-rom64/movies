const baseUrl = 'https://api.themoviedb.org/3'
const apiKey = '7161f9f25ea1dd9ae7e2d3d81fec5a13'
const logs = true

const get = async (path: string) => {
  try {
    const url = `${baseUrl}${path}${path.includes('?') ? '&' : '?'}api_key=${apiKey}`
    const res = await fetch(url)
    if (res.status !== 200) {
      logs && console.error(res.status)
      return { status: false, data: {} }
    }
    const data = await res.json()
    return { status: true, data }
  } catch (err) {
    logs && console.error(err)
    return { status: false, data: {} }
  }
}

export default {
  baseUrl, apiKey, get
}
