import React, { useState } from 'react'
import { add_Customer } from './BLL/BLLCustomer';
import Display from './Display';

function Customer() {
const [id,setId]=useState('');
const [name,setName]=useState('');
const [address,setAddress]=useState('');
const [mobileNo,setMobileNo]=useState('');
const [Customer,setCustomer]=useState([]);
function id_Change(e){
  setId(e.target.value);

}
function name_Change(e){
  setName(e.target.value);

}
function address_Change(e){
  setAddress(e.target.value);

}
function mobileNo_Change(e){
  setMobileNo(e.target.value);

}

function add_Click(e){
  add_Customer(id,name,address,mobileNo)
  alert("Customer added successfully");

}


  return (
    <>
    <div className="Main">
  <div className="inputElements">
    <label htmlFor="txtId">ID</label>
    <input onChange={id_Change} type="text" id="txtId" value={id} />
    <label htmlFor="txtName">Name</label>
    <input onChange={name_Change} type="text" id="txtName" value={name}/>
    <label htmlFor="txtAddress">Address</label>
    <textarea onChange={address_Change} name="" id="" cols={20} rows={10} defaultValue={""} value={address} />
    <label htmlFor="txtMob">MobileNo</label>
    <input onChange={mobileNo_Change} type="text" id="txtMob" value={mobileNo} />
  </div>
  <div className="input-Btn">
    <input onClick={add_Click} type="button" defaultValue="Add" />
    <input type="button" defaultValue="Search" />
    <input type="button" defaultValue="Modify" />
    <input type="button" defaultValue="Delete" />
  </div>
  <div className="input-Btn">
    <input type="button" defaultValue="First" />
    <input type="button" defaultValue="Previous" />
    <input type="button" defaultValue="Next" />
    <input type="button" defaultValue="Last" />
  </div>
</div>
<Display Customer={customers}></Display>

    </>
  )
}

export default Customer
