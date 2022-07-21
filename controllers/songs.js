import { Song } from '../models/song.js'
// import { v2 as cloudinary } from 'cloudinary'
// import { Profile } from '../models/profile'
import axios from 'axios'
import 'dotenv/config.js'

const BASE_URL = 'https://www.theaudiodb.com/api/v1/json/'

function songSearch(req, res) {
  console.log(req.query)
  axios.get(`${BASE_URL}${process.env.API_KEY}/searchtrack.php?s=${req.query.artist}&t=${req.query.song}`)
  .then(songs => {
    res.json({songs: songs.data})
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
}

const index = async (req, res) => {
  
  try {
    const songs = await Song.find({})
    res.status(200).json(songs)
  } catch (err) {
    res.status(500).json(err)
  }
}

const create = async (req, res) => {
  try {
    const song = await Song.create(req.body)
    res.status(201).json(song)
  } catch (err) {
    res.status(500).json(err)
  }
}

export {
  songSearch,
  index,
  create
}