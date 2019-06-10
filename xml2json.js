/
// This Program Changes an XML file to Json

function xmlToJson(xml){
    
    //Creating the returning object
    
    var obj = {};
    
    if(xml.nodeType==1){ //element
        //do attribute
        if(xml.attributes.length>0){
            obj["@attributes"]={};
                
                for(var j=0;j<xml.aatributes.length;j++){
                    var attribute = xml.attributes.item(j); 
                    obj["@attributes"][attribute.nodeName]=attribute.nodeValue;
                    
                } //close for
        } //close if
        
    } else if (xml.nodeType==3){
                obj.nodeValue;
    }
    
    //do children
    //if just one text node Inside
    
    if(xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
            obj = xml.childNodes[0].nodeValue;
    }
    
    else if(xml.hasChildNodes()){
            for(var i = 0; i < xml.childNodes.length; i++){
                    var item = xml.chilNodes.item(i);
                    var nodeName = item.nodeName;
                if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(xmlToJson(item));
            }
    }
    
    }
    
    return obj;
    
}
