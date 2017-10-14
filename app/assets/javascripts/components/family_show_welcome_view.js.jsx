var FamilyShowWelcomeView = React.createClass({

    // {    this.state.open ? 'true' : 'false'  }
    // {    this.setState({  })}
    // function(){console.log('function - '); console.log(); console.log(); return(<div>function</div>)},
    // console.log();
    // console.log();
    // this.props.xxxxxx
    // this.state.xxxxxx

    getInitialState(){
        return({
            children: this.props.children,
            is_visible_form_container : false
        })
    },
    toggleStateIsVisibleFormContainer(){
        this.setState({
            is_visible_form_container : !this.state.is_visible_form_container
        })
    },
    addToArray(child){
        var array = this.state.children;
        array.push(child);
        this.setState({
            children:array,
            is_visible_form_container : false
        })
    },
    renderWelcomeMessage(){
        return(
            <div className="welcome_message">
                Welcome Message
            </div>
        )
    },
    renderNewChildrenContainer(){
        return(
            <div className="new_children_container">
                {this.props.children.map(function(child){return child.name})}
            </div>
        )
    },
    renderTopContainer(){
        return(
            this.state.children.length
                ? this.renderNewChildrenContainer()
                : this.renderWelcomeMessage()
        )

    },
    renderMiddleContainer(){
        return(
            <div className="children_new_form_container">
                <div className="light_box">light_box</div>
                <div className="the_form">
                    <ChildrenNew
                        activities = {this.props.activities}
                        addToArray = {this.addToArray}
                    />
                </div>
                <div><input type="button" value="cancel" onClick={this.toggleStateIsVisibleFormContainer}/></div>
            </div>
        )
    },
    renderBottomContainer(){
        return(
            <div>
                <input
                    type="button"
                    value="add new child"
                    onClick={this.toggleStateIsVisibleFormContainer}
                />
            </div>
        )
    },
    renderFamilyShowNoChildrenView(){
        return(
            <div className="family_show_no_children_view">
                <div className="top_container">
                    {this.renderTopContainer()}
                </div>
                <div className="middle_container">
                    {   this.state.is_visible_form_container
                        ? this.renderMiddleContainer()
                        : null
                    }
                </div>
                <div className="bottom_container">
                    {   this.state.is_visible_form_container
                        ? null
                        : this.renderBottomContainer()
                    }
                </div>
            </div>
        )
    },
    render(){
        console.log('FamilyShowWelcomeView- this.props');
        console.log(this.props);
        console.log('FamilyShowWelcomeView- this.state');
        console.log(this.state);

        return(this.renderFamilyShowNoChildrenView())
    },

});
{/*<%= react_component 'XXXXXXX',         %>*/}