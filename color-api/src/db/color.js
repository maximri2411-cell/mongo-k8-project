const mongoose = require("mongoose")


//------------------//
const colorSchema = new mongoose.Schema({
  key: String,
  value: String
})

//-------------------//
const Color = mongoose.model("Color", colorSchema)

//-------------------//
const saveColor = async (key, value) => {

  let color = await Color.findOne({ key })

  if (color) {
    color.set({ value })
  } else {
    color = new Color({ key, value })
  }

  await color.save()
}

//--------------------//
const getColor = async (key) => {

  const color = await Color.findOne({ key })

  if (color) {
    return color.value
  }

  return process.env.DEFAULT_COLOR || "blue"
}

//--------------------//
const getColors = async () => {
  return Color.find();
};

module.exports = {
  saveColor,
  getColor,
  getColors,
};