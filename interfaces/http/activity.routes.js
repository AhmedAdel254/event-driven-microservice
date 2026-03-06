import express from "express";
import {
  createActivityController,
  getLogsController
} from "./activity.controller.js";

const router = express.Router();

router.post("/activity", createActivityController);
router.get("/logs", getLogsController);

export default router;