var RegistrationForm = React.createClass({

    getInitialState(){
        return({
            name: '',
            email: '',
            password: '',
            pin: '',
            errors: {}
        })
    },
    handleChange(e){
        var obj = {};
        obj[e.target.name] = e.target.value;
        this.setState(obj);
    },
    render(){
        return(
            <div className="sign_up_form">
                <div className="form_label">
                    <div className="form_label_top">
                        <div className="form_label_title">Sign Up</div>
                    </div>
                    <div className="form_label_bottom">
                        <div className="form_label_message">Already have an account?</div>
                        <div className="form_label_button">
                            <input
                                type="button"
                                value="Log In"
                                onClick={this.props.setLoginStateTrue}
                                className="box_like navy"
                            />
                        </div>
                    </div>
                </div>
                <div className="the_form">
                    <form method="post" action="/families">
                        <div>{this.state.errors.name}</div>


                        <div className="form_input_field">
                            <div className="form_input_field_label">
                                <label htmlFor="name">Name:</label>
                            </div>
                            <div className="form_input_field_input">
                                <input
                                    type="text"
                                    name="name"
                                    ref="name"
                                    placeholder="enter your name"
                                    value = {this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
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

                        <div className="form_input_field">
                            <div className="form_input_field_label">
                                <label htmlFor="password">Family Member Pin:</label>
                            </div>
                            <div className="form_input_field_input">
                                <input
                                    type="text"
                                    name="pin"
                                    ref="pin"
                                    value = {this.state.pin}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>
                        <div className="access_button">
                            <input
                                type="submit"
                                value='Sign In'
                                className="box_like navy"
                            />
                        </div>
                    </form>
                </div>

            </div>
        )
    }

});