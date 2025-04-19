import { createSlice } from '@reduxjs/toolkit';
// import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie' 


const userSlice = createSlice({
    id : 'id',
    name:'user',
    initialState:{
        id : null,
        user:null,
    },
    reducers: {
        setUserDetails: (state, action) => {
          state.user = action.payload;
        },
        clearUserDetails: (state) => {
          Cookies.remove('jwt');
          state.user = null;
        },
      },
    });
    
    
export default userSlice.reducer;
    
export const {setUserDetails,clearUserDetails} = userSlice.actions;


