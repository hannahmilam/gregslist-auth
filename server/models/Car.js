import { Schema } from 'mongoose'

export const Car = new Schema(
  {
    model: { type: String, required: [true, 'What is the model?'] },
    make: { type: String, required: [true, 'Who makes it?'] },
    price: { type: Number, required: [true, 'What price?'], min: 0 },
    year: { type: Number, required: [true, 'Year?'] },
    imgUrl: { type: String, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMS7JvyXIjX4xQSGzcDK5TUr6NMPIvd_EQA&usqp=CAU' },
    description: { type: Number, required: [true, 'Please Describe...'] },
    // RELATIONSHIP
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
