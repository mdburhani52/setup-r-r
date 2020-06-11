import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { ROUTER_PATH, BASE_NAME, ADMIN_ROUTER_PATH } from 'services/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkLogin } from 'modules/Admin_module/store/actions';

import Footer from 'modules/Admin_module/components/Footer';
import Header from 'modules/Admin_module/components/Header';


const PublicRoute = ({ component: Component, ...rest }) => {
    if(rest.checkLogin()){
        return <Redirect to={ADMIN_ROUTER_PATH + 'dashboard'} />
    }else{
        return (
            <Route {...rest} render={props => {
                return (
                    <Component {...props} />
                )
            }}
            />
        )
    }
    
}


const mapStateToProps = state => {
    return {

    };
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    checkLogin
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PublicRoute)