import { kafka } from "./kafka.js";
import ActivityModel from "../database/activity.model.js";

const consumer = kafka.consumer({ groupId: "activity-group" });

const runConsumer = async () => {

  await consumer.connect();

  await consumer.subscribe({
    topic: "user-activity"
  });

  await consumer.run({

    eachMessage: async ({ message }) => {

      const activity = JSON.parse(message.value);

      await ActivityModel.create(activity);

      console.log("Activity saved to DB");

    }

  });

};

runConsumer();