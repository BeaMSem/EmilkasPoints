var ParentViewSingleChild = React.createClass({

    // {    this.state.open ? 'true' : 'false'  }
    // {    this.setState({  })}
    // function(){console.log('function - '); console.log(); console.log(); return(<div>function</div>)},
    // console.log();
    // console.log();
    // this.props.xxxxxx
    // this.state.xxxxxx

    getInitialState(){
        return({
            child: this.props.child
        })
    },
    renderChildHeader(){
        console.log('renderChildHeader');
        console.log(this.state);
        return(
            <div className="child_header">
                <ChildHeader
                    child = {this.state.child}
                />
            </div>
        )
    },
    updatePoints(points){
        // console.log('CHILD SHOW update points');
        // console.log('no_points');
        // console.log(this.props.child.no_points);

        var updated_no_points = this.state.child.no_points + points;
        console.log(updated_no_points);

        $.ajax({
            url: '/children/'+ this.props.child.id,
            method: 'PUT',
            dataType:'JSON',
            data: {no_points: updated_no_points},
            context: this,

            success: function(child){
                // console.log('Updated points - Child');
                // console.log(child);
                this.setState({
                    child: child
                });
                // console.log('Update points');
                // console.log(this.state);
            }
        })
    },
    renderSinglePointBox(points, index){
        return(
            <div
                key={index}
                onClick={this.updatePoints.bind(this, points)}
            >
                {points}
            </div>
        )
    },
    renderMapPoints(){
        return(
            <div className="extra_points">
                {this.props.points.map(this.renderSinglePointBox)}
            </div>

        )
    },
    renderChildEdit(){
        return(
            <div className="child_edit">
                <div className="transactions">transaction</div>
                <div className="settings">
                    <a href={"../children/"+this.props.child.id+"/edit"}>edit child profile</a>
                </div>
                <div className="child_view">
                    <a href={"../children/"+this.props.child.id}>{this.props.child.name} view</a>

                </div>
            </div>
        )
    },
    render(){
        // console.log('ParentViewSingleChild- this.props');
        // console.log(this.props);
        // console.log('ParentViewSingleChild- this.state');
        // console.log(this.state);
        return(
            <div>
                {this.renderChildHeader()}
                {this.renderMapPoints()}
                {this.renderChildEdit()}
            </div>
        )
    },
});
{/*<%= react_component 'ParentViewSingleChild',         %>*/}