function view(n) {
    style = document.getElementById(n).style;
    style.display = (style.display == 'block') ? 'none' : 'block';

    if (style.display == 'block') {
      style.color == 'chartreuse'
    }
}
