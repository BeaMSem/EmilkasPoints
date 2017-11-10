var ChildAvatar = React.createClass({

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
        console.log('ChildAvatar- this.props');
        console.log(this.props);
        console.log('ChildAvatar- this.state');
        console.log(this.state);

        return(
            <div className="child_avatar">
                <div className="svg">
                    <SVG_avatar
                        svg = {this.props.svg}
                    />
                </div>
            </div>
        )
    },

});
{/*<%= react_component 'XXXXXXX',         %>*/}