import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './NewRecipe.css'


const styles = theme => ({
    container: {
        marginLeft: '250px',
        paddingTop: '2rem',
        height: '500px',
        width: '200px',
        border: '1px solid'
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
    dense: {
        marginTop: 19,
    },
    menu: {
        width: 200,
    },
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
        width:'100%'
    },
    chip: {
        // margin: theme.spacing.unit,
    },
    noLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    }
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, that) {
  return {
    fontWeight:
      that.state.name.indexOf(name) === -1
        ? that.props.theme.typography.fontWeightRegular
        : that.props.theme.typography.fontWeightMedium,
  };
}


class NewRecipe extends Component {
    state = {
        name: '',
        instructions: '',
        ingredients: [],
        duration: '',
        open: false,
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleIngredientsChange = event => {
        this.setState({ ingredients: event.target.value },() => console.log(this.state.ingredients));
      };

    handleCreate = () => {
        const ingredients = this.state.ingredients.map(ingredient => {
            return this.props.ingredientList.filter(ingredientListItem => ingredientListItem.name === ingredient)[0]._id
        })
        const newRecipe = {
            name: this.state.name,
            instructions: this.state.instructions,
            ingredients: ingredients,
            duration: this.state.duration,
            creator: '5c0c24b25c363311125da5fd'
        }
        this.props.createNewRecipe(newRecipe)
        this.setState({ open: false });
    }

    render() {
        const { classes,ingredientList } = this.props;
    return (
        <>
        <Button variant="contained" style={{marginLeft: '250px',marginTop:'2rem'}} onClick={() => this.props.backToRecipeList()}>Back</Button>
        <Paper className='form-container'> 
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <h1>New recipe</h1>
            </Grid>
            <Grid container spacing={24} >
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-required"
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        className={classes.textField}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        required
                        id="standard-number"
                        label="Duration (minutes)"
                        value={this.state.duration}
                        onChange={this.handleChange('duration')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />  
                    </Grid>
                    <Grid item xs={12}>
                    
                    <TextField
                        required
                        multiline
                        id="standard-required"
                        label="Intructions"
                        value={this.state.instructions}
                        onChange={this.handleChange('instructions')}
                        style={{ margin: 8,width: '90%' }}
                        margin="normal"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="select-multiple-chip">Ingredients</InputLabel>
                    <Select
                        multiple
                        value={this.state.ingredients}
                        onChange={this.handleIngredientsChange}
                        input={<Input id="select-multiple-chip" />}
                        renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.map(value => (
                            <Chip key={value} label={value} className={classes.chip} />
                            ))}
                        </div>
                        )}
                        MenuProps={MenuProps}
                    >
                        {ingredientList.map(ingredient => (
                        <MenuItem key={ingredient._id} value={ingredient.name} style={getStyles(ingredient, this)}>
                            {ingredient.name}
                        </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        style={{marginTop:'2rem',marginLeft:'8px'}} 
                        onClick={this.handleCreate}
                    >
                        Create
                    </Button>
                </Grid>
            </Grid>
        </Paper>
      </>
    );
  }
}


export default withStyles(styles, { withTheme: true })(NewRecipe);