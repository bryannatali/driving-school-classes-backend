const Class = require('../models/Class');

module.exports = {
    async index(req, res) {
        //find({ airedAt: { $gte: '1987-10-19', $lte: '1987-10-26' } }).

        const classes = await Class.find({ done: false });
        /*await Class.aggregate([{
            $match: {
                done: false
            }
        },
        {
            $group: {
                _id: '$date',
                classes: {
                    $push: {
                        instructor: '$instructor', 
                        vehicle: '$vehicle',
                        date: '$date', 
                        type: '$type', 
                        done: '$done',
                    }
                }
            }
        },
        {
            $project: {
                date: '$_id',
                classes: 1,
                _id: 0,
            }
        }
        ], (err, classes) => {
            if(err)
                next(err)
            else
                res.json(classes)
        })*/
        
        return res.json(classes);
    }, 

    async store(req, res) {
        const { instructor, vehicle, type, date, done } = req.body;

        const _class = await Class.create({
            instructor,
            vehicle,
            type,
            date,
            done
        });

        return res.json(_class);
    },
};