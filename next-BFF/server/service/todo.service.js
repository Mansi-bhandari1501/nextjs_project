import todoModel from "../models/todo.model.js";



export const addTask = async (payload) => {
    try {
      const { task,status } = payload.body;
  console.log(task,status)
      console.log("connection object", payload.body);
  
      // console.log("receiver", receiver)
  
      if (!task) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Please provide the Todo Task  ",
        });
      }
  
      const newTask = await new todoModel({
        task: task,
        status:status
      }).save();
  
      console.log(newTask);
      return newTask;
    } catch (error) {
      throw error;
    }
  };

  export const fetchAllTasks = async (payload) => {
    console.log(payload.body)
    const tasks = await todoModel.find();
    return { tasks };
  }
//   export const deleteConnection = async (payload) => {
//       try {
//           const { id } = payload.params;
//           console.log("connection id", payload.params);
//           const data = await connectionModel.findByIdAndDelete(id);
//           console.log("deleted",data)
//           return data;
//       } catch (error) {
//           throw error;
//       }
//   }

export const deleteTask = async (payload) => {
    try {
      const { _id } = payload.params;
  console.log(payload.params)
      let data = await todoModel.findByIdAndDelete(_id);
  
      return { data };
    } catch (error) {
      throw error;
    }
  };
  export const updateTask = async (payload) => {
    try {
        console.log(payload.params)
        console.log(payload.body)
      let data = await todoModel.findByIdAndUpdate(payload.params, {
        $set: payload.body,
      })
      console.log(data)
      return { data };
    } catch (error) {
      throw error;
    }
  };

  export const issueNewBook = async (payload) => {
    try {
      const { bookId } = payload.body;
      const user = payload.user._id
      console.log(user)
      console.log("connection object", user);

      if (!bookId || !user ) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Please provide the all fields ",
        });
      }
  
      // console.log(receiver, sender)
      const newBook = await new activityModel({
        book: bookId,
        user :user
      }).save();
  
      console.log(newBook);
      return newBook;
    } catch (error) {
      throw error;
    }
  };
  export const updateStatusBook = async (payload) => {
    try {
      const { bookId,status } = payload.body;
      const user = payload.user._id
      console.log(user)
      console.log("connection object", user);

      if (!bookId || !user ) {
        throw Object.assign(new Error(), {
          name: "BAD_REQUEST",
          message: "Please provide the all fields ",
        });
      }
      const data = await activityModel.findOneAndUpdate(
        {
            book: bookId,
        },
        {
          $set: { status: status },
        }
      );
  
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  };
  export const searchBook = async (payload) => {
    try {
      const { title,category,author} = payload.body;
    
      console.log(payload.body)

    //   if (!title || !category ) {
    //     throw Object.assign(new Error(), {
    //       name: "BAD_REQUEST",
    //       message: "Please provide the all fields ",
    //     });
    //   }
      let data = await bookModel.find(
        {
            "$or":[
                {title:title},
                {category:category},
                {author:author},
                
            ]
        }
    )
  
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  };

//   export const updateConnection = async (payload) => {
//     try {
//       const {  } = payload.body;
//       console.log(payload.body)
//       console.log("body", senderId, receiverId, status );
//       const data = await connectionModel.findOneAndUpdate(
//         {
//           $and: [
//             {
//               sender: senderId,
//             },
//             {
//               receiver: receiverId,
//             },
//           ],
//         },
//         {
//           $set: { status: status },
//         }
//       );
//       console.log("SENDER",data);
//       return data;
//     } catch (error) {
//       throw error;
//     }
//   };


export default {
  addTask,
  fetchAllTasks,
    deleteTask,
    updateTask,
    issueNewBook,
    updateStatusBook,
    searchBook
  
    
  };