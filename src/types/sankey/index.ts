export type SankeyNodeMinimal = Record<string, unknown>;
export type SankeyLinkMinimal = {
    source: number;
    target: number;
    value: number;
};

export type SankeyNode = SankeyNodeMinimal & {
    name?: string;
    type?: string | number;
    origin?: string;
    subtype?: string | number;
    description?: string;
    color?: string;
};

export type SankeyLink = SankeyLinkMinimal & {
    source: number;
    target: number;
    value: number;
};

export type SankeyNodeExtended = SankeyNode & {
    index: number;
    input: number;
    output: number;
    value: number;
    x: number;
    y: number;
    width: number;
    height: number;
};

export type SankeyLinkExtended = SankeyLink & {
    sourceNode: SankeyNodeExtended;
    targetNode: SankeyNodeExtended;
    breadth: number;
    path: string;
};

export interface SankeyData {
    nodes: SankeyNode[];
    links: SankeyLink[];
}
