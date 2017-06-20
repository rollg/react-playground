import React from 'react';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

const About = props => (
    <div>
        <h1>About Us</h1>
        <p>Hello Medium!</p>
        <p><button onClick={() => props.changePage()}>Go to home page via redux</button></p>
    </div>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/')
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);

