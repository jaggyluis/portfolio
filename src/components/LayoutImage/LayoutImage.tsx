import * as React from 'react';
import { Node } from './../../model/Node';
import './LayoutImage.css';
import { getImageNodeSrc } from '../../utils/node';

export interface LayoutImageProps {
    node: Node;
    contain: boolean;
    width: number;
}
export interface LayoutImageState {
    src: string | null;
}
export class LayoutImage extends React.Component<LayoutImageProps> {

    state : LayoutImageState = {src : null}

    getMobilePath(path: string): string {
        if (path) {
            const paths = path.split(".");
            const placeholder = paths[0] + "_m." + paths[1];
            return placeholder;
        } else {
            return '';
        }
    }

    getIconPath(path: string): string {
        if (path) {
            const paths = path.split(".");
            const placeholder = paths[0] + "_i." + paths[1];
            return placeholder;
        } else {
            return '';
        }
    }

    getPlaceholderPath(path: string): string {
        if (path) {
            const paths = path.split(".");
            const placeholder = paths[0] + "_s." + paths[1];
            return placeholder;
        } else {
            return '';
        }
    }

    getNodeWidth() {
        const width = this.props.width;
        const nodeWidth = this.props.node.x1 - this.props.node.x0;
        return width * nodeWidth;
    }

    shouldComponentUpdate(nxtProps: LayoutImageProps, nxsState : LayoutImageState) {
        return nxtProps.contain !== this.props.contain ||
            nxtProps.width !== this.props.width ||
            nxsState.src !== this.state.src;
    }

    componentDidMount() {

        // let src = getImageNodeSrc(this.props.node);
        // let width = this.props.width;

        // if (!this.props.contain) {
        //     width = this.getNodeWidth();
        // }

        // if (width < 300) {
        //     src = this.getIconPath(src);
        // } else if (width < 600) {
        //     src = this.getMobilePath(src);
        // }

        // const srcImageLoader = new Image();
        // srcImageLoader.src = src;
        // srcImageLoader.onload = () => {
        //     this.setState({ src });
        // };
    }

    getClassName() {
        const className = ['layout-image'];
        if (this.props.contain) className.push('contain');
        return className.join(' ');
    }

    render() {
        return (
            <img
                className={this.getClassName()}
                src={this.state.src || this.getPlaceholderPath(getImageNodeSrc(this.props.node))}
                alt='layout-node'
            />
            // <div
            //     className={this.getClassName()}
            //     style={{ backgroundImage:'url(' + src + ')' }}
            // >
            // </div>
        )
    }
}