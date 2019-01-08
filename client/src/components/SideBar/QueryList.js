import React,{Component} from 'react';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import './QueryList.css'

class QueryList extends Component {
    state = {
        checked: [],
    };
  
    handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
  
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        }, () => this.props.querySelected(this.state.checked));
    };
  
    render() {
        const { queryHeader,ingredients } = this.props;
        let listOfItems = null;
        if(ingredients){
            listOfItems = ingredients.map(ingredient => (
                <ListItem className ="list-item" key={ingredient._id} role={undefined} dense button onClick={this.handleToggle(ingredient)}>
                  <Checkbox
                    checked={this.state.checked.indexOf(ingredient) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  {ingredient.name}
                </ListItem>
            ))
        }

        return listOfItems
    }
    
}
  
  
export default QueryList;