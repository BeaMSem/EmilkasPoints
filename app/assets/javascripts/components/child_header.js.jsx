var ChildHeader = React.createClass({

    getInitialState(){
        return({
            child: this.props.child
        });
    },

    renderTitle(){
        return(
            <div className="title">
                {
                    this.props.parent_view
                    ? <div><span>{this.props.child.name}</span> has got </div>
                    : <div>Hello <span>{this.props.child.name}</span>, you've got</div>
                }

            </div>
        )
    },
    render(){
            console.log('ChildHeader');
            console.log('this.props');
            console.log(this.props);
            console.log('this.state');
            console.log(this.state);

        return(
            <div className="child_header">
                <div className="left">
                    <div className="avatar">
                        <SVG_avatar
                            svg = {this.props.child.svg}
                        />
                    </div>
                </div>
                <div className="right">
                    {this.renderTitle()}
                    <div className="points">{this.state.child.no_points} points!</div>
                </div>
            </div>
        )
    },
    componentWillReceiveProps(nextProps){
            console.log('ChildHeader');
            console.log('nextProps');
            console.log(nextProps.child.no_points);
        this.setState({child: nextProps.child});
            console.log('ChildHeader');
            console.log(this.state);
    }
});