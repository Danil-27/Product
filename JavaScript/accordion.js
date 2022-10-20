var accordion = document.getElementById('accordion');

var i;

accordion.addEventListener('click', function(e) {
//   console.log("e.target");
//   console.log(e.target);
  if (e.target.classList.contains('accordion__trigger') ) {
    var trigger = e.target;
    var content = trigger.nextElementSibling;
      let triggerSteit  = trigger.dataset.toggle === 'collapse' ? 'show' : 'collapse'
      trigger.dataset.toggle = triggerSteit
      
    if (triggerSteit !== 'show') {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + 'px';      
    }
  }

});