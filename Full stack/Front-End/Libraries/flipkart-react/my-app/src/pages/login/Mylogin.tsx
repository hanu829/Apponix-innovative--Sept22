import { Container, Grid } from "@mui/material"
import { MyAutocomplete, Myform } from "../../components"

export const MyLogin:React.FC<{}>=()=>{
    return <>
    <Container maxWidth="xl">
<Grid>
    navbar
</Grid>
<Grid> autocomplete
<MyAutocomplete/>

</Grid>
<Grid>
    my form
    <Myform/>
</Grid>         
    </Container>
    </>
}