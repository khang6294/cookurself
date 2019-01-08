import React from 'react'
import './SideBar.css'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PermIdentity from '@material-ui/icons/PermIdentity'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import ExitToApp from '@material-ui/icons/ExitToApp';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import CircularProgress from '@material-ui/core/CircularProgress';
import QueryList from './QueryList'


const sideBar = (props) => {
    if(props.ingredientList.length > 0){
        return (
            <div className='side-bar'>
            <Drawer
                className="drawer"
                variant="permanent"
                classes={{
                    paper: props.openSD ? "drawPaper-open" : "drawerPaper",
                }}
            >
                <br/>
                {props.openSD ? 
                <IconButton className="closeDrawer-btn">
                    <ChevronLeft onClick = {() => props.onCloseSD()}/>
                </IconButton>
                : null } 
                <List>
                    {props.isAuth ?  
                    <ListItem button key={'Logout'} onClick ={() => props.logout()}>
                        <ListItemIcon><ExitToApp/></ListItemIcon>
                        <ListItemText primary={'Logout'} />
                    </ListItem> :
                    <>
                    <ListItem button key={'Login'} onClick ={() => props.login()}>
                        <ListItemIcon><PermIdentity/></ListItemIcon>
                        <ListItemText primary={'Login'} />
                    </ListItem>
                    <ListItem button key={'Register'} onClick ={() => props.register()}>
                        <ListItemIcon><AssignmentInd/></ListItemIcon>
                        <ListItemText primary={'Register'} />
                    </ListItem>
                    </>
                    }
                    {props.isAuth ?
                    <>
                    <ListItem button key={'favorite'}>
                        <ListItemIcon><FavoriteIcon style={{color:'#ef0909'}}/></ListItemIcon>
                        <ListItemText primary={'Favorite'} />
                    </ListItem>
                    <ListItem button key={'new-recipe'} onClick ={() => props.newRecipePage()}>
                        <ListItemIcon><AddCircleOutlineIcon style={{color:'#30bd30'}}/></ListItemIcon>
                        <ListItemText primary={'Share your recipe'} />
                    </ListItem> 
                    </> : null  
                    }                             
                </List>
                <Divider />
                <Typography style={{fontSize:'1.2rem',textAlign:'center',paddingBottom:'1rem',paddingTop:'1rem'}}>Filters</Typography>
                <ExpansionPanel className="expansionRoot">
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className="heading">Ingredients</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails className ="expansionDetail">
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
                    className="drawer"
                    variant="permanent"
                    classes={{
                        paper: "drawerPaper"
                    }}
                >
                    {props.openSD ? <ChevronLeft onClick = {() => props.onCloseSD()}/>: null}
                    <List>
                        {props.isAuth ? 
                        <ListItem button key={'Logout'} onClick ={() => props.logout()}>
                            <ListItemIcon><ExitToApp/></ListItemIcon>
                            <ListItemText primary={'Logout'} />
                        </ListItem> :
                        <>
                        <ListItem button key={'Login'} onClick ={() => props.login()}>
                            <ListItemIcon><PermIdentity/></ListItemIcon>
                            <ListItemText primary={'Login'} />
                        </ListItem>
                        <ListItem button key={'Register'} onClick ={() => props.register()}>
                            <ListItemIcon><AssignmentInd/></ListItemIcon>
                            <ListItemText primary={'Register'} />
                        </ListItem>
                        </>
                        }
                        {props.isAuth ?
                        <>
                        <ListItem button key={'favorite'}>
                            <ListItemIcon><FavoriteIcon style={{color:'#ef0909'}}/></ListItemIcon>
                            <ListItemText primary={'Favorite'} />
                        </ListItem>
                        <ListItem button key={'new-recipe'} onClick ={() => props.newRecipePage()}>
                            <ListItemIcon><AddCircleOutlineIcon style={{color:'#30bd30'}}/></ListItemIcon>
                            <ListItemText primary={'Share your recipe'} />
                        </ListItem> 
                        </> : null  
                        }                             
                    </List>
                    <Divider />
                    <Typography style={{fontSize:'1.2rem',textAlign:'center',paddingBottom:'1rem',paddingTop:'1rem'}}>Filters</Typography>
                    <ExpansionPanel className="expansionRoot">
                    <ExpansionPanelSummary expandIcon={<CircularProgress size={25} thickness={4.5}/>}>
                            <Typography className="heading">Ingredients</Typography>
                        </ExpansionPanelSummary>
                    </ExpansionPanel>
                </Drawer>
            </div>
    )}
    
}

export default (React.memo(sideBar))