import { kafka } from "./kafka.js";

const producer = kafka.producer();

export const sendActivityEvent = async (activity) => {

  await producer.connect();

  await producer.send({
    topic: "user-activity",
    messages: [
      {
        value: JSON.stringify(activity)
      }
    ]
  });

};