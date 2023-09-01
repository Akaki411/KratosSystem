import React, {Component} from 'react';

class NavHeader extends Component
{
    constructor(props)
    {
        super(props)
    }

    state = {
        active: Object.keys(this.props.items)[0],
        cursorOffset: 0,
        cursorSize: 9 * this.props.items[Object.keys(this.props.items)[0]].title.length
    }

    Choice = (choice) =>
    {
        this.setState({
            active: choice.key,
            cursorOffset: choice.offset,
            cursorSize: 9 * this.props.items[choice.key].title.length
        })
        this.props.onChoice(choice.key)
    }

    render()
    {
        let offset = 0
        return (
            <div className="header">
                <div className="header-title">
                    <div className="header-title_info">
                        <div style={{width: '20px'}}/>
                        {this.props.items[this.state.active].icon}
                        <div style={{width: '20px'}}/>
                        {this.props.items[this.state.active].title}
                    </div>
                </div>
                <div className="header-scroll">
                    <div className="square20px"/>
                    {
                        Object.keys(this.props.items).map((key, index) => {
                            offset += (this.props.items[key].title.length * 10) + 20
                            return <HeaderBtn key={key} title={this.props.items[key].title} isActive={key === this.state.active} index={index} choice={key} offset={offset - ((this.props.items[key].title.length * 10) + 20)} onClick={this.Choice}/>
                        })
                    }
                    <div className="square20px"/>
                    <div className="header-scroll_cursor" style={{transform: `translateX(${this.state.cursorOffset}px)`, width: `${this.state.cursorSize}px`}}/>
                </div>
            </div>
        )
    }
}

const HeaderBtn = (props) =>
{
    return (
        <div className="header-scroll_block" style={{color: props.isActive ? "white" : "", width: `${(props.title.length * 10) + 20}px`}} onClick={() => {props.onClick({offset: props.offset, key: props.choice, index: props.index})}}>
            {props.title}
        </div>
    )
}

export default NavHeader;