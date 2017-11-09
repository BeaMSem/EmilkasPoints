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
            <div className="form_wrapper">

                <div className="form_header">
                    <div className="top">
                        <div className="title">Log In</div>
                    </div>
                    <div className="bottom">
                        <div className="message">Need an account?</div>
                        <div className="button">
                            <input
                                type="button"
                                value='Sign Up'
                                onClick={this.props.setLoginStateFalse}
                            />
                        </div>
                    </div>
                </div>

                <div className="the_form">
                    <form action="/login" method="post">
                        <div className="field">
                            <div className="label"><label htmlFor="email">Email:</label></div>
                            <div className="input">
                                <input
                                    type="text"
                                    name="email"
                                    ref="email"
                                    // placeholder="enter your email"
                                    value = {this.state.email}
                                    onChange={this.handleChange}
                                />
                            </div>
                            {/*<div className="errors">{this.state.errors.name}</div>*/}
                        </div>
                        <div className="field">
                            <div className="label"><label htmlFor="password">Password:</label></div>
                            <div className="input">
                                <input
                                    type="password"
                                    name="password"
                                    ref="password"
                                    // placeholder="enter your password"
                                    value = {this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            {/*<div className="errors">{this.state.errors.name}</div>*/}
                        </div>
                        <div className="submit">
                            <input
                                type="submit"
                                value='Log In'
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }

});




