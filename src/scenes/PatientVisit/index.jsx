import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Header from '../../components/Header/index';
import WelcomeBar from '../../components/WelcomeBar/index';
import ChatFloatingPopup from '../../components/ChatFloatingPopup/index';
import {
  Button, Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  InputLabel,
  Paper,
  Select,
  TextField
} from '@material-ui/core';
import { InsertPhoto, PhotoCamera } from "@material-ui/icons/es/index";

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
  root:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
  button: {
    margin: theme.spacing.unit,
  },
  buttonInlineDuo: {
    margin: theme.spacing.unit,
    width: "44%"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "93%",
  },
  textFieldThree: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "28%",
  },
  menu: {
    width: 200,
  },
  containerWhite: {
    backgroundColor: "white",
    boxShadow: "0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)",
    marginBottom: "70px"
  },
  titles: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  }
});

class PatientVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs={12} lg={10}>
            <Header username={this.props.username} hospitalName={this.props.hospitalName} />
            <Paper elevation={4} className={classes.appFramePaper}>
              <WelcomeBar path={"Home / Patient Registration"} txt={""} />
              <Grid container spacing={24} className={classes.containerWhite}>
                <Grid item xs={6} md={2}>
                  <h4>NEW PATIENT REGISTRATION</h4>
                </Grid>
                <Grid item xs={12} md={10} />
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(PatientVisit);