import {makeStyles, createTheme} from '@material-ui/core'


export const useStyles = makeStyles({
    bg: {

        
        width:"100%", 
        height:"92.5vh",
        display:"block",
        objectFit:"cover",
        userDrag:"none",
        pointerEvents:'none',
    },
    bgDiv:{
        position:"absolute",
        width:"100%",
        zIndex:"-1",
    },
    profile: {
        width:"52.5%",
        display:"block",
        userDrag:"none",
        pointerEvents:'none',
        marginLeft:"12.5%",
        
        
    },
    profileDiv:{
        marginLeft:"25%",
        marginTop:"12.5%",
    
        },
    profileText:{
        color:"white",
        fontSize:"8vw",
        fontWeight:"200",
        marginTop:"20%",
        fontFamily:'Edu NSW ACT Foundation'
        
    },
    smallLink:{
        marginTop:"5%",
        marginLeft:"7%"
    },
    heading:{
        width:"75%",
        height:"125%",
        objectFit:"cover",
        position:"absolute",
        zIndex:"-1"
    },
    headingDiv:{
        marginTop:"5%",
        marginBottom:"2%",
        position:"relative",

    },
    headingText:{
        color:"white",
        fontSize:"3vw",
        marginLeft:"7%",
        paddingTop:"1.85%",
        pointerEvents:'none',
        fontWeight:250
    }
})

