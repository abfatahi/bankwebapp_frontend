import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    sidebarActive: false,
  },
  reducers: {
    toggleSidebar: (state) => {
      console.log(!state.sidebarActive);
      state.sidebarActive = !state.sidebarActive;
      return state;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

export const sidebarSelector = (state) => state.sidebar;
