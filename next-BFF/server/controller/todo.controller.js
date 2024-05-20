import errorHandler from "../lib/utils.js";
import todoService from "../service/todo.service.js";



export const newTask = async (req, res) => {
    try {
      const response = await todoService.addTask(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };

export const fetchAllTasks = async (req, res) => {
    try {
      const response = await todoService.fetchAllTasks(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
// export const findBook = async (req, res) => {
//     try {
//       const response = await booksService.addBook(req);
//       return res.status(201).json({
//         success: true,
//         response
//       });
//     } catch (error) {
//       errorHandler(res, error);
//     }
//   };
export const removeTask = async (req, res) => {
    try {
      const response = await todoService.deleteBook(req);
      return res.status(201).json({
        success: true,
        response
      });
    } catch (error) {
      errorHandler(res, error);
    }
  };
// export const updateBookDetails = async (req, res) => {
//     try {
//       const response = await booksService.updateBook(req);
//       return res.status(201).json({
//         success: true,
//         response
//       });
//     } catch (error) {
//       errorHandler(res, error);
//     }
//   };

// export const requestBookIssue = async (req, res) => {
//     try {
//       const response = await booksService.issueNewBook(req);
//       return res.status(201).json({
//         success: true,
//         response
//       });
//     } catch (error) {
//       errorHandler(res, error);
//     }
//   };
// export const updateBookIssue = async (req, res) => {
//     try {
//       const response = await booksService.updateStatusBook(req);
//       return res.status(201).json({
//         success: true,
//         response
//       });
//     } catch (error) {
//       errorHandler(res, error);
//     }
//   };
// export const searchBooks = async (req, res) => {
//     try {
//       const response = await booksService.searchBook(req);
//       return res.status(201).json({
//         success: true,
//         response
//       });
//     } catch (error) {
//       errorHandler(res, error);
//     }
//   };
// export const issueBook = async (req, res) => {
//     try {
//       const response = await booksService.issueBook(req);
//       return res.status(201).json({
//         success: true,
//         response
//       });
//     } catch (error) {
//       errorHandler(res, error);
//     }
//   };

 

  export default{
    // findBook,
    newTask,
    fetchAllTasks,
    // removeBook,
    // updateBookDetails,
    // requestBookIssue,
    // updateBookIssue,
    // searchBooks
  }