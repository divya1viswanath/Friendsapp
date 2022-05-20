import axios from 'axios'
import React, { useState } from 'react'

const Addfriend = () => {
  var [id,setId]=useState("")
  var [name,setName]=useState("")
  var [friendName,setFname]=useState("")
  var [friendNickName,setFnn]=useState("")
  var [DescribeYourFriend,setDes]=useState("")

  const subData =() => { 
    const data={"id":id,"name":name,"friendName":friendName,"friendNickName":friendNickName,"DescribeYourFriend":DescribeYourFriend}
    console.log(data)
  axios.post("https://dummyapifriends.herokuapp.com/adddata",data).then((response)=> {
    console.log(data)
  })  
  }

  return (
    <div>
      <div className="container">
        <div className="row">                                                                              
            <div className="col col-12 col-sm-12 col-md-2 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">ID</label>
                        <input onChange={(e)=>{setId(e.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">NAME</label>
                        <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">FRIEND NAME </label>
                        <input onChange={(e)=>{setFname(e.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label for="" className="form-label">FRIEND NICK NAME</label>
                        <input onChange={(e)=>{setFnn(e.target.value)}} type="text" className="form-control"/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label for="" className="form-label">DESCIPTION</label>
                        <textarea onChange={(e)=>{setDes(e.target.value)}} name="" id="" cols="30" rows="10" className="form-control"></textarea>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button onClick={subData} value="add" className="btn btn-success">ADD</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Addfriend         
         