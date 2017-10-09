var SVG_activity = React.createClass({
    render() {
        var svg = null;
        switch(this.props.svg) {
            case 'SVG0001':
                svg = <SVG0001/>;
                break;
            case 'SVG0002':
                svg = <SVG0002/>;
                break;
            case 'SVG0003':
                svg = <SVG0003/>;
                break;
            case 'SVG0004':
                svg = <SVG0004/>;
                break;
            case 'SVG0005':
                svg = <SVG0005/>;
                break;
            case 'SVG0006':
                svg = <SVG0006/>;
                break;
            case 'SVG0007':
                svg = <SVG0007/>;
                break;
            case 'SVG0008':
                svg = <SVG0008/>;
                break;
            default:
                svg = null
        }
        return (svg)
    }

});