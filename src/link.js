import { push } from './history'

export default function(node) {
  node.onclick = e => {
    e.preventDefault()
    push(e.target.attributes.getNamedItem('href').value)
  }
}
