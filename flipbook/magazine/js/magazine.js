// Responsive scaling function for Turn.js magazine canvas
function resizeFlipbook() {
    var canvas = document.getElementById('canvas');
    if (!canvas) return;
    
    var containerWidth = window.innerWidth;
    var containerHeight = window.innerHeight;
    
    // Default turn.js magazine dimensions
    var originalWidth = 1152;
    var originalHeight = 752;
    
    var scaleX = containerWidth / originalWidth;
    var scaleY = containerHeight / originalHeight;
    var scale = Math.min(scaleX, scaleY, 0.95); // leave a small margin
    
    canvas.style.transform = 'scale(' + scale + ')';
    canvas.style.transformOrigin = 'center center';
    
    var parent = canvas.parentElement;
    if (parent) {
        parent.style.height = (originalHeight * scale) + 'px';
        parent.style.display = 'flex';
        parent.style.justifyContent = 'center';
        parent.style.alignItems = 'center';
        parent.style.overflow = 'hidden';
    }
}

window.addEventListener('resize', resizeFlipbook);
window.addEventListener('load', function() {
    setTimeout(resizeFlipbook, 200);
});