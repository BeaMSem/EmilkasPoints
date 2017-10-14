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
            points_array: [5,10,20,50]
        })
    },

    render(){
        console.log('FamilyShowParentView- this.props');
        console.log(this.props);
        console.log('FamilyShowParentView- this.state');
        console.log(this.state);

        return(<div>FamilyShowParentView</div>)
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