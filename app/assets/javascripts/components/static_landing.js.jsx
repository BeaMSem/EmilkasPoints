var Landing = React.createClass({

    getInitialState(){
        return(null)
    },
    handleSignUp(){
        console.log('sign up')
    },
    handleLogIn(){
        console.log(login)
    },
    render(){
        return(
            <div className="landing_page">
                <div className="landing_intro">
                    <div className="landing_small_font">
                        Welcome to
                    </div>
                    <div className="landing_medium_font">
                        App Name
                    </div>
                </div>
                <div className="landing_buttons">
                    <div className="landing_sign_up_button">
                        <a href=""></a>
                    </div>
                    <div className="landing_log_in_button">
                        <input
                            type="button"
                            value="Log In"
                            onClick={this.handleLogIn}
                        />
                    </div>
                </div>
            </div>
        )
    }

});