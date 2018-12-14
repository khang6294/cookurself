import React, {Component} from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';



const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
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
    },
    chip: {
        margin: theme.spacing.unit,
    },
    noLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    }
);


const DialogTitle = withStyles(theme => ({
    root: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing.unit,
        top: theme.spacing.unit,
        color: theme.palette.grey[500],
    },
    }))(props => {
    const { children, classes, onClose } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
            <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
            </IconButton>
        ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles(theme => ({
    root: {
        margin: 0,
        padding: theme.spacing.unit * 2,
    },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.divider}`,
        margin: 0,
        padding: theme.spacing.unit,
    },
}))(MuiDialogActions);


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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

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

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
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
        const newRecipe = {
            name: this.state.name,
            instructions: this.state.instructions,
            ingredients: [this.state.ingredients],
            duration: this.state.duration,
            creator: '5c0c24b25c363311125da5fd'
        }
        this.props.createNewRecipe(newRecipe)
        this.setState({ open: false });
    }

    render() {
        const { classes } = this.props;

    return (
        <>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add recipe
        </Button>        
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title" onClose={this.handleClose}>New Recipe</DialogTitle>
            <DialogContent>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        required
                        id="standard-required"
                        label="Name"
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        className={classes.textField}
                        margin="normal"
                    />
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
                        {names.map(name => (
                        <MenuItem key={name} value={name} style={getStyles(name, this)}>
                            {name}
                        </MenuItem>
                        ))}
                    </Select>
                    </FormControl>
                    <TextField
                        required
                        id="standard-required"
                        label="Intructions"
                        value={this.state.instructions}
                        onChange={this.handleChange('instructions')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="standard-number"
                        label="Duration"
                        value={this.state.duration}
                        onChange={this.handleChange('duration')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleCreate} color="primary">
                    Create
                </Button>
          </DialogActions>
      </Dialog>
      </>
    );
  }
}


export default withStyles(styles, { withTheme: true })(NewRecipe);