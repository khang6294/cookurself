import React from 'react';
import ErrorIcon from '@material-ui/icons/Error';
import classNames from 'classnames';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

  
const styles = theme => ({
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: theme.spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
});

const errorDisplay = (props) => {
    const { classes, className, message } = props;
    return (
        <SnackbarContent
            className={classNames(classes['error'], className)}
            aria-describedby="client-snackbar"
            message={
                <span id="client-snackbar" className={classes.message}>
                    <ErrorIcon className={classNames(classes.icon, classes.iconVariant)} />
                        {message}
                </span>
            }
        />
    );
}

export default withStyles(styles)(errorDisplay);
