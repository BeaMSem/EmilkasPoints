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
    renderSinglePointBox(points, index){
        return(
            <div key={index}>
                {points}
            </div>
        )
    },
    renderMapPoints(){
        return(
            <div>
                {this.state.points.map(this.renderSinglePointBox)}
            </div>

        )
    },
    renderSingleComponent(child, index){
        return(
            <div key = {index}>
                <div className="child_header">
                    <ChildHeader
                        child={child}
                    />
                </div>
                <div className="extra_points">{this.renderMapPoints()}</div>
                <div className="child_edit">
                    <div className="transactions">transaction</div>
                    <div className="settings">
                        <a href={"../children/"+child.id+"/edit"}>edit child profile</a>
                    </div>
                    <div className="child_view">
                        <a href={"../children/"+child.id}>{child.name} view</a>

                    </div>
                </div>
            </div>
        )
    },
    renderMapSingleComponent(){
        return(
            <div>
                {this.state.children.map(this.renderSingleComponent)}
            </div>
        )
    },
    render(){
        console.log('FamilyShowParentView- this.props');
        console.log(this.props);
        console.log('FamilyShowParentView- this.state');
        console.log(this.state);

        return(
            <div>
                {this.renderMapSingleComponent()}
            </div>
        )
    },

});
{/*<%= react_component 'FamilyShowParentView',         %>*/}

// updatePoints(no_points){
//     console.log('CHILD SHOW update points');
//     console.log('no_points');
//     console.log(no_points);
//
//     var updated_no_points = this.state.no_points + no_points;
//
//     $.ajax({
//         url: '/children/'+ this.props.data.child.id,
//         method: 'PUT',
//         dataType:'JSON',
//         data: {no_points: updated_no_points},
//         context: this,
//
//         success: function(child){
//             console.log('update points');
//             console.log(child);
//             this.setState({
//                 no_points: child.no_points
//             })
//         }
//     })
// },