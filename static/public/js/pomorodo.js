(function() {
  var vm;

  vm = new Moon({
    el: 'html',
    data: {
      time: 0,
      timeStart: 0,
      timeWork: 1500,
      timeRest: 300,
      enable: false,
      enableWork: true,
      enableRest: false
    },
    methods: {
      touchButton: function() {
        this.enable = !this.enable;
        if (this.enable) {
          return this.startTimer();
        } else {
          return this.stopTimer();
        }
      },
      startTimer: function() {
        var self;
        self = this;
        return this.timer = setInterval(function() {
          if (self.time) {
            return self.time--;
          } else {
            return self.changeTimer();
          }
        }, 1000);
      },
      stopTimer: function() {
        return clearInterval(this.timer);
      },
      changeTimer: function() {
        clearInterval(this.timer);
        this.enableWork = !this.enableWork;
        this.enableRest = !this.enableRest;
        if (this.enableRest) {
          this.time = this.timeRest;
        } else {
          this.time = this.timeWork;
        }
        return this.startTimer();
      },
      plusMin: function() {
        this.time = this.time + 60;
        return this.setTimeStart();
      },
      minusMin: function() {
        this.time = this.time - 60;
        return this.setTimeStart();
      },
      setTimeStart: function() {
        return this.timeStart = this.time;
      }
    },
    computed: {
      calcMin: function() {
        return this.time / 60 | 0;
      },
      calcSec: function() {
        var sec;
        sec = this.time % 60;
        if (sec < 10) {
          return '0' + sec;
        } else {
          return sec;
        }
      },
      initial: function() {
        return this.time = this.timeStart = this.timeWork;
      },
      backColor: function() {
        if (this.enable) {
          if (this.enableWork) {
            return {
              color: 'rgba(' + Math.round((this.timeStart - this.time) / this.timeStart * 255) + ',' + Math.round(this.time / this.timeStart * 255) + ',0,0.75)'
            };
          } else {
            return {
              color: '#4A90C5'
            };
          }
        } else {
          return {
            color: '#bbb'
          };
        }
      }
    }
  });

  vm.initial();

}).call(this);
