import { createSlice} from '@reduxjs/toolkit'

const dropdownSlice = createSlice({
    name: 'dropdown',
    initialState: {items:[],selectedItems: [],UnselectedItems: []},
    reducers: {
        AddReducer(state,action) {
            const newItem= action.payload;
            state.selectedItems.push(newItem);
            state.UnselectedItems = state.UnselectedItems.filter(item=> item.id !== newItem.id)
             state.items.forEach(item => {
               if(item.id === newItem.id) item.isChecked = newItem.isChecked
            })
            // const existingItem = state.selectedItems.find(item => item.name === id)

        },
        RemoveDropDownReducer(state,action) {
            const newItem = action.payload;
            state.selectedItems = state.selectedItems.filter(item => item.id !== newItem.id);
            // const existingItem = state.selectedItems.filter(item => item.id !== id)
            // state.selectedItems = state.selectedItems.filter(item => item.name !== item.id);
            state.UnselectedItems.push(newItem)
            state.items.forEach(item => {
                if(item.id === newItem.id) item.isChecked = newItem.isChecked
             })
        
        },
        setDropDownReducer(state,action) {
          const items = action.payload;
          state.items= items;
          state.UnselectedItems = items;
        },
        selectAllDropDown(state) {
           state.items.forEach(item => {
             item.isChecked = true;
         })
           state.UnselectedItems = [];
           state.selectedItems = state.items;
        },
        selectNoneDropDown(state) {
            state.items.forEach(item => {
              item.isChecked = false;
          })
            state.selectedItems = [];
            state.UnselectedItems = state.items;
         }
    }
})

export const dropdownActions = dropdownSlice.actions;
export default dropdownSlice;