(function() {
  // lien global
  var evtFirst_Link = document.getElementById('evtFirst_Link');
  try {

    if (evtFirst_Link) {
      evtFirst_Link.style.cursor = 'pointer';

      var evtFirst_Link_tab = evtFirst_Link.children,
        evtFirst_Link_tabLength = evtFirst_Link_tab.length;

      for (var i = 0; i < evtFirst_Link_tabLength; i++) {

        if (evtFirst_Link_tab[i].className == 'js-btn gradient-btn-evtfirst') {
          // console.log(evtFirst_Link_tab[i])
          // console.log(evtFirst_Link)
          var url_bt = evtFirst_Link_tab[i].getAttribute('href'),
            track = evtFirst_Link_tab[i].getAttribute('onclick');
          document.getElementById('globalLink').setAttribute('onclick', track);

          evtFirst_Link.onclick = function() {
            if (url_bt) {
              document.location = url_bt
            };
          };
        };
      }; // end for   
    }; // end if

  } catch (e) {
    if (console) {
      console.log(e)
    }
  };

})(); // end IEF
