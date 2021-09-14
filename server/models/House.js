import { Schema } from 'mongoose'

export const HouseSchema = new Schema(
  {
    bedrooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    levels: { type: Number, required: true },
    year: { type: Number, required: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    img: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfLxVf5oZFHTmNKNZfuDtVktEQWmJjNzRXQA&usqp=CAU' },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

HouseSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
