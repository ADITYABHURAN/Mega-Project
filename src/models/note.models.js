import mongoose, {Schema} from "mongoose";

const projectNoteSchema = new Schema({
    project: {
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true
    },
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content: {
        type: String,
        required: true,
    }
}, {timestamps: true});
//timestamp true krne se mongoose apne aap createdAt and updatedAt fields bana deta hai automatically


export const Note = mongoose.model("Note", projectNoteSchema);
    