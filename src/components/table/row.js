import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const TableRow = props => (
    <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
    </tr>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TableRow)

