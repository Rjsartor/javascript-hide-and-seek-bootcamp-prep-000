function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var rank = document.getElementById('app').querySelectorAll('ranked-list')
  
  for (let i = 0; i < rank.length; i++) {
  rank[i].innerHTML = ((parseInt(rank[i].innerHTML)) + n);
  }
}
