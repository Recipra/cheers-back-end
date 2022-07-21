import { BoozyTuneGame } from '../models/boozyTuneGame.js'
import { Song } from '../models/song.js'
import { Drink } from "../models/drink.js"


const randomSongAndDrink = async (req, res) => {
    try{
        const drinks = await Drink.find({})
        const songs = await Song.find({})
        console.log(songs, drinks)
        const randomDrink = drinks[Math.floor(Math.random() * drinks.length)]
        const randomSong = songs[Math.floor(Math.random() * songs.length)]

        res.status(201).json({randomDrink, randomSong})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

export{
    randomSongAndDrink,
}