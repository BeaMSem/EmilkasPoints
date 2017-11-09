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
            <div className="form_wrapper">

                <div className="form_header">
                    <div className="top">
                        <div className="title">Sign Up</div>
                    </div>
                    <div className="bottom">
                        <div className="message">Already have an account?</div>
                        <div className="button">
                            <input
                                type="button"
                                value='Log In'
                                onClick={this.props.setLoginStateTrue}
                            />
                        </div>
                    </div>
                </div>
                <div className="the_form">
                    <form action="/families" method="post">
                        <div className="field">
                            <div className="label"><label htmlFor="name">Name:</label></div>
                            <div className="input">
                                <input
                                    type="text"
                                    name="name"
                                    ref="name"
                                    // placeholder="enter your name"
                                    value = {this.state.name}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="errors">{this.state.errors.name}</div>
                        </div>
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
                            <div className="errors">{this.state.errors.name}</div>
                        </div>
                        <div className="field">
                            <div className="label"><label htmlFor="password">Password:</label></div>
                            <div className="input">
                                <input
                                    type="text"
                                    name="password"
                                    ref="password"
                                    // placeholder="enter your password"
                                    value = {this.state.password}
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="errors">{this.state.errors.name}</div>
                        </div>
                        <div className="submit">
                            <input
                                type="submit"
                                value='Sign In'
                            />
                        </div>
                    </form>
                </div>
            </div>
        )
    }

});