import {  WrapItem,Wrap,Center} from '@chakra-ui/react'

export const Tree = () => {

    return (
        <div>
            <Wrap const breakpoints = {{
                sm: '30em',
                lg: '62em',
            
              }} 
               fontSize={{ base: '24px', md: '40px'}} spacing='00px'>
            
                <WrapItem >
                    <Center w='300px' h='200px' bg='blue'>
                        NAV
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w={["300px","400px"]} h={["400px","200px"]} bg='tomato'>
                      CONTAINER
                    </Center>
                </WrapItem>
                <WrapItem>
                    <Center w='300px' h='200px' bg='red'>
                       WIDTH
                    </Center>
                </WrapItem>
              
            </Wrap>
        </div>
    )
}