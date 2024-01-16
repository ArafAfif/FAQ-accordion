function plusContain(pId, imgId){
    let paragraph = document.getElementById(pId);
    paragraph.classList.toggle('paragraph');
    
    let image = document.getElementById(imgId);
    let currentSrc = image.getAttribute('src');
    
    // Check the current source and toggle to the other image
    let toggleImg = currentSrc === 'images/icon-plus.svg' ? image.setAttribute('src', 'images/icon-minus.svg') : image.setAttribute('src', 'images/icon-plus.svg');
    return toggleImg;
}
document.getElementById('btn1').addEventListener('click', function(){
    plusContain('p1', 'btn1_img');
});
document.getElementById('btn2').addEventListener('click', function(){
    plusContain('p2', 'btn2_img');
});
document.getElementById('btn3').addEventListener('click', function(){
    plusContain('p3', 'btn3_img');
});
document.getElementById('btn4').addEventListener('click', function(){
    plusContain('p4', 'btn4_img');
});