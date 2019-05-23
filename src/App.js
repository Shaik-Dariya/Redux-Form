import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch} from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, Link } from 'react-router';
import { NavLink } from 'react-router-dom';
import { push } from 'connected-react-router';
import SimpleForm from './app/reduxForm';
import ReduxFormValidate  from './app/reduxForm/validateForm'
import FieldLevelValidate from './app/reduxForm/fieldLevelValidation';
class Hello extends React.Component{
  handleSubmit(data)
  {
    const jsonFor = JSON.stringify(data, null, 2);
    alert(jsonFor);
  }

  render()
  {
    return(
      <div>
        <SimpleForm onSubmit={this.handleSubmit} />
        <button type="button" style={{
          whiteSpace:'nowrap',
          display:'inline-block',
          borderRadius:'5px',
          padding:'10px 15px',
          fontSize:'20px',
          color:'#fff',
          backgroundImage:'linear-gradient(rgb(79, 147, 206), rgb(40, 95, 143))',
          border:'1px solid #285f8f',
        }}onClick={() => this.props.fireChange('/changed')}>Change Route with Redux Store</button>
        <ReduxFormValidate  onSubmit={this.handleSubmit} />
        <FieldLevelValidate onSubmit ={this.handleSubmit} />
      </div>
    )
  }
}

function mapToProps(state)
{
    return {
      state
    }
}

function mapDispatchProps(dispatch)
{
  return {
    fireChange: function(routeName){
      dispatch(push(routeName))
    }
  }
}

const HelloCon = compose(withRouter, connect(mapToProps, mapDispatchProps))(Hello);



function App(props) {
  return (
    <Fragment>
      <div>
      <NavLink to="/simpleForm" activeClassName="selected">SimpleForm</NavLink>
      <NavLink to="/validation" activeClassName="selected">ValidateForm</NavLink>
      <NavLink to="/fieldLevel" activeClassName="selected">FieldValidate</NavLink>
      </div>      
      <Switch>
        <Route exact path="/simpleForm" component={(props) => (
          <div>
            <SimpleForm onSubmit={props.handleSubmit} />
          </div>
        )} />
        <Route exact path="/validation" component={(props) => (
          <div>
            <ReduxFormValidate onSubmit={props.handleSubmit} />
          </div>
        )} />
        <Route exact path="/fieldLevel" component={(props) => (
          <div>
            <FieldLevelValidate onSubmit={props.handleSubmit} />
          </div>
        )} />
      </Switch>
    </Fragment>
  );
}
export default App;
