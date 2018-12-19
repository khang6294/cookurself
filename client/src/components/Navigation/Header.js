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
    root: {
      flexGrow: 1,
    },
    appBar: {
        backgroundColor: '#6598c5',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
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
            <div className={classes.root}>
                
                <AppBar 
                    position="static"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                      })}
                >
                <Toolbar>
                    <IconButton 
                        color="inherit"
                        aria-label="Menu"
                        onClick={this.handleDrawerOpen}
                        className={classNames(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon onClick = {this.handleDrawerOpen}/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        <Logo/>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                </AppBar>
                
            </div>
        )
    }
}

export default withStyles(styles)(Header);
