const hbs= require('hbs');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/data.json', 'utf-8'));

hbs.registerHelper('getProduct', function(){
    var producto=" ";
    obj.forEach(element => {
        producto += '<div><p class="up" align="center">'+element.title +'</p><img class="img1" src="'+element.imag+'"><p class="up2" align="center">'+ element.description+'</p></div>';
    });
    return new hbs.SafeString(producto);
    
});


        