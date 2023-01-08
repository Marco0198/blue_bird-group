import { createStore } from 'vuex'
import auth from "./modules/auth";

export default createStore({
  modules: {
    auth
   
  }
})

// Automatically run the `init` action for every module,
// if one exists.
// for (const moduleName of Object.keys(modules)) {
//   if (modules[moduleName].actions && modules[moduleName].actions.init) {
//     store.dispatch(`${moduleName}/init`);
//   }
// }

//export default store;

