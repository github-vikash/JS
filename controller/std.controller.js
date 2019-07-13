const Student = require('../model/model.js');

exports.create = (req,res)=>{
    
    if(!req.body.studentId) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Create a Note
    console.log(req.body.Department);
    const student = Student({
        Name:req.body.Name,
        Id:req.body.studentId,
        Department:req.body.Department
    });

    student.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Student data."
        });
    });
};

exports.findAll = (req,res)=>{
    Student.find()
    .then(std => {
        res.send(std);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Student."
        });
    });

};


exports.findOne = (req, res) => {
    Student.findById(req.params.studentId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.studentId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.studentId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.studentId
        });
    });
};

// Update a note identified by the studentId in the request
exports.update = (req, res) => {
    if(!req.body.studentId) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }

    // Find note and update it with the request body
    Student.findByIdAndUpdate(req.params.studentId, {
        Name: req.body.name,
        id: req.body.id,
        Department: req.body.department
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
};

// Delete a note with the specified studentId in the request
exports.delete = (req, res) => {
    Student.deleteOne(req.params.Id)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.studentId
            });
        }
        res.send({message: "Note deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.studentId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.studentId
        });
    });
};