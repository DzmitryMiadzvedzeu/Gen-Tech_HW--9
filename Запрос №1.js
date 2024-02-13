db.tracks.aggregate([
   {$sort : {duration_secs : -1}}, 
   {$limit : 3},
   {$project : {title : 1, _id : 0}}
])