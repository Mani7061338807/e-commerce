import { createStore } from "redux";
import rootRuducer from "./reducer";

const store = createStore(rootRuducer)

export default store