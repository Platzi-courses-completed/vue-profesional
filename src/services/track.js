import MusicService from './music'
import configService from './config'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'

  return MusicService.get(`${configService.apiUrl}/search?q=${q}&type=${type}`).then(res => res.data)
}

trackService.getById = function (id) {
  return MusicService.get(`${configService.apiUrl}/tracks/${id}`).then(res => res.data)
}

export default trackService
