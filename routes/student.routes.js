



module.exports = (app)=>{
   
    const student = require('../controller/std.controller.js');

    // create student 
    app.post('/student',student.create);

   
    // Retrievestudent data

    app.get('/student',student.findAll);

    // Retrieve a single Note with noteId
    app.get('/student/:studentId', student.findOne);

    // Update a student with studentId
    app.put('/student/:studentId', student.update);

    // Delete a student with noteId
    app.delete('/student/:studentId', student.delete);

}