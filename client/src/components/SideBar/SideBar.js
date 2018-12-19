import React from 'react'
import './SideBar.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MailIcon from '@material-ui/icons/Mail';
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

const drawerWidth = 230;
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
                    {['Favorite'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <FavoriteIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                <Typography>Filters</Typography>
                <ExpansionPanel className={classes.expansionRoot}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={classes.heading}>Ingredients</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className ={classes.expansionDetail}>
                        <List>
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
                        {['Favorite'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <FavoriteIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <Typography>Filters</Typography>
                    <ExpansionPanel className={classes.expansionRoot}>
                        <ExpansionPanelSummary>
                            <Typography className={classes.heading}>Ingredients</Typography>
                        </ExpansionPanelSummary>
                    </ExpansionPanel>
                </Drawer>
            </div>
    )}
    
}

export default withStyles(styles)(SideBar)