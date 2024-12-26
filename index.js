var map = new naver.maps.Map(document.getElementById('map'), {
  center: new naver.maps.LatLng(37.582004, 126.984770),
  zoom: 18,
  zoomControl: true,
  zoomControlOptions: {
    position: naver.maps.Position.TOP_RIGHT
  }
});

var marker = new naver.maps.Marker({
  position: new naver.maps.LatLng(37.582004, 126.984770),
  map: map
});

getCount().then(({count}) => {
  if (count <= MAX_RECENT_COMMENTS) {
    document.getElementById('guestbook-button').style.display = 'none';
  }
});
renderGuestbook(getDataRecent);
document.getElementById('submit-form-button').addEventListener('click', () => {
  submitForm();
});

var coll = document.getElementsByName('accounts');
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
