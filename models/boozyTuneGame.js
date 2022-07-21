import mongoose from 'mongoose'

const boozyTuneGameSchema = new mongoose.Schema({
  song: {type: mongoose.Schema.Types.ObjectId, ref: 'Song'},
  drinkOptions: [{type: mongoose.Schema.Types.ObjectId, ref: 'Drink'}],
},{
  timestamps: true,
})

const BoozyTuneGame = mongoose.model('BoozyTuneGame', boozyTuneGameSchema)

export { BoozyTuneGame }