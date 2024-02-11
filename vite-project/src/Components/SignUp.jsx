import React from 'react'

const SignUp = ({formdata,setFormdata}) => {
  return (
    <div className='signup__container'>
      <input type="text" name="" id="" placeholder='Email' value={formdata.email} onChange={(e)=>setFormdata({...formdata, email: e.target.value})}/>
      <input type="password" name="" id="" placeholder='Password' value={formdata.password} onChange={(e)=>setFormdata({...formdata, password: e.target.value})} />
      <input type="password" name="" id="" placeholder='Confirm Password' value={formdata.confirmpassword} onChange={(e)=>setFormdata({...formdata, confirmpassword: e.target.value})} />
    </div>
  )
}

export default SignUp
