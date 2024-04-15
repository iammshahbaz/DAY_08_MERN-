import React, { useContext, useRef, useState } from 'react'
import Navbar from '../Comonents/Navbar'
// import { Form } from 'react-router-dom'
import { Input } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { ThemeContext } from '../Context/ThemeContext'

const Login = () => {
  const [name ,setName] = useState('')
  const emailRef = useRef(null)
  const {theme} = useContext(ThemeContext)
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name)
    console.log(emailRef.current.value)
  }
  const isValidName = name.length>=3;
  return (
    <div style={{color:theme.text, background:theme.background ,height:'100vh' }}>

      <Navbar/>
      <Heading textAlign='center' size='xl'>FORM</Heading>
      <form style={{textAlign:'center'}} onSubmit={handleSubmit}>
        <div>
        <label htmlFor="Name">Name</label>
        <Input type='text' width='sm' m='4' placeholder='Enter Name' bg={theme.background} color={theme.text} value={name} onChange={(e)=>{setName(e.target.value)}}/>

        {
          !isValidName && (
            <p style={{color:'red'}}>*Name must be atleast 3 Characters</p>
          )
        }
        </div>
        <div>
          <label htmlFor="Email">Email</label>
          <Input placeholder='Email' width='sm' m='4' type='Email'  bg={theme.background} color={theme.text} ref={emailRef}/>
        </div>
        <Button colorScheme='blue'>Submit</Button>

      </form>
    </div>
  )
}

export default Login
