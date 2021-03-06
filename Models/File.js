import mongoose from "mongoose";

// const downloadSchema = new mongoose.Schema(
//   {
//     ip: { type: String, required: false, select: false },
//   },
//   {
//     timestamps: true,
//   }
// );

const fileSchema = new mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    firebaseId: { type: String, required: true },
    fileName: { type: String, required: true },
    fileSize: { type: Number, required: true },
    fileType: { type: String, required: true },
    key: { type: String, required: true },
    downloads: { type: Number, default: 0 },
    privacy: { type: String, default: "public" },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model("File", fileSchema);
export default File;
