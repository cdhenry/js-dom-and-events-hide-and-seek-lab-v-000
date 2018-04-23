function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = lis.length; i < l; i++) {
    let children = lis[i].children

    for (let j = 0, k = children.length; j < k; j++)
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
  }
}

function deepestChild(){
  const node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode;
    nextNode = node.chilren[0];
  }

  return node;
}
