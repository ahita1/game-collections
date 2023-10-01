import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
const NavBar = () => {
    return (
        <div>
            <HStack>
                <Image src={logo} />
            </HStack>
        </div>
    )
}
export default NavBar