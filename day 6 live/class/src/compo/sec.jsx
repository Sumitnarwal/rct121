import { Grid, GridItem,Box } from '@chakra-ui/react'

export const Second = () => {

    return (
        <div>

            <Grid
                display={"grid"}
                h='400px'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gridColumn={["row","column"]}
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={1} bg='mediumpurple' />
                <GridItem colSpan={1} rowSpan={3} bg='tomato' />
                <GridItem colSpan={1} bg='lightskyblue' />
                {

                    // <Box rowSpan={2} colSpan={1} bg='mediumpurple' >1</Box>
                    // <Box colSpan={1} rowSpan={3} bg='tomato'  >2</Box>
                    // <Box colSpan={1} bg='lightskyblue'>3</Box>
                }
            </Grid>

        </div>
    )
}