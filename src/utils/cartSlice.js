import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem: (state,action)=> {

            //Vanila(older) Reduc => Don't MUTATE STATE,returning was mandatory
            // const newState = [...state];
            // newState.items.push(action.payload)
            // return newState


            //Redux Toolkit uses immer behind the scene
            //We HAVE to mutate the state
            //mutating the state over here
            state.items.push(action.payload);
        },
        removeItem:(state) =>{
            state.items.pop();
        },
        // originalState = {items: ["pizza"]}
        clearCart:(state) => {
            //RTK - either Mutate the existing state or return a new State
            state.items.length=0; // originalState = {items:[]}

            // return {itenms:[]}; //this new object will be replaced inside originalState={items:[]}
        }
    }
})
export const { addItem,removeItem,clearCart } = cartSlice.actions;
export default cartSlice.reducer;  