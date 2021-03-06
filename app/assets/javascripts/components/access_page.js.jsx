var AccessPage = React.createClass({

    getInitialState(){
        return({
            login: true
        })
    },
    setLoginStateTrue(){
        this.setState({
            login: true
        })
    },
    setLoginStateFalse(){
        this.setState({
            login: false
        })
    },
    renderRegisterForm(){
        return(
            <RegistrationForm
                setLoginStateTrue = {this.setLoginStateTrue}
            />
        )
    },
    renderLoginForm(){
        return(
            <LoginForm
                setLoginStateFalse = {this.setLoginStateFalse}
            />
        )
    },
    renderAppropriateForm(){
        return(
            this.state.login ? this.renderLoginForm() : this.renderRegisterForm()
        )
    },
    renderPublicArea(){
        return(this.renderAppropriateForm());
    },
    render(){
        return(this.renderPublicArea())
    }

});