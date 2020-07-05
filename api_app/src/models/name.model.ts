import mongoose from "mongoose"

export type NameDocument = mongoose.Document & {
    name: string
}

const nameSchema = new mongoose.Schema({
    name: String
}, { timestamps: true })

export const Name = mongoose.model<NameDocument>("Name", nameSchema)
