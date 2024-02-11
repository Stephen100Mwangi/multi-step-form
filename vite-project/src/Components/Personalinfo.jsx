import React from 'react'

const Personalinfo = ({formdata,setFormdata}) => {
  return (
    <div className='personal__container'>
      <input type="text" name="" id="" placeholder='First name' value={formdata.firstname} onChange={(e)=> setFormdata({...formdata,firstname: e.target.value})}/>
      <input type="text" name="" id="" placeholder='Last name' value={formdata.lastname} onChange={(e)=> setFormdata({...formdata,lastname: e.target.value})}/>
      <input type="text" name="" id="" placeholder='Surname' value={formdata.surname} onChange={(e)=>setFormdata({...formdata,surname: e.target.value})}/>
    </div>
  )
}

export default Personalinfo
