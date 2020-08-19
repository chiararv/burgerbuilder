import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import { Component } from 'react'

const WithErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {

    state = {
      error: null
    }
    componentDidMount() {
      this.requestInterceptor = axios.interceptors.request.use(req => {
        this.setState({error: null})
        return req
      })
      this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
        this.setState({error: error})
      })
    }

    componentWillUnmount () {
      axios.interceptors.request.eject(this.requestInterceptor)
      axios.interceptors.response.eject(this.responseInterceptor)
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }
    render () {
      return(
        <>
        <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
          {this.state.error ? this.state.error.message : null}
        </Modal>
        <WrappedComponent {...this.props} />
        </>
      )
    }
}
}

export default WithErrorHandler
