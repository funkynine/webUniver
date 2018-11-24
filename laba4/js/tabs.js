function activatetab(tab) {

  var thetabs = document.getElementsByClassName('tab');
  [].forEach.call(thetabs, function(thetab) {
    thetab.classList.remove('active');
  });
  document.getElementById('tab' + tab).classList.add('active');

  var thetabcontents = document.getElementsByClassName('tabcontent');
  [].forEach.call(thetabcontents, function(thetabcontent) {
    thetabcontent.classList.remove('active');
  });
  document.getElementById('tabcontent' + tab).classList.add('active');

}
