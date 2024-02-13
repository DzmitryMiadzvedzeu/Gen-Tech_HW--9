db.users.aggregate([
    {$match : {country: {$nin: ["USA"]}}},
    {$sample : {size : 1}},
    {$project : {fullname : 1, _id : 0}}
])

