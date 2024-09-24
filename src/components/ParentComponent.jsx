import React, { useState,useCallback } from 'react'
import Count from './Count'
import Button from './Button'
import Title from './Title'



const ParentComponent = () => {
    const [age,setAge]=useState(25);
    const [salary,setSalary]=useState(20000);
    const ageIncrement=useCallback(()=>{
       setAge(age+1)
    },[age])
    const salaryIncrement=useCallback(()=>{
        setSalary(salary+1000)
     },[salary])
  return (
    <div >
      <Title/>
      <Count text="age" count={age}/>
      <Button handleClick={ageIncrement}>increaseAge</Button>
      <Count text="salary" count={salary}/>
      <Button handleClick={salaryIncrement}>increaseSalary</Button>
    </div>
  )
}

export default ParentComponent
