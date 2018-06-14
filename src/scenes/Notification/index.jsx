import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Checkbox,
  FormControl,
  Grid,
  Paper,
  Select,
  TextField
} from '@material-ui/core';
import {
  ListItemText,
  MenuItem,
  Input,
} from "@material-ui/core/es/index";
import Header from '../../components/Header/index';
import WelcomeBar from '../../components/WelcomeBar/index';
import ChatFloatingPopup from '../../components/ChatFloatingPopup/index';
import Sidebar from '../../components/PatientSidebar';
import Divider from '@material-ui/core/Divider';
import CardNotification from '../../components/CardNotification';

const styles = theme => ({
  appFramePaper:
    theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
      backgroundColor: theme.palette.secondary.main,
    }),
  button: {
    margin: theme.spacing.unit,
    float: "right",
    marginTop: "-45px",
  },
  buttonInlineDuo: {
    margin: theme.spacing.unit,
    width: '44%',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '93%',
  },
  marginRight: {
    marginRight: theme.spacing.unit * 2,
  },
  containerWhite: {
    backgroundColor: 'white',
    boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
    marginBottom: '70px',
    marginTop: "20px",
  },
  title: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    margin: 0,
  },

  leftAlign: {
    marginLeft: "10px",
    width: "30%",
  },
  
  all: {
    width: "100%",
  },

  divider: {
    backgroundColor: "black",
  }
});

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
  


  render() {
    // Select per laboratory tests
    const { classes } = this.props;
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
          width: 250
        },
      },
    };
    return (
      <div>
        <Grid container justify='center' alignItems='stretch'>
          <Grid item xs={12} lg={10}>
            <Header username={this.props.username} hospitalName={this.props.hospitalName} />
            <Paper elevation={4} className={classes.appFramePaper}>
              <WelcomeBar path="Home / Notification" txt="" />
              <Grid container spacing={24}>
                <div className={classes.all}>
                  <h3 className={classes.leftAlign}> Notification </h3>
                  <Button variant="contained" color="primary" className={classes.button}>
                       SETTING NOTIFICATION
                        </Button>
                  <Divider className={classes.divider} />
                </div>

             
            
             
                
                <CardNotification /> 
                <CardNotification />
                <CardNotification />
                      
                        



              </Grid>
            </Paper>
          </Grid>
        </Grid>



        <ChatFloatingPopup />
      </div>
    );
  }
}
Notification.defaultProps = {
  patientName: 'Modotoky Tokaiia',
  provenance: 'District, Village',
};
Notification.propTypes = {
  classes: PropTypes.object.isRequired,
  patientName: PropTypes.string.isRequired,
  provenance: PropTypes.string.isRequired,
};

export default withStyles(styles)(Notification);