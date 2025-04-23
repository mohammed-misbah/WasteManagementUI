import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';


const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    admin: null,
  },
  reducers: {
    setAdminDetails: (state, action) => {
   
      state.admin = action.payload;


    },
    clearAdminDetails: (state) => {

        console.log(state.userDetails,"this is not set admin deatails");
        Cookies.remove('admin_jwt')
  
        state.userDetails = null;
      
        // const navgiate = useNavigate()
        // navgiate('/admin')
        
  
    },
  },
});

export default adminSlice.reducer
export const { setAdminDetails, clearAdminDetails } = adminSlice.actions;
 