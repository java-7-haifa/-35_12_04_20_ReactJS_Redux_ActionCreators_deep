import React from "react";
import {connect} from 'react-redux';
import * as Actions from './redux/actions/actionCreator';

class App extends React.Component {

  render() {
    return (
      <div style={{margin:'100px auto', textAlign:'center'}}>
        <p>{this.props.count}</p>
        <button onClick={this.props.inc}>inc</button>
        <button onClick={this.props.dec}>dec</button><br/>
        <button onClick={() => this.props.addN(10)}>Add 10</button>
        <button onClick={() => this.props.subN(15)}>Sub 15</button>
      </div>
    );
  }
}

const mapStateToPros = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    inc: () => dispatch(Actions.incCounter()),
    dec: () => dispatch(Actions.decCounter()),
    addN: num => dispatch(Actions.addNumber(num)),
    subN: num => dispatch(Actions.subNumber(num))
  }
}

export default connect(mapStateToPros,mapDispatchToProps)(App);