
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../../actions/userActions';
import { withRouter } from 'react-router-dom'
import Loading from '../Loading/LoadingComponent'



export default function (ComposedClass, reload, adminRoute = null) {


    class AuthenticationCheck extends Component {



        componentDidMount() {


            this.props.auth(this.props.history, reload, adminRoute);


        }

        render() {


            if (!this.props.async.loading) {

                return (
                    <ComposedClass {...this.props} user={this.props.user.userData} />
                );
            } else {
                return (
                    <Loading />
                )
            }







        }
    }


    const mapStateToProps = (state) => ({
        user: state.user,
        async: state.async
    })

    const mapDispatchToProps = {
        auth
    }




    return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck)
}

