/* import statements*/
import React from 'react';
import {Link} from 'react-router-dom'; // DO A 'npm install react-router-dom'
import {AppBar, Avatar, Typography, Toolbar, Button} from '@material-ui/core';
import memories from '../../images/memories.png';
//may or may not be needed
import useStyles from './styles';

/*
* navbar from App.js
*/
const Navbar = () => {
    const classes = useStyles(); //-- line not needed
    const user = null;
    /*
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="dreamio" height= "60" />

        </AppBar>
    */
    
    
    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="dreamio" height= "60" />
            </div>
        
        
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>                    
                    </div>
                ) : (
                    <Button component={Link} to="/auth" variant="contained" color="primary">Login</Button>

                )}
            </Toolbar>
        </AppBar>
       
    );
    

};


export default Navbar;
