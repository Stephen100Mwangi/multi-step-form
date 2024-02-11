import React from 'react'

const Other = ({formdata,setFormdata}) => {
  return (
    <div className='other__info'>
      <input type="text" name="" id="" placeholder='Nationality' value={formdata.nationality} onChange={(e)=>setFormdata({...formdata,nationality:e.target.value})}/>
      <span>I agree to  the terms and conditions</span>
      <input type="checkbox" name="" id="" checked={formdata.check} value={formdata.check} onChange={()=>setFormdata({...formdata,check: true})} />
    </div>
  )
}

export default Other
