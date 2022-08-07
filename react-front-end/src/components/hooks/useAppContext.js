import React, { createContext, useReducer } from "react";
import AppReducer from './useAppReducer';


const initialState = {
  //Load events where user_id = 1 and plans[0] (initial)
  events: [
    {
      id: "1",
      name: "CN Tower",
      latitude: 43.64446719365264,
      longitude: -79.38649706503828,
      done: false,
    },
    {
      id: "2",
      name: "Ripley's Aquarium",
      latitude: 43.64220060887206,
      longitude: -79.3864107609249,
      done: true,
    } 
  ],
  results: [],
  //Load plans where user_id = 1
  plans: [
    {
      id: 1,
      name: "Day in Toronto",
    },
    {
      id: 2,
      name: "Fun Weekend",
    }
  ],
}

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addToMap = (event) => {
    
    const updatedMap = state.events.concat(event);
    
    const updatedResults = state.results.filter((res) => event.id !== res.id)
    
    dispatch({
      type: "ADD_TO_MAP",
      payload: {
        events: updatedMap,
        results: updatedResults
      }
    });
  };

  const deleteFromMap = (id) => {
    
    const updatedMap = state.events.filter(el => el.id !== id);
    console.log("deleteFromMap: ", updatedMap);
    
    dispatch({
      type: "DELETE_FROM_MAP",
      payload: {
        events: updatedMap
      }
    });
  };  

  const setResults = (data) => {
    // console.log("addResults AppProvider: ", data);
    
    dispatch({
      type: "SET_RESULTS",
      payload: {
        results: data
      }
    });
  }

  const changeIconColor  = (id) => {
    const index = state.events.findIndex(ele => ele.id === id);
    //Mark as done/undone
    state.events[index].done = !state.events[index].done

    dispatch({
      type: "UPDATE_ICON_COLOR",
      payload: {
        events: state.events
      }
    })
  }

  const value = {
    events: state.events,
    addToMap,
    deleteFromMap,
    results: state.results,
    setResults,
    changeIconColor,
    plans: state.plans,
  };

  return  (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
};
