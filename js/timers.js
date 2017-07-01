var timer = {

  timer: document.querySelector('#timer'),
  start: document.querySelector('#start'),
  reset: document.querySelector('#reset'),
  pause: document.querySelector('#pause'),

  label: 'EL TIMO',
  seconds: 0,

  setupStart: function () {
    this.start.addEventListener('click', () => {
      this.timer.textContent = 'Time elapsed: ' + this.seconds
    })
  },

  updateTime: function () {
  
  }

  init: function () {
    console.log(this.label + 'is READY')
  }
}

timer.init()
timer.setupStart()

document.addEventListener('DOMContentLoaded', timer.init)
