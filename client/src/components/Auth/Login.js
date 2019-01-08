import React,{Component} from 'react';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Logo from '../Logo/Logo'
import CircularProgress from '@material-ui/core/CircularProgress';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplay'

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
                width: 400,
                marginLeft: 'auto',
                marginRight: 'auto',
            },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: '#6598c5',
        width:'100px',
        height:'100px'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    margin: {
        margin: theme.spacing.unit,
    },
});

class Login extends Component {
    
    componentDidUpdate(prevProps){
        if(this.props.error){
            if(prevProps.error){
                if(this.props.error.message !== prevProps.error.message){
                    this.setState({
                        authProcess: false
                    })
                }
            } else {
                this.setState({
                    authProcess: false
                })
            }
        }
    }

    state = {
        email:'',
        password:'',
        authProcess: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.getLoginInfo(this.state)
        this.setState({
            authProcess: true
        })
    }


    render(){
        const { classes } = this.props;
        return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.open}
                onClose={() => this.props.closeLogin()}
            >   
                <main className={classes.main}>
                    <CssBaseline />
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                        <Logo/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                        Login
                        </Typography>
                        {this.props.error ? this.props.error.message ?
                        <ErrorDisplay
                            className={classes.margin}
                            message={this.props.error.message}
                        /> : null : null
                        }
                        <form className={classes.form} onSubmit = {this.handleSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input 
                                id="email" 
                                name="email"
                                type="email" 
                                autoComplete="email" 
                                value = {this.state.email}
                                onChange = {this.handleChange}
                                required
                                autoFocus 
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input 
                                name="password" 
                                type="password" 
                                id="password" 
                                autoComplete="current-password" 
                                value = {this.state.password}
                                required
                                onChange = {this.handleChange}
                            />
                        </FormControl>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign me in 	&nbsp;
                            {this.state.authProcess ? <CircularProgress size={20} thickness={4.0} color="secondary"/> : null}
                        </Button>
                        </form>
                    </Paper>
                </main>
            </Modal>
        )
    }
}

export default withStyles(styles)(Login)