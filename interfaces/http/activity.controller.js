import { response } from "express";
import { createActivity } from "../../application/activity.service.js";
import Activity from "../../infrastructure/database/activity.model.js";

export const createActivityController = async (req, res) => {

  const { userId, action } = req.body;


  const activity = await createActivity(userId, action);
  res.json({
    message: "Activity sent",
    data: activity
  });

};

export const getLogsController = async (req, res) => {

  const filter = {};
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  const logs = await Activity.find(filter)
  .skip((page - 1) * limit)
  .limit(limit);

  res.json(logs);

};