// Write your solution in this file!

const driver ={}
function updateDriverWithKeyAndValue(object, key, value){
  newObj = {...object}
  newObj[key]=value
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(obj, key){
  newObj = {...obj}
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key){
  delete obj[key]
  return obj
}
