import { configureStore } from "@reduxjs/toolkit";

/* Tambien podemos nombrar por defecto taskReducer para simplificar el export por defecto*/
import taskReducer from "../features/taskSlice";

export const store = configureStore({
  reducer:{
    tasks: taskReducer,
  },
});
