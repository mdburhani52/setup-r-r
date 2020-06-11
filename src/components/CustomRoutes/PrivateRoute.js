import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { ROUTER_PATH, BASE_NAME, ADMIN_ROUTER_PATH } from 'services/config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkLogin } from 'modules/Admin_module/store/actions';

import Footer from 'modules/Admin_module/components/Footer';
import Header from 'modules/Admin_module/components/Header';


const PrivateRoute = ({ component: Component, ...rest }) => {

    var getPermission = rest.permission.length > 0 ? false:true;
    return (
        <Route {...rest} render={props => {
            if (rest.checkLogin(getPermission)) {
                return (
                    <React.Fragment>
                        <Header />
                        <Component {...props} />
                        <Footer />
                    </React.Fragment>

                )
            }
            else{
                return <Redirect to={ADMIN_ROUTER_PATH} />
            }
        }} />)
}
const mapStateToProps = state => {
    return {
        permission : state.admin.CommonReducer.permission
    };
}
const mapDispatchToProps = (dispatch) => bindActionCreators({
    checkLogin
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute)