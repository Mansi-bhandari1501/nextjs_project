import mongoose from "mongoose";
const todoSchema = new mongoose.Schema({

  task: {
    type: String,
    required:true,
  },
  status: {
    type: String,
    enum: ["fulfilled", "pending"],
    default: "pending"
  },

});

const todoModel = mongoose.model('Todo', todoSchema);
export default todoModel;