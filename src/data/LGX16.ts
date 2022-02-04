import { SankeyData } from '../types/sankey';

export const LGX16: SankeyData = {
    nodes: [
        { name: 'person', type: 'Target', subtype: '0' },
        { name: 'behavior', type: 'Target', subtype: '0' },
        { name: 'psychology', type: 'Target', subtype: '0' },
        { name: 'place', type: 'Target', subtype: '0' },
        { name: 'thought', type: 'Target', subtype: '0' },
        { name: 'service', type: 'Target', subtype: '0' },
        { name: 'product', type: 'Target', subtype: '0' },
        { name: 'event', type: 'Target', subtype: '0' },
        { name: 'simple', type: 'Target', subtype: '1' },
        { name: 'composite', type: 'Target', subtype: '1' },
        { name: 'derived', type: 'Target', subtype: '1' },
        { name: 'opinion', type: 'Target', subtype: '2' },
        { name: 'appraisal', type: 'Target', subtype: '2' },
        { name: 'stance', type: 'Target', subtype: '2' },
        { name: 'attitude', type: 'Target', subtype: '2' },
        { name: 'emotion', type: 'Target', subtype: '2' },
        { name: 'writer', type: 'Target', subtype: '3' },
        { name: 'organization', type: 'Target', subtype: '3' },
        { name: 'key_player', type: 'Target', subtype: '3' },
        { name: 'public', type: 'Target', subtype: '3' },
        { name: 'community', type: 'Target', subtype: '3' },
        { name: 'birth_death', type: 'Target', subtype: '4' },
        { name: 'growth_contraction', type: 'Target', subtype: '4' },
        { name: 'continuity', type: 'Target', subtype: '4' },
        { name: 'accumulation', type: 'Target', subtype: '4' },
        { name: 'fusion_discrete', type: 'Target', subtype: '4' },
        { name: 'stable', type: 'Target', subtype: '4' },
        { name: 'repeat', type: 'Target', subtype: '4' },
        { name: 'peak_valley', type: 'Target', subtype: '4' },
        { name: 'implication', type: 'Target', subtype: '4' },
        { name: 'acceleration', type: 'Target', subtype: '4' },
        { name: 'subjectivity_detection', type: 'Intermediation', subtype: '0' },
        { name: 'emotion_cause_detection', type: 'Intermediation', subtype: '0' },
        { name: 'identifying_the_intent_of_sentiment_information', type: 'Intermediation', subtype: '0' },
        { name: 'detection_of_evidence_event_that_causes_sentiment_patterns', type: 'Intermediation', subtype: '0' },
        { name: 'argument_expression_detection', type: 'Intermediation', subtype: '0' },
        { name: 'aspect_based_sentiment_analysis', type: 'Intermediation', subtype: '0' },
        { name: 'detection_of_fake_or_deceptive_sentiment_information', type: 'Intermediation', subtype: '0' },
        { name: 'hate_speech', type: 'Intermediation', subtype: '0' },
        { name: 'opinion_summarization', type: 'Intermediation', subtype: '1' },
        { name: 'sentiment_information_description_a_multi_aspect', type: 'Intermediation', subtype: '1' },
        { name: 'emotion_detection_and_classification', type: 'Intermediation', subtype: '2' },
        { name: 'polarity_classification', type: 'Intermediation', subtype: '2' },
        { name: 'personalized_sentiment_analysis', type: 'Intermediation', subtype: '2' },
        { name: 'multilingual_and_cross_lingual_sentiment_analysis', type: 'Intermediation', subtype: '2' },
        { name: 'comparsion_of_different_sentiments', type: 'Intermediation', subtype: '3' },
        { name: 'timeline_analysis', type: 'Intermediation', subtype: '4' },
        { name: 'analysis_of_debates_comments_and_argumentation', type: 'Intermediation', subtype: '4' },
        { name: 'finding_significant', type: 'Intermediation', subtype: '4' },
        { name: 'easy_exploration_of_sentiment_information', type: 'Intermediation', subtype: '4' },
        { name: 'celestial', type: 'Representation', subtype: '0' },
        { name: 'human', type: 'Representation', subtype: '0' },
        { name: 'animal', type: 'Representation', subtype: '0' },
        { name: 'plant', type: 'Representation', subtype: '0' },
        { name: 'landscape', type: 'Representation', subtype: '0' },
        { name: 'compound', type: 'Representation', subtype: '0' },
        { name: 'metal', type: 'Representation', subtype: '0' },
        { name: 'nonmetal', type: 'Representation', subtype: '0' },
        { name: 'cell', type: 'Representation', subtype: '0' },
        { name: 'building_structure', type: 'Representation', subtype: '1' },
        { name: 'geometry', type: 'Representation', subtype: '1' },
        { name: 'picture', type: 'Representation', subtype: '1' },
        { name: 'pattern', type: 'Representation', subtype: '1' },
        { name: 'map', type: 'Representation', subtype: '1' },
        { name: 'fiber', type: 'Representation', subtype: '1' },
        { name: 'food', type: 'Representation', subtype: '1' },
        { name: 'toys_instrument', type: 'Representation', subtype: '1' },
        { name: 'software', type: 'Representation', subtype: '1' },
        { name: 'machine', type: 'Representation', subtype: '1' },
        { name: 'letter', type: 'Representation', subtype: '1' },
        { name: 'natural_phenomena', type: 'Representation', subtype: '2' },
        { name: 'machine_software_work', type: 'Representation', subtype: '2' },
        { name: 'behavior', type: 'Representation', subtype: '2' },
        { name: 'disaster', type: 'Representation', subtype: '2' },
        { name: 'space_time_movement', type: 'Representation', subtype: '2' },
        { name: 'creation_and_destruction', type: 'Representation', subtype: '2' },
        { name: 'value', type: 'Vis_var&tech', subtype: '0' },
        { name: 'color', type: 'Vis_var&tech', subtype: '0' },
        { name: 'dimension', type: 'Vis_var&tech', subtype: '0' },
        { name: 'shape', type: 'Vis_var&tech', subtype: '0' },
        { name: 'position', type: 'Vis_var&tech', subtype: '0' },
        { name: 'orientation', type: 'Vis_var&tech', subtype: '0' },
        { name: 'distance', type: 'Vis_var&tech', subtype: '0' },
        { name: '3d_visualization', type: 'Vis_var&tech', subtype: '1' },
        { name: 'node_link_diagram', type: 'Vis_var&tech', subtype: '1' },
        { name: 'bubble_chart', type: 'Vis_var&tech', subtype: '1' },
        { name: 'area_chart', type: 'Vis_var&tech', subtype: '1' },
        { name: 'line_plot', type: 'Vis_var&tech', subtype: '1' },
        { name: 'box_plot', type: 'Vis_var&tech', subtype: '1' },
        { name: 'pie_chart', type: 'Vis_var&tech', subtype: '1' },
        { name: 'radar_chart', type: 'Vis_var&tech', subtype: '1' },
        { name: 'tree_map', type: 'Vis_var&tech', subtype: '1' },
        { name: 'text_cloud', type: 'Vis_var&tech', subtype: '1' },
        { name: 'heatmap', type: 'Vis_var&tech', subtype: '1' },
        { name: 'scatter_plot', type: 'Vis_var&tech', subtype: '1' },
        { name: 'mds_map', type: 'Vis_var&tech', subtype: '1' },
        { name: 'parallel_coordinate', type: 'Vis_var&tech', subtype: '1' },
        { name: 'pixel_based_plot', type: 'Vis_var&tech', subtype: '1' },
        { name: 'time_oriented_visualization', type: 'Vis_var&tech', subtype: '1' },
        { name: 'spatial_based_visualization', type: 'Vis_var&tech', subtype: '1' },
    ],

    links: [
        {
            source: 4,
            target: 45,
            value: 1,
        }, // a[0]
        {
            source: 5,
            target: 40,
            value: 1,
        }, // a[1]
        {
            source: 40,
            target: 59,
            value: 1,
        }, // a[2]
        {
            source: 59,
            target: 80,
            value: 1,
        }, // a[3]
        {
            source: 17,
            target: 45,
            value: 1,
        }, // a[4]
        {
            source: 19,
            target: 45,
            value: 1,
        }, // a[5]
        {
            source: 45,
            target: 60,
            value: 1,
        }, // a[6]
        {
            source: 60,
            target: 77,
            value: 1,
        }, // a[21]
        {
            source: 45,
            target: 55,
            value: 1,
        }, // a[7]
        {
            source: 45,
            target: 68,
            value: 1,
        }, // a[8]
        {
            source: 55,
            target: 77,
            value: 1,
        }, // a[9]
        {
            source: 77,
            target: 77,
            value: 1,
        }, // a[9]
        {
            source: 55,
            target: 78,
            value: 1,
        }, // a[10]
        {
            source: 78,
            target: 78,
            value: 1,
        }, // a[9]
        {
            source: 55,
            target: 80,
            value: 1,
        }, // a[11]
        {
            source: 80,
            target: 80,
            value: 1,
        }, // a[9]
        {
            source: 68,
            target: 77,
            value: 1,
        }, // a[12]
        {
            source: 68,
            target: 78,
            value: 1,
        }, // a[13]
        {
            source: 68,
            target: 80,
            value: 1,
        }, // a[14]
        {
            source: 11,
            target: 33,
            value: 1,
        }, // a[15]
        {
            source: 12,
            target: 33,
            value: 1,
        }, // a[16]
        {
            source: 33,
            target: 59,
            value: 1,
        }, // a[17]
        {
            source: 59,
            target: 76,
            value: 1,
        }, // a[18]
        {
            source: 76,
            target: 76,
            value: 1,
        }, // a[9]
        {
            source: 45,
            target: 70,
            value: 1,
        }, // a[19]
        {
            source: 70,
            target: 85,
            value: 1,
        },
        {
            source: 85,
            target: 85,
            value: 1,
        }, // a[9]
    ],
};
