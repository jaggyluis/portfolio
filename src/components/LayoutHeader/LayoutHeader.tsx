import * as React from 'react';
import { LayoutProps } from '../Layout/Layout';
import { LayoutHeaderLabel } from '../LayoutHeaderLabel/LayoutHeaderLabel';
import { isLayoutMobile } from './../../utils/layout';
import './LayoutHeader.css';

export interface LayoutHeaderProps extends LayoutProps {}
export interface LayoutHeaderState {
    transitionDuration: number;
}
export class LayoutHeader extends React.Component<LayoutHeaderProps> {

    shouldComponentUpdate(nxtProps: LayoutHeaderProps) { // NOTE - or pureComponent
        if (this.props.width !== nxtProps.width) return true;
        if (this.props.nodeState.selected !== nxtProps.nodeState.selected) return true;
        return false;
    }

    getSiblingNodes() {
        return (
            this.props.nodeSiblings.map(sibling => {
                if (sibling.data.id !== this.props.node.data.id) {
                    return (
                        <LayoutHeaderLabel
                            key={sibling.data.id + '-header-label'}
                            node={sibling}
                            depth={this.props.nodeDepth}
                            selected={false}
                            small={isLayoutMobile(this.props)}
                            onNodeClick={this.props.onNodeClick}
                        />
                    )
                } else {
                    return undefined
                }
            })
        )
    }

    getPrimaryNode() {
        return (
            <LayoutHeaderLabel
                key={this.props.node.data.id + '-header-label'}
                node={this.props.node}
                depth={this.props.nodeDepth}
                selected={true}
                small={isLayoutMobile(this.props)}
                onNodeClick={this.props.onNodeClick}
            />
        )
    }

    getClassName() {
        const className = ['layout-header'];
        if (this.props.nodeState.selected) className.push('selected');
        return className.join(' ');
    }

    render() {
        return (
            <div className={this.getClassName()}>
                {this.getPrimaryNode()}
                {this.getSiblingNodes()}
            </div>
        )
    }
}