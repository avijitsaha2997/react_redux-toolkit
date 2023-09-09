import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import counterslice from "../features/counterslice";

const reduxLogger = createLogger();

const store = configureStore({
  reducer: {
    counter: counterslice,
  },
  middleware: (rtkDefaultMiddlewares) =>
    rtkDefaultMiddlewares().concat(reduxLogger),
});

export default store;
