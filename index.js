(() => {
    let nodes = {
        1: 'Mul on ainult 3 click handlerit',
        2: 'Ma tahan ilusaid selektoreid',
        3: 'Mul on vaja',
        4: 'jQuery',
        5: 'Vanilla JS',
        6: 'Sõltumatud väikesed komponendid',
        7: 'Lazy loading',
        8: 'Require.js',
        9: 'Projekt on mahult',
        10: 'Ma seon datat',
        11: 'Keegi peab kunagi midagi muutma',
        12: 'Digest cycle on',
        13: 'React + Redux',
        14: 'Angular',
        15: 'Vue.js',
        16: 'Ma tahan olla',
        17: 'Knockout.js',
        18: 'moment.js',
        19: 'localForage',
        20: 'Mõistlik browser support',
        21: 'native Promise',
        22: 'Töötav error handling',
        23: 'jQuery Defer',
        24: 'q',
        25: 'Ainult tavalisi & semitavalisi',
        26: 'Plotly',
        27: 'On keegi seda varem teinud',
        28: 'Graafid?',
        29: 'D3.js',
        30: 'Ära valeta',
        31: 'Force-directed layout',
        32: 'Vivagraph',
    	33: 'Viz.js'
    };
    let edges = [
        [1, 3, 'Ei'],
        [1, 2, 'Jah'],
        [2, 4, 'Jah'],
        [2, 5, 'Ei'],
        [3, 6, 'Modulaarsust'],
        [6, 7, 'Jah'],
        [6, 9, 'Ei'],
        [7, 8, 'Jah'],
        [7, 5, 'Ei'],
        [9, 11, 'Suur'],
        [9, 10, 'Väike'],
        [10, 15, 'Mitu korda'],
        [10, 16, 'Ühe korra'],
        [11, 12, 'Jah'],
        [11, 13, 'Ei'],
        [12, 14, 'Ok'],
        [12, 15, 'Mis?'],
        [16, 15, 'Uuskool'],
        [16, 17, 'Vanakool'],
        [3, 18, 'Datetime calc'],
        [3, 19, 'Andmeid hoida'],
        [3, 20, 'Async'],
        [20, 21, 'Ei'],
        [20, 22, 'Jah'],
        [22, 23, 'Ei'],
        [22, 24, 'Jah'],
        [3, 25, 'Graafikuid'],
        [25, 26, 'Jah'],
        [25, 27, 'Ei'],
        [27, 28, 'Jah'],
        [28, 29, 'Ei'],
        [27, 30, 'Ei'],
        [30, 29, 'Tegelt ka'],
        [30, 29, 'Vabandust'],
        [28, 31, 'Jah'],
        [31, 32, 'Jah'],
        [31, 33, 'Ei']
    ];
    let fontFamily = 'helvetica';
    let background = '#FFFFFF';

    let arrowColor = '#464E54';
    let arrowText = '#464E54';

    let nodeColor = '#E3EAEF';
    let nodeText = '#464E54';

    let leafColor = '#A5E4C2';
    let leafText = '#286F49';

    let digraph = [];
    digraph.push(
    	'digraph g {',
    		'forcelabels=true;',
    		'graph [fontname = "', fontFamily, '", bgcolor="', background, '"];',
    		'node [shape="box", fontname = "', fontFamily, '", style="filled"];',
 			'edge [fontname = "', fontFamily, '"];'
    );
    edges.forEach(edge => {
        digraph.push(
        	'"', edge[0], '" [label="', nodes[edge[0]],'", fillcolor="', nodeColor, '", color="', nodeColor,'", fontcolor="', nodeText, '"];',
        	'"', edge[1], '" [label="', nodes[edge[1]],'", fillcolor="', leafColor, '", color="', leafColor, '", fontcolor="', leafText, '"];',
            '"', edge[0], '"',
            ' -> ',
            '"', edge[1], '"',
            '[label = " ', edge[2].toLowerCase(), ' ", style="filled", fillcolor="', arrowColor, '", color="', arrowColor, '", fontcolor="', arrowText, '"];'
        );
    });
    digraph.push('}');
    let result = Viz(digraph.join(''), {
        engine: 'dot'
    });
    document.body.appendChild(document.createElement('main')).innerHTML = result;
})();























