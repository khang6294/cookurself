import React,{Component} from 'react';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import './SearchBar.css'

const styles = theme => ({
    search: {
        border: '1px solid',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        width: '300px',
        [theme.breakpoints.up('sm')]: {
            width: '200px',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 8,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 8,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
            width: 200,
            },
        },
    },
});

class SearchBar extends Component{
    state = {
        inputSearch:''
    }
    handleChange = (event) => {
        this.setState({
            inputSearch: event.target.value
        }, () => this.props.onInputSearchChange(this.state.inputSearch))
    }
    
    render(){
        const { classes } = this.props;

        return (
            <div className='search-container'>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <SearchIcon />
                    </div>
                        <InputBase
                            placeholder="Search recipe"
                            value={this.state.inputSearch}
                            onChange={this.handleChange}
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                        />
                </div>
          </div>
        )
    }
}


export default withStyles(styles)(SearchBar);