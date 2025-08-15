import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isSidebarOpen: boolean;
  activePage: string;
}

const initialState: SidebarState = {
  isSidebarOpen: false,
  activePage: 'Dashboard'
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    setActivePage(state, action) {
      state.activePage = action.payload
    }
  },
});

export const { toggleSidebar, setActivePage } = sidebarSlice.actions;
export default sidebarSlice.reducer;
