var wms_layers = [];

var lyr_Ortho20cm_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wxs.ign.fr/CLEF/geoportail/r/wms",
    attributions: ' ',
                              params: {
                                "LAYERS": "HR.ORTHOIMAGERY.ORTHOPHOTOS",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Ortho 20 cm",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Ortho20cm_0, 0]);
var format_pt_1 = new ol.format.GeoJSON();
var features_pt_1 = format_pt_1.readFeatures(json_pt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pt_1.addFeatures(features_pt_1);
var lyr_pt_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pt_1, 
                style: style_pt_1,
                popuplayertitle: "pt",
                interactive: true,
    title: 'pt<br />\
    <img src="styles/legend/pt_1_0.png" /> julien Cyril<br />\
    <img src="styles/legend/pt_1_1.png" /> mazan<br />\
    <img src="styles/legend/pt_1_2.png" /> aillaud<br />\
    <img src="styles/legend/pt_1_3.png" /> lazarin<br />\
    <img src="styles/legend/pt_1_4.png" /> moll<br />\
    <img src="styles/legend/pt_1_5.png" /> estienne<br />\
    <img src="styles/legend/pt_1_6.png" /> bouvier<br />\
    <img src="styles/legend/pt_1_7.png" /> taxil<br />\
    <img src="styles/legend/pt_1_8.png" /> magaud<br />\
    <img src="styles/legend/pt_1_9.png" /> denier<br />\
    <img src="styles/legend/pt_1_10.png" /> mathieu<br />\
    <img src="styles/legend/pt_1_11.png" /> krumbholz<br />\
    <img src="styles/legend/pt_1_12.png" /> penaud<br />\
    <img src="styles/legend/pt_1_13.png" /> graviere<br />\
    <img src="styles/legend/pt_1_14.png" /> cheron<br />\
    <img src="styles/legend/pt_1_15.png" /> jezequel<br />\
    <img src="styles/legend/pt_1_16.png" /> bravay<br />\
    <img src="styles/legend/pt_1_17.png" /> vincent<br />\
    <img src="styles/legend/pt_1_18.png" /> trabuc<br />\
    <img src="styles/legend/pt_1_19.png" /> brochier<br />\
    <img src="styles/legend/pt_1_20.png" /> besset<br />'
        });
var format_try_2 = new ol.format.GeoJSON();
var features_try_2 = format_try_2.readFeatures(json_try_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_try_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_try_2.addFeatures(features_try_2);
var lyr_try_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_try_2, 
                style: style_try_2,
                popuplayertitle: "try",
                interactive: true,
                    title: '<img src="styles/legend/try_2.png" /> try'
                });

lyr_Ortho20cm_0.setVisible(true);lyr_pt_1.setVisible(true);lyr_try_2.setVisible(true);
var layersList = [lyr_Ortho20cm_0,lyr_pt_1,lyr_try_2];
lyr_pt_1.set('fieldAliases', {'id': 'id', 'url': 'url', 'Nom': 'Nom', });
lyr_try_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'paa': 'paa', });
lyr_pt_1.set('fieldImages', {'id': 'TextEdit', 'url': 'ExternalResource', 'Nom': 'TextEdit', });
lyr_try_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'paa': 'TextEdit', });
lyr_pt_1.set('fieldLabels', {'id': 'hidden field', 'url': 'no label', 'Nom': 'no label', });
lyr_try_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'paa': 'no label', });
lyr_try_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});