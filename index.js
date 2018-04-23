function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + n).toString()
  }
}

function deepestChild(){
  const node = document.getElementById('grand-node').querySelectorAll('div')
  return node[node.length-1];
}
