import React from 'react';
import PropTypes from 'prop-types';
import className from 'classnames';
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
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';
import {Person} from '@material-ui/icons/es/index';
import {index} from '../../index.css';

const styles = theme => ({
 
///////////////////////////////////////////////////////////////////////////////////////////////////
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
  },
  titlesWhite: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    color: "white",
  },

  titlesPatient: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    color: "white",
    width:" 10px",
  },

  titleDoctor: {
   
    marginLeft: "60px",
    marginTop:"-25px",
    color: "white",

  },

  titleDoctor2: {
   
    marginTop:"-10px",
    color: "white",

  },

  titleDoctor3: {
   
    marginLeft: "70px",
    marginTop:"-36px",
    color: "white",

  },
   number: {
    // fontSize: "30px",
     color: "white",
     marginLeft: theme.spacing.unit,
     marginRight: theme.spacing.unit,
     marginTop: "-25px",
  },
///////////////////////////////////////////////////////////////////////////////////////////////////
  bigAvatar: {
    width: '100px',
    height: '100px',
    backgroundColor: "white",
    alt: "  ",
    marginLeft: '25px'
    //marginRight: theme.spacing.unit,
    //src:""
  },

  Avatar1: {
    width: '30px',
    height: '30px',
    backgroundColor: "white",
    alt: "",
    marginTop: "-20px",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    //src:""
  },
  
  Switch: {
    color: "white",
    },
  
});

class PatientVisit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        checkedA: false,
    };
  }

  componentDidMount = () => {
    setTimeout( ()=>{
      console.log('Setting checkboxes to true')
      this.setState({
        checkedA: true,
        })
    }, 2000)
  }

  handleChange = (event, checked) => {
    this.setState({ checkedA: checked });
  };

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
                <Grid item xs={6} md={2} style={{backgroundColor: "black"}}>
               
                <div>
                <Person style={{color : "white", marginLeft:"80%"}}/>
                </div>
                <div id="resize">
                <Avatar
                       className={className(classes.bigAvatar)}
                 />
                 <h6 className={classes.titlesWhite}>HEALTH INFORMATION </h6>
                 <h6 className={classes.titlesWhite}>Patient ID </h6>
                 <h1 className={classes.number}> 32040 </h1>
                 <h6 className={classes.titlesWhite}>OPD</h6>
                 <h1 className={classes.number}> 8937821 </h1>
                 <h6 className={classes.titlesWhite}>Blood Group </h6>
                 <h1 className={classes.number}> A+ </h1>

                 <h6 className={classes.titlesWhite}>
                 Notes
                 <ul>
                   <li>Pneumonia and malnutrition</li>
                   <li>Grasses, Gluten</li>
                </ul>
                </h6>
                <FormControlLabel 
                  control ={
                    <Switch className={classes.Switch}
                    checked={this.state.checkedA}
                    onChange={this.handleChange}
                  
                    value="checkedA" />   
                   }
                  
                   
                    label = { <h6 className={classes.titlesWhite}>Cronic Patient </h6>}
                   /> 
                   

                    <h6 className={classes.titlesWhite}>Last admission: 22.01.2016</h6>
                    <h6 className={classes.titlesWhite}>Reason for visit: Pneumonia and malnutrition</h6>
                    <h6 className={classes.titlesWhite}>Treatment made: Pneumond malnutrition</h6>


                    <h6 className={classes.titlesWhite}>Last doctor who visit the patient</h6>
                    <div className={classes.all}>
                      <Avatar className={classes.Avatar1}>
                    </Avatar>
                    <h6 className={classes.titleDoctor}>Dr. Meredith Greys</h6> </div>  
                   <div>
                    <h6 className={classes.titleDoctor2}>Pneumologis</h6>  
                    <h6 className={classes.titleDoctor3}> 34538290432</h6>
                    </div>

                   
                   </div>
        
        
                </Grid>










                <Grid item xs={12} md={10} >
                fgdrgdrgdrgdrg
                Drdfgdfg
                <dfn><dfn>df
                  gfd
                  g
                  fd</dfn></dfn>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}
PatientVisit.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(PatientVisit);