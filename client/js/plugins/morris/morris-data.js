$(function() {

     new Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '0',
            algebra: 2666,
            geometry: null,
            stat: 2647,
            calculus: 2647
        }, {
            period: '1',
            algebra: 2778,
            geometry: 2294,
            stat: 2441,
            calculus: 2647
        }, {
            period: '2',
            algebra: 4912,
            geometry: 1969,
            stat: 2501,
            calculus: 2647
        }, {
            period: '3',
            algebra: 3767,
            geometry: 3597,
            stat: 5689,
            calculus: 2647
        }, {
            period: '4',
            algebra: 6810,
            geometry: 1914,
            stat: 2293,
            calculus: 2647
        }, {
            period: '5',
            algebra: 5670,
            geometry: 4293,
            stat: 1881,
            calculus: 2647
        }, {
            period: '6',
            algebra: 4820,
            geometry: 3795,
            stat: 1588,
            calculus: 2647
        }, {
            period: '7',
            algebra: 15073,
            geometry: 5967,
            stat: 5175,
            calculus: 2647
        }, {
            period: '8',
            algebra: 10687,
            geometry: 4460,
            stat: 2028,
            calculus: 2647
        }, {
            period: '9',
            algebra: 8432,
            geometry: 5713,
            stat: 1791,
            calculus: 2647
        }],
        xkey: 'period',
        ykeys: ['algebra', 'geometry', 'stat', 'calculus'],
        labels: ['algebra', 'geometry', 'stat', 'calculus' ],
        pointSize: 2,
        hideHover: 'auto',
        resize: true,
        lineColors: ['#428bca','#5cb85c','#f0ad4e','#d9534f'],
        xLabelFormat : function(x){return x.getFullYear() - 1900;}
    });


     new Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
