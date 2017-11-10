var ChildHeader = React.createClass({

    getInitialState(){
        return({
            child: this.props.child
        });
    },
    renderAvatar(){
        return(
            <div className="left">
                <div className="child_avatar">
                    <SVG_avatar
                        svg = {this.props.child.svg}
                    />
                </div>
            </div>
        )
    },
    renderMessage(){
        return(

                    this.props.parent_view
                    ?   <div className="right">
                            <div><span>{this.props.child.name}</span> has got {this.state.child.no_points} points!</div>
                        </div>
                    :   <div className="right">
                            <div>Hello <span>{this.props.child.name}</span>, you've got</div>
                            <div className="points">{this.state.child.no_points} points!</div>
                        </div>
        )
    },
    render(){
            // console.log('ChildHeader');
            // console.log('this.props');
            // console.log(this.props);
            // console.log('this.state');
            // console.log(this.state);

        return(
            <div className="child_header">
                {this.renderAvatar()}
                {this.renderMessage()}
            </div>
        )
    },
    componentWillReceiveProps(nextProps){
            // console.log('ChildHeader');
            // console.log('nextProps');
            // console.log(nextProps.child.no_points);
        this.setState({child: nextProps.child});
            // console.log('ChildHeader');
            // console.log(this.state);
    }
});