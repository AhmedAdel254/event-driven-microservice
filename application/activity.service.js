import Activity from "../domain/activity.entity.js";
import { sendActivityEvent } from "../infrastructure/kafka/producer.js";

export const createActivity = async (userId, action) => {

  const activity = new Activity(userId, action);

  await sendActivityEvent(activity);

  return activity;

};