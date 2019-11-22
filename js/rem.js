(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var width = docEl.clientWidth;
      width=width<320?320:width;
      width=width>640?640:width;
      width&&(docEl.style.fontSize= 100 * (width / 640) + 'px')
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);