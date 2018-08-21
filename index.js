function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('div.target')
}

function increaseRankBy(n) {
  var ranks = document.getElementByClassName('ranked-list').querySelectorAll('ranked-list.li')
  
  for (let i = 0; i < lis.length; i++) {
  ranks[i].innerHTML = (i + 1).toString();
  }
}
