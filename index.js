function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target) {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let listItems = document.querySelectorAll('.ranked-list li')

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].innerHTML = parseInt(listItems[i].innerHTML) + n
  }
}

function deepestChild() {
  let grandNode = document.querySelector('#grand-node')
  let childNode = grandNode.children[0]

  while (childNode) {
    grandNode = childNode
    childNode = grandNode.children[0]
  }

  return grandNode
}
