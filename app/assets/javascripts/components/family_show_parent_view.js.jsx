var FamilyShowParentView = React.createClass({

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
            points: [5,10,20,50],
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
    renderSingleChild(child, index){
        return(
            <ParentViewSingleChild
                key     = {index}
                child   = {child}
                points  = {this.state.points}
            />
        )
    },
    renderChildren(){
        return(
        <div>
        {this.state.children.map(this.renderSingleChild)}
        </div>
        )
    },
    render(){
        // console.log('FamilyShowParentView- this.props');
        // console.log(this.props);
        // console.log('FamilyShowParentView- this.state');
        // console.log(this.state);

        return(
            <div>
                {this.renderChildren()}
                <div className="children_new_form_container">
                    <div className="light_box">light_box</div>
                    <div className="the_form">
                        {
                            this.state.is_visible_form_container
                            ?<ChildrenNew
                                activities = {this.props.activities}
                                rewards = {this.props.rewards}
                                addToArray = {this.addToArray}
                            />
                            :false
                        }

                    </div>
                    <div><input type="button" value="cancel" onClick={this.toggleStateIsVisibleFormContainer}/></div>
                </div>

            </div>



        )
    },

});
{/*<%= react_component 'FamilyShowParentView',         %>*/}

