import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    taskDone : [],
    todoWork : []
}

export const taskSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
      addTask : (state,action) => {
        state.todoWork.push(action.payload);
      },
      deleteTask : (state,action) => {
        // state.todoWork.push(action.payload);
        state.todoWork = state.todoWork.filter((task)=>{
            if(task === action.payload){
              state.taskDone.push(action.payload);
              return false;
            }
            else{
              return true;
            }
        })
      },
      deleteTaskAtTaskDone : (state,action)=>{
        state.taskDone = state.taskDone.filter((task)=>{
          if(task === action.payload){
            return false;
          }
          else{
            return true;
          }
        })
      }
    //   incrementByAmount: (state, action) => {
    //     state.value += action.payload
    //   },
    },
})

  // Action creators are generated for each case reducer function
export const { addTask, deleteTask, deleteTaskAtTaskDone} = taskSlice.actions

export default taskSlice.reducer