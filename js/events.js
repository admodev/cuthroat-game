document.onkeydown = detectKey;

function detectKey(e) {

    var posLeft = document.getElementById('player').offsetLeft;
    var posTop = document.getElementById('player').offsetTop;

    e = e || window.event;

    if (e.keyCode == '87') {
        // up arrow (W)
        document.getElementById('player').style.marginTop  = (posTop-58)+'px';
    }
    else if (e.keyCode == '83') {
        // down arrow (S)
        document.getElementById('player').style.marginTop  = (posTop+58)+'px';
    }
    else if (e.keyCode == '65') {
        // left arrow (A)
        document.getElementById('player').style.marginLeft  = (posLeft-58)+'px';
    }
    else if (e.keyCode == '68') {
        // right arrow (D)
        document.getElementById('player').style.marginLeft  = (posLeft+58)+'px';
    }

}
