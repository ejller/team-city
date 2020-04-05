import React from 'react'
import {CustomTable, CustomTr} from './TableStyle'
const Table = (props) => {
  
  const parseDate = (index) => {
      const date = props.data[index].launch;

      let formatDate = new Date(
        date.years,
        date.months-1,
        date.date,
        date.hours,
        date.minutes);

      if (date.date==null) 
        formatDate = new Date(
        date.years,
        date.months-1);

      if (date.months==null)
        formatDate = new Date(
        date.years, 11);
  
      if (date.years==null)
        return 'Дата неизвестна'
      return countDate(formatDate);
  }
  
  const countDate = (formatDate) =>{
    let diff = new Date((new Date())-formatDate);
    if (diff>0){
      const days = Math.floor((diff.getTime())/(24*1000*60*60))
      return ('После старта - кол-во дней: ' + days + ', кол-во часов и минут: '+ diff.getHours() +':'+diff.getMinutes());
    } else {
      diff = new Date(formatDate-(new Date()));
      const days = Math.floor((diff.getTime())/(24*1000*60*60))
      return ('До старта - кол-во дней: ' + days + ', кол-во часов и минут: '+ diff.getHours() +':'+diff.getMinutes());
    }
  }


  return(
      <CustomTable>
        <tbody>
          <CustomTr>
              <td>Название</td>
              <td>Владелец</td>
              <td>Место</td>
              <td>Время</td> 
          </CustomTr>
        
            {props.data.map((element, index) =>
            <tr key={index}>
              <td>{element.mission}</td>
              <td>{element.vehicle}</td>
              <td>{element.location}</td>
              <td>{parseDate(index)}</td> 
            </tr>
            )}
          
        </tbody>
      </CustomTable>
  )
}


export default Table;