import React, { Component, PropTypes } from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { Button } from '@trendmicro/react-buttons';
import splitComponentProps from './splitComponentProps';
import Dropdown from './Dropdown';

class DropdownButton extends Component {
    static propTypes = {
        ...Dropdown.propTypes,

        // One of: 'lg', 'md', 'sm', 'xs'
        btnSize: Button.propTypes.btnSize,

        // One of: 'default', 'primary', 'emphasis', 'flat', 'link'
        btnStyle: Button.propTypes.btnStyle,

        // Title content.
        title: PropTypes.node.isRequired,

        // Whether to prevent a caret from being rendered next to the title.
        noCaret: React.PropTypes.bool
    };
    static defaultProps = {
        btnStyle: 'flat'
    };

    shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
    }
    render() {
        const { btnSize, btnStyle, title, children, ...props } = this.props;
        const [dropdownProps, toggleProps] = splitComponentProps(props, Dropdown.ControlledComponent);

        return (
            <Dropdown
                {...dropdownProps}
                btnSize={btnSize}
            >
                <Dropdown.Toggle
                    {...toggleProps}
                    btnStyle={btnStyle}
                >
                    {title}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {children}
                </Dropdown.Menu>
            </Dropdown>
        );
    }
}

export default DropdownButton;
