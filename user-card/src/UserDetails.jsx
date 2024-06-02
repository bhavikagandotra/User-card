import React from 'react'
import './UserDetails.css'
import user from './user.png'

export const UserDetails = (props) => {
    let { name , email , phone , city , street , zipcode , company} = props;

  return (
    <div className='userContainer'>
            <div className="user-main">
                <div className="user-image">
                {/* <img width="120" height="120" src="https://img.icons8.com/officel/16/user.png" alt="user"/> */}
                <img src={user} width="120" height="120"  alt="not found"  style={{border:'0.2px solid grey', borderRadius:'50px'}}/>
                    </div>
                    <div className="userdetailscontainer">
                    
                    <div className="user-details">
                        <p><b>Name :- </b> {name}</p>
                        <p><b>Email:-</b>{email}</p>
                        <div className="phone">
                            <p><b>Phone:- </b>{phone}</p>
                            <p><b>Company:- </b>{company} </p>
                        </div>
                        <div className="address">
                            <p><b>City :-</b> {city}</p>
                            <p><b>Street :-</b> {street} </p>
                            <p><b>Zip Code :-</b> {zipcode} </p>
                        </div>
                    </div>
                    <div className="button">
                    <button className="button-34" role="button">Follow for More</button>     
                    </div>
                    </div>
                </div>
        
    </div>
  )
}