$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            algebra: 2666,
            geometry: null,
            stat: 2647,
            calculus: 2647
        }, {
            period: '2011',
            algebra: 2778,
            geometry: 2294,
            stat: 2441,
            calculus: 2647
        }, {
            period: '2012',
            algebra: 4912,
            geometry: 1969,
            stat: 2501,
            calculus: 2647
        }, {
            period: '2013',
            algebra: 3767,
            geometry: 3597,
            stat: 5689,
            calculus: 2647
        }, {
            period: '2014',
            algebra: 6810,
            geometry: 1914,
            stat: 2293,
            calculus: 2647
        }, {
            period: '2015',
            algebra: 5670,
            geometry: 4293,
            stat: 1881,
            calculus: 2647
        }, {
            period: '2016',
            algebra: 4820,
            geometry: 3795,
            stat: 1588,
            calculus: 2647
        }, {
            period: '2017',
            algebra: 15073,
            geometry: 5967,
            stat: 5175,
            calculus: 2647
        }, {
            period: '2018',
            algebra: 10687,
            geometry: 4460,
            stat: 2028,
            calculus: 2647
        }, {
            period: '2019',
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
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
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
