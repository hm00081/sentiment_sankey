// Libraries
import { useMeasure } from 'react-use';

// Custom Components
import { Sankey } from './components/Sankey';

// Global Styles
// import 'normalize.css';
import './styles.css';

// Data
import { LLN14 as rawData } from './data/LLN14';
import { color } from 'd3-color';

const data = {
    nodes: rawData.nodes.map((node) => {
        let color: string = '';
        // Random color for each node
        // const color = `hsl(${1 + Math.random() * 359}, 30%, 60%)`;
        if (node.type === 'Target' && node.subtype === '0') {
            color = `hsl(318, 87%, 32%)`;
        } else if (node.type === 'Target' && node.subtype === '1') {
            color = `hsl(327, 85%, 41%)`;
        } else if (node.type === 'Target' && node.subtype === '2') {
            color = `hsl(343, 100%, 59%)`;
        } else if (node.type === 'Target' && node.subtype === '3') {
            color = `hsl(11, 100%, 55%)`;
        } else if (node.type === 'Target' && node.subtype === '4') {
            color = `hsl(27, 100%, 69%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '0') {
            color = `hsl(46, 100%, 60%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '1') {
            color = `hsl(55, 90%, 55%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '2') {
            color = `hsl(75, 77%, 42%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '3') {
            color = `hsl(80, 45%, 41%)`;
        } else if (node.type === 'Intermediation' && node.subtype === '4') {
            color = `hsl(87, 50%, 61%)`;
        } else if (node.type === 'Representation' && node.subtype === '0') {
            color = `hsl(100, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '1') {
            color = `hsl(170, 100%, 40%)`;
        } else if (node.type === 'Representation' && node.subtype === '2') {
            color = `hsl(210, 100%, 40%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '0') {
            color = `hsl(250, 90%, 45%)`;
        } else if (node.type === 'Vis_var&tech' && node.subtype === '1') {
            color = `hsl(280, 80%, 60%)`;
        }

        return { ...node, color };
    }),
    links: rawData.links,
};

// Component
export default function App() {
    const [ref, { width, height }] = useMeasure<HTMLDivElement>();

    return (
        <div className="App">
            <div className="container" ref={ref}>
                <Sankey width={width} height={height} data={data} paddingTop={4} nodeWidth={3} nodeHeight={2} nodeMargin={1} minLinkBreadth={0.1} maxLinkBreadth={2} />
            </div>
        </div>
    );
}
