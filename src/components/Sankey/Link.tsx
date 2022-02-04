// Types
import { SankeyLinkExtended, SankeyNodeExtended } from '../../types/sankey';

// Props
type Props = {
    link: SankeyLinkExtended;
};

// Component
export const Link = ({ link }: Props) => {
    const gradId = `grad-${link.source}-${link.target}`;
    return (
        <>
            <linearGradient id={gradId}>
                <stop offset="0%" stopColor={link.sourceNode.color} />
                <stop offset="100%" stopColor={link.targetNode.color} />
            </linearGradient>
            <path d={link.path} stroke={`url(#${gradId})`} strokeWidth={link.breadth} fill="none">
                <title>{`${link.sourceNode.name} to ${link.targetNode.name}: ${link.value}`}</title>
            </path>
        </>
    );
};
