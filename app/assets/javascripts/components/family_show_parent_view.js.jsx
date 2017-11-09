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
            is_visible_form_container : false,
            active_index: 0
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

    handleOnClick(index){
        console.log('click');
        console.log(index);
        this.setState({
            active_index: index+1
        })
    },
    setActiveIndexNull(){
        console.log('active index null');
        this.setState({
            active_index: 0
        })
    },
    renderSingleChildIndicator(child, index){
        return(
            <div key = {index} onClick={this.handleOnClick.bind(this, index)}>
                <ChildHeader
                    child   = {child}
                    points  = {this.state.points}
                    parent_view = {true}
                />
            </div>

        )
    },
    renderWelcomeMessage(){
        return(
            <div>Welcome message</div>
        )
    },
    renderChildrenIndicators(){
        return(
        <div>
            {this.state.children.map(this.renderSingleChildIndicator)}
        </div>
        )
    },
    renderSingleChild(){
        return(
            <ParentViewSingleChild
                child   = {this.props.children[this.state.active_index - 1]}
                points  = {this.state.points}
                setActiveIndexNull = {this.setActiveIndexNull}
            />
        )
    },
    render(){
        // console.log('FamilyShowParentView- this.props');
        // console.log(this.props);
        // console.log('FamilyShowParentView- this.state');
        // console.log(this.state);

        return(
            <div>
                {
                    this.state.active_index === 0
                        ? this.state.children.length === 0 ? this.renderWelcomeMessage() : this.renderChildrenIndicators()
                        : this.renderSingleChild()
                }

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
                    <div><input type="button" value="Add New Child" onClick={this.toggleStateIsVisibleFormContainer}/></div>
                </div>

            </div>



        )
    },

});
{/*<%= react_component 'FamilyShowParentView',         %>*/}

