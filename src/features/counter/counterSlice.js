import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchService = createAsyncThunk(
  'allServices/fetchAllServices',
  async()=>{
    const response = await fetch('./service.JSON')
    .then( res => res.json())
    return response;
  }
)

const serviceSlice = createSlice({
  name:'Services',
  initialState:{
    allServices: [],
    displayServices:[],
    cartService:[],
    cartPrice: 0,
    serviceCategory:"Anti Age Face Treatment",
    serviceCategory:"Manicure and Pedicure",
    serviceCategory:"Hair Treatment",
    isLoading: true,
  },
  reducers: {
    setDisplayService : (state,action)=>{
      if(state.allServices.length > 0){
        const categoryServices = state.allServices.filter( p => p.catagory === state.ServiceCategory)
        state.displayServices = categoryServices;
      }
    },
    deleteFromCart:(state,action)=>{
     const newCart = state.cartService.filter(pd=>pd._id !== action.payload._id)
     state.cartService = newCart;
    },
    increaseServiceQuantity: (state,action)=>{
      let newCart = []
      state.cartService.forEach(pd=>{
        if(pd._id === action.payload._id){
          const newQuantity = action.payload.quantity + 1;
          let service = {...action.payload}
          service.quantity = newQuantity;
          newCart.push(service)
        }
        else{
          newCart.push(pd)
        }
      })
      state.cartService = newCart;
      
    },
    decreaseServiceQuantity: (state,action)=>{
      let newCart = []
      state.cartService.forEach(pd=>{
        if(pd._id === action.payload._id){
          const newQuantity = action.payload.quantity - 1;
          let service = {...action.payload}
          service.quantity = newQuantity;
          newCart.push(service)
        }
        else{
          newCart.push(pd)
        }
      })
      state.cartService = newCart;
      
    },
    setCartPrice: (state,action)=>{
      if(state.cartService.length>0){
        let totalPrice = 0;
        state.cartService.forEach(pd=>{
          totalPrice += parseInt(pd.price)*pd.quantity;
        })
        state.cartPrice = totalPrice;
      }
    },
    setServiceCategory: (state,action)=>{
      state.serviceCategory = action.payload;
      const categoryService = state.allServices.filter( p => p.catagory === state.serviceCategory)
      state.displayServices = categoryService;
    },
    setServiceToCart:(state,action)=>{
      let exist = []
      if(state.cartService.length > 0){
        const existService =  state.cartService.find( pd=>pd._id === action.payload._id);
        exist.push(existService)
        if(!existService){
          exist = [];
        }
      }
      if(exist.length !== 0){
        alert(`
        This product already in your cart.
        You can increase the quantity from cart page !`)
      }
      else{
        state.cartService.push({...action.payload, quantity: 1})
      }
    }

  },
  extraReducers: ( builder ) =>{
    builder.addCase(fetchService.fulfilled,(state, action)=>{
      state.allServices = action.payload;
      state.isLoading = false;
    })
    
    
  }
})
export const { setDisplayService, setServiceCategory, setServiceToCart, setCartPrice, increaseServiceQuantity, decreaseServiceQuantity, deleteFromCart } = serviceSlice.actions;

export default serviceSlice.reducer;