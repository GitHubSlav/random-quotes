const ERROR = 'ERROR';
const LOADED = 'LOADED';
const NEXT = 'NEXT';

function actionLoaded(){
  return {type: LOADED};
}

function actionNextQuote(length){
  return {
    type: NEXT,
    quotesArrLength: length
  };
}

function actionError(){
  return {type: ERROR};
}

export {ERROR, LOADED, NEXT, actionError, actionLoaded, actionNextQuote};