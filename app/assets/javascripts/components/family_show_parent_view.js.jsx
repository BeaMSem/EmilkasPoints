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
            points: [5,10,20,50]
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
            this.renderChildren()
        )
    },

});
{/*<%= react_component 'FamilyShowParentView',         %>*/}

