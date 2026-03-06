class Activity {
  constructor(userId, action, timestamp = new Date()) {
    this.userId = userId;
    this.action = action;
    this.timestamp = timestamp;
  }
}

export default Activity;