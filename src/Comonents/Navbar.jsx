import { ThemeContext } from '../Context/ThemeContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
// import { Button, ButtonGroup } from '@chakra-ui/react'
import { Switch,Spacer,Box,Flex,Text } from '@chakra-ui/react'

const Navbar = () => {
    const { toggleTheme, theme } = useContext(ThemeContext)
    return (
    //     <div>
    //         <Link to='/'>Login</Link>
    //         {/* <Button onClick={toggleTheme}>Theme</Button> */}
    //        <Switch onChange={toggleTheme} colorScheme='teal' textAlign='right' />
    //     </div>
    // )
    <Flex as="nav" padding="1rem" bg="teal.500" color="white">
            <Box>
                <Link to='/'>Login</Link>
            </Box>
            <Spacer /> {/* Pushes the Switch to the right */}
            <Text fontSize='md' mr='2'>Theme</Text>
            <Switch
                onChange={toggleTheme}
                colorScheme='red'
            />
        </Flex>
    )
}

export default Navbar
