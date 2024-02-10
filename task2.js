db.users.find({
    "mail": {  $text: {
        $search: '@example.org'} }, 
    "lastLogin.coord.0": { $gte: -90, $lte: 0 }, 
    "lastLogin.coord.1": { $gte: -180, $lte: 0 }, 
    "unsuccessfulAttempts": { $gte: 1 }, 
    "role": { $nin: ["admin", "client"] }, 
    $where: "this.activeSessions && this.activeSessions.length >= 2 && this.activeSessions.every(session => session.duration >= 8)"
  })