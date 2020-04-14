const records = [
    { id: 1, username: 'antonoro', password: 'antonoro', displayName: 'Antonoro', emails: [ { value: 'antonoro@antonoro.com' } ] }
  , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];



exports.findById = function(id, cb) {
  process.nextTick(function() {
    const idx = id - 1;
    if (records[idx]) {
      cb(null, records[idx]);
    } else {
      cb(new Error('User ' + id + ' does not exist'));
    }
  });
}

//This can be done easily with Array.prototype.filter
exports.findByUsername = function(username, cb) {
  process.nextTick(function() {
      const filteredArray = records.filter(record => record.username === username);
      //Assuming that the username is unique, the record will be in [0] if exists, null if doesn't.
      return cb(null, filteredArray[0] || null);
  });
}
