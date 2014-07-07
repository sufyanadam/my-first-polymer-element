Polymer('vote-element', {
  count: 0,
  created: function() { console.log('created'); },

  ready: function() {
    var self = this;

    this.$.upArrow.addEventListener('click', function() {
      self.count++;
    });

    this.$.downArrow.addEventListener('click', function() {
      self.count--;
    });
  },

  attached: function() { console.log('attached'); }
});
