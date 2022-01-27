import React from 'react';
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import {Menu} from "@material-ui/icons";



const useStyles = makeStyles({
    header: {
        backgroundColor: "#fff",
        height: 70
    },
    logo:{
        height:55,
        margin:'auto',
        paddingRight:70 
    },
    menu:{
        color:"#000"
    }
})

export default function Header() {
    const classes = useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
    return <div>
        <AppBar className={classes.header}>
            <Toolbar>
                <Menu className={classes.menu}/>
                <img src={url} alt="logo" className={classes.logo} />
            </Toolbar>
        </AppBar>

    </div>
}
