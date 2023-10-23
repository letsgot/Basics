import { createAsyncThunk ,createSlice } from '@reduxjs/toolkit'



// // First, create the thunk
export const fetchData = createAsyncThunk('workout', async ()=>{
    // return axios.get('/api/workouts/').then((response) =>  response.data);
    const response = await fetch('http://localhost:4000/api/workouts/');
      // console.log(data);
    let data  = await response.json();
    return data;
})


  
// extraReducers:  {
//     [fetchData.pending] : (state, action) => {
//         state.loading = true;
//     },
//     [fetchData.fulfilled] : (state, action) => {
//         // console.log(action.payload);
//         state.loading = false;
//         state.data = action.payload;
//     },
//     [fetchData.rejected] : (state, action) => {
//         state.error = true;
//     }
// }

let initialState = {
    data : [],
    loading : true, 
    error : ""
}

const workoutSlice = createSlice({
    name : 'workout', 
    initialState,
    reducers : {
        increment: (state,action) => {
            // console.log(action.payload);
            state.data = action.payload[0]
            state.loading = action.payload[1];
            state.error = action.payload[2];
            console.log(state,action);
        }
    }
})

export const { increment } = workoutSlice.actions
export default workoutSlice.reducer;

// extraReducers: (builder) => {
//     builder.addCase(fetchData.pending, (state, action) => {
//         state.loading = true;
//     })
//     builder.addCase(fetchData.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//     })
//     builder.addCase(fetchData.rejected, (state, action) => {
//         state.isError = true;
//     })
// }
