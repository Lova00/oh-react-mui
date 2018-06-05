import React from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import {withStyles} from 'material-ui/styles';
import {FormControl} from 'material-ui/Form/index';
import {IconButton, Input} from 'material-ui';
import {InputAdornment} from 'material-ui/Input/index';


const styles = {
    form: {
        fontSize: 16,
        width: '100%',
    },
};

class DrawerSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FormControl className={this.props.classes.form}>
                <Input
                    type="text"
                    placeholder={this.props.placeholder}
                    startAdornment={
                        <InputAdornment position="start" style={{marginLeft: -12}}>
                            <IconButton>
                                <SearchIcon/>
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        );
    }
}

DrawerSearch.defaultProps = {
    classes: {
        form: {},
    },
    placeholder: 'Search something',
    onSearch: null,
};

DrawerSearch.propTypes = {
    classes: PropTypes.objectOf(PropTypes.any),
    placeholder: PropTypes.string,
    onSearch: PropTypes.func,
};

export default withStyles(styles)(DrawerSearch);
