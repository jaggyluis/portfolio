
export type NodeType = 'dir' | 'data';
export interface NodeData {
    label : string;
    type : NodeType;
    src?: string;
    content?: string[];
    children? : NodeData[];
}

export interface NodeState {
    selected: boolean;
}