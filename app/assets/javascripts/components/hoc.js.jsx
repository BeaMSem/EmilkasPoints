var Hoc = React.createClass({

    // {    this.state.open ? 'true' : 'false'  }
    // {    this.setState({  })}
    // function(){console.log('function - '); console.log(); console.log(); return(<div>function</div>)},
    // console.log();
    // console.log();
    // this.props.xxxxxx
    // this.state.xxxxxx

    getInitialState(){
        return({ null })
    },

    render(){
        console.log('hoc- this.props');
        console.log(this.props);
        console.log('hoc- this.state');
        console.log(this.state);

        return(<div>hoc</div>)
    },

});
{/*<%= react_component 'hoc',         %>*/}