import mongoose from "mongoose";

const activitySchema = new mongoose.Schema({
  userId: String,
  action: String,
  timestamp: Date
});

activitySchema.index({ userId: 1 });
activitySchema.index({ action: 1 });
activitySchema.index({ timestamp: -1 });

export default mongoose.model("Activity", activitySchema);