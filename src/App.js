import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
// import Table from "./components/Table";

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
});


class App extends Component {
  render() {
    const { items } = this.props;
    console.log(items);
    return (
      <div className="App">
        <Navbar />
        {/* <Table item={items} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.itemsReducer.data
});

export default connect(
  mapStateToProps
)(withStyles(styles, { withTheme: true })(App));
