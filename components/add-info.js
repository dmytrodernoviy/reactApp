import React from 'react'
import female from '../img/female.png'
import male from '../img/male.png'

const AddInfo = ({data}) => 
    <div className="additional-info">
    <div className="first-name">
    <i>{data.name.first}</i>
    <div className="gender-image"><img src={(data.gender === "male") ? male : female} alt=""></img></div>
    </div>
    <div>
    <div className="register-info">
        <span><strong>Username </strong>{data.login.username}</span>
        <span><strong>Registere </strong><span className="date">{new Date(data.registered.date).toLocaleString("en-US")}</span></span>
        <span><strong>Email </strong>{data.email}</span>
    </div>
    <div className="adress-info">
        <span><strong>Adress </strong>{data.location.street}</span>
        <span><strong>City </strong>{data.location.city}</span>
        <span><strong>Zip Code </strong>{data.location.postcode}</span>
    </div>
    <div className="dob-and-phone">
        <span><strong>Birthday </strong><span className="date">{new Date(data.dob.date).toLocaleString("en-US")}</span></span>
        <span><strong>Phone </strong>{data.phone}</span>
        <span><strong>Cell </strong>{data.cell}</span>
    </div>
    <div><img className="photo" src={data.picture.large} alt=""></img></div>
    </div>
    </div>

export default AddInfo

