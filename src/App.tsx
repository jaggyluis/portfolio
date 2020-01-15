import React from 'react';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { treemap } from './utils/treemap';
import { NodeData } from './model/NodeData';

function debounce(func: any) {
    var timer: any;
    return function (event: any) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(func, 500, event);
    };
}

export interface AppProps {
    data : NodeData;
}
class App extends React.Component<AppProps> {

    state={
        selected : false,
    }

    onNodeClick() {
        this.setState({selected : true});
    }

    render() {

        const node = treemap(this.props.data, window.innerWidth, window.innerHeight);
        node.data.label = "Luis Jaggy";

        return (
            <div
                className="App"
                onClick={this.onNodeClick.bind(this)}
                style={{
                    height: '100%',
                    width: '95%',
                    position: 'absolute',
                    marginLeft : '2.5%'
                }}
            >
                <Layout
                    node={node}
                    nodeState={{selected : this.state.selected }}
                    parent={null}
                    parentState={null}
                />
            </div>
        );
    }

}

export default App;
