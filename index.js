function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var rank = document.getElementById('app').querySelectorAll('ranked-list li')
  
  for (let i = 0; i < rank.length; i++) {
  rank[i].innerHTML = (i + n).parseInt();
  }
  return rank
}
