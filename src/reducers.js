import { combineReducers} from 'redux';
import {NEXT, ERROR, LOADED} from './reduxActions'

function nextQuoteReducer(state = -1, action){
  if (action.type === NEXT)
    return Math.floor(Math.random() * action.quotesArrLength);
  else 
    return state;
}

function errorReducer(state = "", action){
  if (action.type === ERROR)
    return "Could not load the quotes";
  else 
    return state;
}

function loadingReducer(state = false, action){
  if (action.type === LOADED)
    return true;
  else 
    return state;
}

const rootReducer = combineReducers({
  error: errorReducer,
  isLoaded: loadingReducer,
  quoteIdx: nextQuoteReducer
});

export {rootReducer};