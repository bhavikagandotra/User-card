import { useState,useEffect } from 'react';
import './App.css'
import { UserDetails } from './UserDetails'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [data, setData] = useState([])
  const fetchInfo = () => { 
      return fetch('https://jsonplaceholder.typicode.com/users') 
              .then((res) => res.json()) 
              .then((d) => setData(d)) 
      }
      
      useEffect(() => {
          fetchInfo();
      }, [])
  return (
    <>
    <div className="heading">
      <h1><b>Welcome to User Portal</b></h1>
    </div><hr />
   <div className="main-container" >
   {data.map((dataObj, index)=>{
            return <div className="col-md-4" >
              <UserDetails name={dataObj.name} email={dataObj.email} 
              phone={dataObj.phone} company ={dataObj.company.name} 
              city={dataObj.address.city} street= {dataObj.address.street} 
              zipcode = {dataObj.address.zipcode} />
            </div>
           })}
   </div>
    </>
  )
}

export default App

