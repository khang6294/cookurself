import React,{Component} from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import classNames from 'classnames';
import Logo from '../Logo/Logo'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const styles = theme => ({
    rootRecipes: {
      flexGrow: 1,
      marginLeft:'240px',
    },
    rootRecipe: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#6598c5',
    },
    hide: {
        display: 'none',
    },
    grow: {
      flexGrow: 1,
      textAlign: 'center'
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
});

class Header extends Component {

    shouldComponentUpdate(nextProps,nextState){
        if(this.state.open !== nextState.open){
            return true;
        } else return false;
        
    }

    state = {
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render(){
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={this.props.match.params.recipeId ? classes.rootRecipe : classes.rootRecipes}>
                <AppBar 
                    position="static"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                      })}
                >
                <div className={classes.grow}>
                    <Logo/>
                </div>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header);
