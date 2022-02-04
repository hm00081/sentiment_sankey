// Types
import { SankeyData } from '../../types/sankey';

// Components
import { Link } from './Link';
import { Node } from './Node';

// Utils
import { calcSankeyNodes, calcSankeyLinks } from '../../utils/';
import styled from 'styled-components';

const BigBox = styled.g`
    // width: 500px;
    background-color: #eee;
`;

// Props
type Props = {
    width: number;
    height: number;
    paddingTop?: number;
    paddingLeft?: number;
    data: SankeyData;
    /** Node width is proportional to the height of the Sankey diagram */
    nodeWidth?: number;
    nodeHeight?: number;
    nodeMargin?: number;
    minLinkBreadth?: number;
    maxLinkBreadth?: number;
};

// Component
export const Sankey = ({ width, height, data, paddingTop = 0, paddingLeft = 0, nodeWidth = 20, nodeHeight = 20, nodeMargin = 5, minLinkBreadth, maxLinkBreadth }: Props) => {
    const nodes = calcSankeyNodes(data, width, height, paddingTop, paddingLeft, nodeWidth, nodeHeight, nodeMargin, maxLinkBreadth);

    const links = calcSankeyLinks(data, height, nodes, nodeWidth, minLinkBreadth, maxLinkBreadth);

    const columns = nodes.map((node) => node.type).filter((type, pos, arr) => arr.indexOf(type) === pos);

    return (
        <svg width={width} height={height}>
            {columns.map((column, i) => (
                <BigBox>
                    <rect x={(width / columns.length) * i} y={0} width={width / columns.length} height={height} fill="#eee" />
                    <text x={(width / columns.length) * i + width / columns.length / 2} y={height * 0.02} textAnchor="middle">
                        {column}
                    </text>
                </BigBox>
            ))}
            {links.map((link, i) => (
                <Link key={`link-${i}`} link={link} />
            ))}
            {nodes.map((node, i) => (
                <Node key={`node-${i}`} node={node} width={width} height={height} />
            ))}
        </svg>
    );
};
