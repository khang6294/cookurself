import React from 'react'
import './SideBar.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';
import QueryList from './QueryList'

const drawerWidth = 240;
const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    expansionRoot: {
        margin : 0,
    },
    expansionDetail:{
        marginTop : '-20px'
    }
});

const SideBar = (props) => {
    const { classes } = props;
    if(props.ingredientList.length > 0){
        return (
            <div className='side-bar'>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <List>
                    <ListItem button key={'favorite'}>
                        <ListItemIcon><FavoriteIcon style={{color:'#ef0909'}}/></ListItemIcon>
                        <ListItemText primary={'Favorite'} />
                    </ListItem>
                    <ListItem button key={'new-recipe'} onClick ={() => props.newRecipePage()}>
                        <ListItemIcon><AddCircleOutlineIcon style={{color:'#30bd30'}}/></ListItemIcon>
                        <ListItemText primary={'New Recipe'} />
                    </ListItem>
                </List>
                <Divider />
                <Typography style={{fontSize:'1.2rem',textAlign:'center',paddingBottom:'1rem',paddingTop:'1rem'}}>Filters</Typography>
                <ExpansionPanel className={classes.expansionRoot}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Ingredients</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className ={classes.expansionDetail}>
                        <List className='query-list'>
                            <QueryList 
                                ingredients = {props.ingredientList}
                                querySelected = {(checked) => props.querySelected(checked)}
                            />
                        </List>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Drawer>
            </div>
        )
    } else {
        return (
            <div className='side-bar'>
                <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <List>
                        <ListItem button key={'favorite'}>
                            <ListItemIcon><FavoriteIcon style={{color:'#ef0909'}}/></ListItemIcon>
                            <ListItemText primary={'Favorite'} />
                        </ListItem>
                        <ListItem button key={'new-recipe'} onClick ={() => props.newRecipePage()}>
                            <ListItemIcon><AddCircleOutlineIcon style={{color:'#30bd30'}}/></ListItemIcon>
                            <ListItemText primary={'New Recipe'} />
                        </ListItem>
                    </List>
                    <Divider />
                    <Typography style={{fontSize:'1.2rem',textAlign:'center',paddingBottom:'1rem',paddingTop:'1rem'}}>Filters</Typography>
                    <ExpansionPanel className={classes.expansionRoot}>
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>Ingredients</Typography>
                        </ExpansionPanelSummary>
                    </ExpansionPanel>
                </Drawer>
            </div>
    )}
    
}

export default withStyles(styles)(React.memo(SideBar))