import { Schema } from 'mongoose'

export const JobSchema = new Schema(
  {
    jobTitle: {
      type: String, required: true
    },
    company: {
      type: String, required: true
    },
    rate: {
      type: Number, required: true
    },
    hours: {
      type: Number
    },
    description: {
      type: String
    },
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

JobSchema.virtual('creator', {
  localField: 'creatorId',
  foreignField: '_id',
  ref: 'Account',
  justOne: true
})
