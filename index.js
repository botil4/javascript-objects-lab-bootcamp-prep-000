var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  var newObj = Object.assign({}, object, {[key]: value})
  return newObj
}

function updateObjectWithKeyAndValue(object, key, value) {
  var newObj = Object.assign({}, object, {[key]: value})
  return newObj
}