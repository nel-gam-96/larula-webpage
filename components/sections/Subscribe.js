import { Flex } from "@chakra-ui/react"
import Text from '../Text'

const Subscribe = () => {
  return (
    <Flex>
      Suscríbete
      <input type="email" /> <Text variant="button">Registrarse</Text>
    </Flex>
  )
}

export default Subscribe