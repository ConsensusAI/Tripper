import React, { useContext } from 'react'
import { AppContext } from '../hooks/useAppContext'
import { ListItem } from '../ListItem/ListItem'

export const ResultList = () => {

  const { results } = useContext(AppContext);

  return (
    <>
      <h3>Results:</h3>
      <ul>
        {
          // console.log("props:", props.result)
          results.map((item) => {
            return (
              <ListItem 
                key = {item.id}
                results={item}
              /> 
          )
          })
        }
      </ul>
    </>
  )
}
