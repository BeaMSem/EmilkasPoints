var WeeklyStatsIcon = React.createClass({

    getInitialState(){
        return({
            active: this.props.active
        })
    },
    renderActiveIcon(){
        return(
        <div className="achievement_icon active">
            {this.props.children}
        </div>
    )},
    renderInactiveIcon(){
        return(
            <div className="achievement_icon inactive">
                {this.props.children}
            </div>
        )
    },
    render(){
        // console.log('this.props');
        // console.log(this.props);
        return(
            this.state.active ? this.renderActiveIcon() : this.renderInactiveIcon()
        )
    },
    componentWillReceiveProps(nextProps){
        // console.log('this.state weekly stats');
        // console.log(this.state);
        // console.log('nextProps ICON');
        // console.log(nextProps);
        this.setState({active: nextProps.active})

    }
});