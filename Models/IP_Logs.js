import mongoose from "mongoose";

const IP_LogsSchema = new mongoose.Schema(
  {
    // createdAt: { type: Date, expires: 60, default: Date.now },
    file: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "File" },
    ip: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

IP_LogsSchema.index({ createdAt: 1 }, { expireAfterSeconds: 60 });

const IP_Logs = mongoose.model("IP_Logs", IP_LogsSchema);
export default IP_Logs;
