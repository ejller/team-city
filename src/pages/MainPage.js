import React from 'react';
import {useEffect, useState} from 'react'
import axios from 'axios';

import {GET_SPACEX_REQUEST } from '../const/api'
import {Main} from './MainPageStyle'
import Table from './component/Table'

function MainPage(){
  const [data, setData] = useState([]);
  const [isMount, setIsMount] = useState(false)
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async() => {
      await axios
      .get(GET_SPACEX_REQUEST)
      .then(
          response => {
            console.log(response.data)
            setData(response.data)
            setIsLoading(false)
          }
        )
      .catch(
        error => {
          console.log(error);
          setIsLoading(false)
        }
      )
    }
    if (!isMount){
      getData()
      setIsMount(true);
    }
    const interval = setInterval(() => {
      getData();
    }, 10000)
    return () => clearInterval(interval)
    
  }, [data]);

  if (isLoading)
  return (
    <div>
      Loading...
    </div>
  );


  return(
    <Main>
      <h1>Запуски компании SpaceX</h1>
      <Table data={data}></Table>
    </Main>
  )
}

export default MainPage