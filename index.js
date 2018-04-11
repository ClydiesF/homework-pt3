addClass('#animal', 'active');


function show(pic) {
    if(pic =='animal'){
addClass('#animal', 'active');
removeClass('#vegetable', 'active');
removeClass('#mineral', 'active');
} else if(pic =='vegetable'){
    addClass('#vegetable', 'active');
    removeClass('#animal', 'active');
    removeClass('#mineral', 'active');
    
} else if (pic=='mineral'){
    addClass('#mineral', 'active');
    removeClass('#animal', 'active');
    removeClass('#vegetable', 'active');
    
}
}