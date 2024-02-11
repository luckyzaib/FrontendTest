// Task 2

// Users's data is stored in MongoDB. Your task is to compose a query returning a list of users,
// satisfying the following conditions:
// each user's email must have a domain, e.g. @example.org;
// the last login attempt's latitude is in the (inclusive) range: [-90, 0];
// the last login attempt's longitude is in the (inclusive) range: [-180, 0];
// the number of unsuccessful login attempts is at least 1;
// the role is neither admin nor client;
// there are at least two active sessions and all of the active sessions last at least 8 hours.

db.users.find({
  mail: {
    $text: {
      $search: "@example.org",
    },
  },
  "lastLogin.coord.0": { $gte: -90, $lte: 0 },
  "lastLogin.coord.1": { $gte: -180, $lte: 0 },
  unsuccessfulAttempts: { $gte: 1 },
  role: { $nin: ["admin", "client"] },
  $where:
    "this.activeSessions && this.activeSessions.length >= 2 && this.activeSessions.every(session => session.duration >= 8)",
});
