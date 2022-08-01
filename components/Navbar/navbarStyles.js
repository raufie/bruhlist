import {makeStyles, createTheme} from '@material-ui/core'
export const theme = createTheme({
    pallete:{
        primary:{
            main:"#DFE6E9"
        },
        secondary:{
            main:"#DFE6E9"
        }
    }
})

export const useStyles = makeStyles({
    bar: {
        backgroundColor:"#DFE6E9",
        color:"#000000",
        // position:"fixed !important"
    },
    link:{
        fontSize:'125%',
        cursor:"pointer",
        "&:hover":{
            textShadow:"0px 0px 1px black"
        }
    },
    padding:{
        paddingRight:"4.5%",
       
        
    }

})

