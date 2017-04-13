/* Define your initial state here.
 *
 * 
 * THIS IS PLAIN REDUCER
 * INCLUDED JUST FOR REMOVING THE ERROR IN THE CONSOLE
 * WHEN YOU CREATE FIRST REAL REDUCER
 * PLEASE REMOVE THIS ONE
 * AND ALSO DO NOT FORGET THE TEST
 * 
 * 
 * 
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {} from '../actions/const';

const initialState = {};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    /*
    case YOUR_ACTION: {
      // Modify next state depending on the action and return it
      return nextState;
    }
    */
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
