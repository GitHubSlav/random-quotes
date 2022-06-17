import {actionError, actionLoaded, actionNextQuote} from './reduxActions'

function mapStateToAppProps(state){
  return {
    isLoaded: state.isLoaded,
    quoteIdx: state.quoteIdx,
    error: state.error,
  }
}

function mapDispatchToAppProps(dispatch){
  return {
    nextQuote: function(length) {
      dispatch(actionNextQuote(length));
    },
    
    catchError: function(){
      dispatch(actionError());
    },
    
    loadApp: function(){
      dispatch(actionLoaded());
    }
  }
}

export {mapDispatchToAppProps, mapStateToAppProps};