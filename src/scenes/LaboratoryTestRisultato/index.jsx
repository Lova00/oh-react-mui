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
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {
    ListItemText,
    MenuItem,
    Input,
} from "@material-ui/core/es/index";
import Header from '../../components/Header/index';
import WelcomeBar from '../../components/WelcomeBar/index';
import ChatFloatingPopup from '../../components/ChatFloatingPopup/index';
import Sidebar from '../../components/PatientSidebar';

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
    },
    titles: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    title: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        margin: 0,
    },
    titleResult: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: "8%",
    },
    selectResult: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginLeft: "15%",
        marginTop: "-6%",
    },

    titleResult2: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        margin: "7%",
    },
    firstTitle: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: "5px",
        width: "30%",
    },
    checkControl: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: "-6%",
        marginLeft: "15%",
        width: "60%",
    },

    formControl2: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        marginTop: "-6%",
        marginLeft: "15%",
        width: "60%",
    },
});

class LaboratoryTestRisultato extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedNO: true,
            checkedCronic: true,
            result: [],
        };


        this.handleChangeTransport = this.handleChangeTransport.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
    handleChangeTransport = name => event => {
        this.setState({ [name]: event.target.checked });
    };




    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid container justify='center' alignItems='stretch'>
                    <Grid item xs={12} lg={10}>
                        <Header username={this.props.username} hospitalName={this.props.hospitalName} />
                        <Paper elevation={4} className={classes.appFramePaper}>
                            <WelcomeBar path="Home / Patient Database / LaboratoryTest / LaboratoryTestResult" txt="" />
                            <Grid container spacing={24} className={classes.containerWhite}>
                                <Grid item xs={6} md={2} className={"mobile-view-large"}
                                    style={{ backgroundColor: "rgba(94, 94, 94, 1)" }}>
                                    <Sidebar
                                        patientID={'32040'} OPD={'8937821'} bloodGroup={'A+'}
                                        patientName={this.props.patientName} patientAvatarSrc={null}
                                        notes={['Pneumonia and malnutrition', 'Grasses, Gluten']}
                                        cronic={this.state.checkedCronic} cronicOnChange={this.handleChange}
                                        lastAdmission={'22.01.2016'} reason={'Pneumonia and malnutrition'}
                                        treatment={'Pneumond malnutrition'} doctorAvatarSrc={null}
                                        doctorName={'Dr. Meredith Greys'} doctorJob={'Pneumologis'} doctorPhone={'3453829043'}
                                    />
                                </Grid>
                                {/* RIGHT SUBCOLOUM */}
                                <Grid item xs={12} md={10}>
                                    <h4 style={{ color: "rgb(121, 126, 132)" }}>COMPLETE THE FORM IN ORDER TO INSERT LABORATORY TEST RESULTS</h4>
                                    <div id="result">
                                        <h6 className={classes.titleResult}> Type 1* </h6>
                                        <div className={classes.selectResult}>
                                            <FormControl className={classes.formControl}>
                                              
                                                <Select
                                                    native
                                                    value={this.state.result}
                                                    onChange={this.handleChange('result')}
                                                    inputProps={{
                                                        name: 'result',
                                                        id: 'result-native',
                                                    }}
                                                >
                                                    <option value="" />
                                                    <option value={1}>Result 1</option>
                                                    <option value={2}>Result 2</option>
                                                    <option value={3}>Result 3</option>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>

                                    <h6 className={classes.titleResult2}> Type 2* </h6>

                                    <div id="first">
                                        <div className={classes.firstTitle}>
                                            <h5 className={classes.titleResult2}>1. Result</h5> </div>
                                        <div className={classes.checkControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.yes1}
                                                        onChange={this.handleChangeTransport('yes1')}
                                                        value="yes1"
                                                        color="primary"
                                                    />
                                                }
                                                label="Yes"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.no1}
                                                        onChange={this.handleChangeTransport('no1')}
                                                        value="no1"
                                                        color="primary"
                                                    />
                                                }
                                                label="No"
                                            />
                                        </div>

                                    </div>
                                    <div id="second">
                                        <div className={classes.firstTitle}>
                                            <h5 className={classes.titleResult2}>2. Result </h5> </div>
                                        <div className={classes.checkControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.yes2}
                                                        onChange={this.handleChangeTransport('yes2')}
                                                        value="yes2"
                                                        color="primary"
                                                    />
                                                }
                                                label="Yes"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.yes2}
                                                        onChange={this.handleChangeTransport('no2')}
                                                        value="no2"
                                                        color="primary"
                                                    />
                                                }
                                                label="No"
                                            />
                                        </div>

                                    </div>
                                    <div id="third">
                                        <div className={classes.firstTitle}>
                                            <h5 className={classes.titleResult2}>3. Result </h5> </div>
                                        <div className={classes.checkControl}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.yes2}
                                                        onChange={this.handleChangeTransport('yes3')}
                                                        value="yes3"
                                                        color="primary"
                                                    />
                                                }
                                                label="Yes"
                                            />
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={this.state.yes2}
                                                        onChange={this.handleChangeTransport('no3')}
                                                        value="no3"
                                                        color="primary"
                                                    />
                                                }
                                                label="No"
                                            />
                                        </div>
                                    </div>
                                    <h6 className={classes.titleResult}> Type 3* </h6>
                                    <div>
                                    <div className={classes.firstTitle}>
                                    <h5 className={classes.titleResult2}>Result 1</h5></div> 
                                    <div className={classes.formControl2}>
                                    <FormControl >
                                              
                                              <Select
                                                  native
                                                  value={this.state.result1}
                                                  onChange={this.handleChange('result1')}
                                                  inputProps={{
                                                      name: 'result1',
                                                      id: 'result1-native',
                                                  }}
                                              >
                                                  <option value="" />
                                                  <option value={1}>1</option>
                                                  <option value={2}>2</option>
                                                  <option value={3}>3</option>
                                                  <option value={4}>4</option>
                                                  <option value={5}>5</option>
                                                  <option value={6}>6</option>
                                                  <option value={7}>7</option>
                                                  <option value={8}>8</option>
                                                  <option value={9}>9</option>
                                                  <option value={10}>10</option>
                                              </Select>
                                          </FormControl>
                                          </div>
                                          </div>

                                           <div>
                                    <div className={classes.firstTitle}>
                                    <h5 className={classes.titleResult2}>Result 2</h5></div>
                                    <div className={classes.formControl2}>
                                    <FormControl >
                                              
                                              <Select
                                                  native
                                                  value={this.state.result2}
                                                  onChange={this.handleChange('result2')}
                                                  inputProps={{
                                                      name: 'result2',
                                                      id: 'result2-native',
                                                  }}
                                              >
                                                  <option value="" />
                                                  <option value={1}>1</option>
                                                  <option value={2}>2</option>
                                                  <option value={3}>3</option>
                                                  <option value={4}>4</option>
                                                  <option value={5}>5</option>
                                                  <option value={6}>6</option>
                                                  <option value={7}>7</option>
                                                  <option value={8}>8</option>
                                                  <option value={9}>9</option>
                                                  <option value={10}>10</option>
                                              </Select>
                                          </FormControl>
                                          </div>
                                          </div>

                                           <div>
                                    <div className={classes.firstTitle}>
                                    <h5 className={classes.titleResult2}>Result 3</h5></div>
                                    <div className={classes.formControl2}>
                                    <FormControl >
                                              
                                              <Select
                                                  native
                                                  value={this.state.result3}
                                                  onChange={this.handleChange('result3')}
                                                  inputProps={{
                                                      name: 'result3',
                                                      id: 'result3-native',
                                                  }}
                                              >
                                                  <option value="" />
                                                  <option value={1}>1</option>
                                                  <option value={2}>2</option>
                                                  <option value={3}>3</option>
                                                  <option value={4}>4</option>
                                                  <option value={5}>5</option>
                                                  <option value={6}>6</option>
                                                  <option value={7}>7</option>
                                                  <option value={8}>8</option>
                                                  <option value={9}>9</option>
                                                  <option value={10}>10</option>
                                              </Select>
                                          </FormControl>
                                          </div>
                                          </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
                <ChatFloatingPopup />
            </div>
        );
    }
}

LaboratoryTestRisultato.defaultProps = {
    patientName: 'Modotoky Tokaiia',
    provenance: 'District, Village',
};

LaboratoryTestRisultato.propTypes = {
    classes: PropTypes.object.isRequired,
    patientName: PropTypes.string.isRequired,
    provenance: PropTypes.string.isRequired,
};

export default withStyles(styles)(LaboratoryTestRisultato);