import React from 'react';
import Logo from '../Logo/Logo'
import AppBar from '@material-ui/core/AppBar';
import './Header.css'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    menuButton: {
      marginLeft: -theme.spacing.unit,
      zIndex:1000,
      paddingLeft: '1rem' 
    }
});
const header = (props) => {
    const { classes } = props;
    return (
        <div className={props.match.params.recipeId ? "rootRecipe" : "rootRecipes"}>
            <AppBar 
                position="static"
                className="appBar"
            >
            <div className="grow">                 
                <Hidden smUp>
                    <Grid item>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={() => props.onDrawerToggle()}
                            className={classes.menuButton}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                </Hidden>
                <div className="logo-display">
                    <Logo/>
                </div> 
            </div>
            </AppBar>
        </div>
    )
}

export default withStyles(styles)(header);
