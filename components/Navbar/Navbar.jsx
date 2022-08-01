import {useEffect, useState} from 'react'
import {
    AppBar, Box, Toolbar,
    Typography, Grid, Paper,
    Button, makeStyles, createTheme, ThemeProvider, Container
} from '@material-ui/core';
import {theme, useStyles} from './navbarStyles'

const Navbar = (props)=>{
    const [currentLink, setCurrentLink] = useState("home")
     
    const styles = useStyles()
    const handleLinkClick = (type)=>{
        setCurrentLink(type)
    }
    const isCurrentLink=(link)=>{
        return link == currentLink
    }
    useEffect(()=>{

    },[])
    return (
  
        <AppBar color="primary" className={styles.bar} style={{position:"relative"}}>
            <Toolbar> 
                <Grid container> 
                    <Grid  style={{marginLeft:"5%", marginRight:"30%"}}>
                        <Box>
                                <Typography className={styles.link} variant="body1" component="p" onClick={()=>handleLinkClick("home")}>Bruh Devs</Typography>
                        </Box>
                    </Grid>
                    {/* remaining links */}
                    
                   
                </Grid>
            </Toolbar>

        </AppBar>
 

    )
}
export default Navbar;