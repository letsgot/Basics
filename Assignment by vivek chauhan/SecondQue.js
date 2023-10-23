WorksnapsTimeEntry.find().populate({
    "path": "student",
    "match": { "status": "student" }
}).exec(function(err,entries) {
   // Now client side filter un-matched results
   entries = entries.filter(function(entry) {
       return entry.student != null;
   });
   // Anything not populated by the query condition is now removed
});