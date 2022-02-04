// Types
import { SankeyNodeExtended } from '../../types/sankey';
import styled from 'styled-components';

const color = 'red';

const Rect = styled.rect``;

const NodeName = styled.text`
    margin-top: 12px;
`;

const NodePos = styled.g`
    position: absolute;
    margin-top: 102px;
`;

// Props
type Props = {
    node: SankeyNodeExtended;
    width: number;
    height: number;
};

// Component
export const Node = ({ node, width, height }: Props) => {
    const endNode = node.x + node.width > width - node.width;

    const size = width < height ? width : height;

    // Calculate Text Properties
    const textX = !endNode ? node.x + node.width : node.x;
    const textAnchor = !endNode ? 'start' : 'end';
    const textMargin = !endNode ? 4 : -4;
    const textTitleSize = (size / 100) * 1.35;
    const textValueSize = (size / 100) * 1;
    const textXPosition = textX + textMargin;
    const textYPosition = node.y + node.height / 2;
    console.log(node.type);
    if (node.type === 'Vis_var&tech' && node.subtype === '1') {
    }
    return (
        <NodePos>
            <Rect x={node.x} y={node.y} width={node.width} height={node.height} fill={node.color}>
                <title>{`${node.name}: ${node.value}`}</title>
            </Rect>

            <g transform={`translate(${textXPosition} ${textYPosition})`}>
                <NodeName style={{ fontSize: textTitleSize, fontWeight: 550 }} textAnchor={textAnchor}>
                    {node.name}
                </NodeName>
                {/* <text y={textValueSize} style={{ fontSize: textValueSize }} textAnchor={textAnchor}>
                    {node.value}
                </text> */}
            </g>
        </NodePos>
    );
};
