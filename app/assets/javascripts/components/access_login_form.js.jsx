var LoginForm = React.createClass({

    getInitialState(){
        return({
            email: '',
            password: '',
            message: ''
        })
    },
    handleChange(e){
        var state = {};
        state[e.target.name] = e.target.value;
        this.setState(state);
    },
    render(){
        const isEnabled = this.state.email.length > 0 && this.state.password.length > 0;

        return(
            <div className="login_form">
                <div className="form_label">
                    <div className="form_label_top">
                        <div className="form_label_title">Log In</div>
                    </div>
                    <div className="form_label_bottom">
                        <div className="form_label_message">Need an account?</div>
                        <div className="form_label_button">
                            <input
                                type="button"
                                value='Sign Up'
                                onClick={this.props.setLoginStateFalse}
                                className="box_like navy"
                            />
                        </div>
                    </div>
                </div>
                <div className="the_form">
                    <form action="/login" method="post">
                        <div className="form_input_field">
                            <div className="form_input_field_label">
                                <label htmlFor="email">Email:</label>
                            </div>
                            <div className="form_input_field_input">
                                <input
                                    type="text"
                                    name="email"
                                    ref="email"
                                    placeholder="enter your email"
                                    value = {this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="form_input_field">
                            <div className="form_input_field_label">
                                <label htmlFor="password">Password:</label>
                            </div>
                            <div className="form_input_field_input">
                                <input
                                    type="password"
                                    name="password"
                                    ref="password"
                                    placeholder="enter your password"
                                    value = {this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="access_button">
                            <input
                                type="submit"
                                value="Log In"
                                disabled={!isEnabled}
                                className="box_like navy"
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }

});




