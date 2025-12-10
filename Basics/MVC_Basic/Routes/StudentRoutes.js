import express from "express";
import { getStudents,addStudents,deleteStudents, UpdateStudents } from "../Controllers/StudentsController.js";
const router=express.Router();
router.get('/get-students',getStudents);
router.post('/add-students',addStudents);
router.delete('/delete-students',deleteStudents);
router.put('/update-students',UpdateStudents);
export default router;