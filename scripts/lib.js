//@ts-check
//https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
//jsdoc cheat sheet: https://devhints.io/jsdoc

/**
 * Write the text to the content of all nodes
 * @param {*} nodes
 * @param {*} content
 */
export function write(nodes, content) {
  if (nodes == null) {
    console.error("write: no nodes", content)
    return
  }
  nodes.forEach((n) => {
    n.textContent = content
  })
}

/**
 *
 * @param {Set<string>} ids les identifiants des objets span
 */
export function get_span_dictionary(ids) {
  let spans = {}
  for (let id of ids) {
    let nodes = document.querySelectorAll(`#${id}`)
    if (nodes) {
      spans[id] = nodes
    } else {
      console.error("No node(s) exists for this span id")
    }
  }
  return spans
}

/**
 * Just add a new object to the dictionary
 * @param {*} dict 
 * @param {*} element 
 * @returns 
 */
export function dict_add(dict, element) {
    return {...dict, element}
}