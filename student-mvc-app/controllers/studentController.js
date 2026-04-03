const Student = require('../models/Student');

exports.getStudents = async (req,res)=>{
  const students = await Student.find();
  res.render('index',{students});
};

exports.addForm = (req,res)=> res.render('add');

exports.createStudent = async (req,res)=>{
  await Student.create(req.body);
  res.redirect('/');
};

exports.editForm = async (req,res)=>{
  const student = await Student.findById(req.params.id);
  res.render('edit',{student});
};

exports.updateStudent = async (req,res)=>{
  await Student.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/');
};

exports.deleteStudent = async (req,res)=>{
  await Student.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
