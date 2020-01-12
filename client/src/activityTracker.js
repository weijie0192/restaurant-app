export var TRACK_CLICK = 'track-click';

var MAX_UP = 2;

export var TrackerInstance = new (function() {
  this.dataStorage = {
    [TRACK_CLICK]: {}
  };

  //tracking events
  this.trackClickEvent = function(e) {
    var travelUp = 0;
    var target = e.target;
    while (target && travelUp++ <= MAX_UP) {
      if (target.hasAttribute(TRACK_CLICK)) {
        var clickStorage = this.dataStorage[TRACK_CLICK];
        if (clickStorage[target.getAttribute(TRACK_CLICK)])
          clickStorage[target.getAttribute(TRACK_CLICK)]++;
        else clickStorage[target.getAttribute(TRACK_CLICK)] = 1;
        console.log(clickStorage);
        break;
      }
      target = target.parentElement;
    }
  };

  //register events
  document.addEventListener('click', this.trackClickEvent.bind(this));
})();
