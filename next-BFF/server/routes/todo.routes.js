import express  from "express";
import  todoController  from "../controller/todo.controller.js";
// import todoController from "../controller/todo.controller";
const { addTask} = todoController;
const router = express.Router()


 router.post('/',todoController.newTask);
//  router.post('/issue',requireSignIn ,requestBookIssue);
//  router.put('/issue',requireSignIn ,updateBookIssue);
 router.get('/',todoController.fetchAllTasks);
//  router.get('/search',requireSignIn,isAdmin  ,searchBooks);
//  router.delete('/:_id',requireSignIn,isAdmin, removeBook);
//  router.put('/:_id',requireSignIn,isAdmin, updateBookDetails);
 export default router;
