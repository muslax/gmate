function createTestSequence(bookSeq, leaders) {
  let perKondisi = {}
  for (const k of bookSeq) {
    if (perKondisi[k.idk] === undefined) perKondisi[k.idk] = []
    perKondisi[k.idk].push(k.sekuen)
  }

  const fKey = leaders[Math.floor(Math.random() * leaders.length)]
  let sekuen = perKondisi[fKey]
  delete perKondisi[fKey]

  let keys = Object.keys(perKondisi).sort(() => Math.random() - 0.5)
  for (const k of keys) sekuen = [...sekuen, ...perKondisi[k]]
  
  return sekuen
}

function groupByKey(array, keyName='ref', targetName='seq') {
  let grouping = {}
  for (let item of array) {
    if (grouping[item[keyName]] === undefined) grouping[item[keyName]] = []
    grouping[item[keyName]].push(item[targetName])
  }
  return grouping
}

function objectify(array, keyName = "ref") {
  let obj = {}
  for (let item of array) obj[item[keyName]] = item
  return obj
}

function getLeaderKey(leaders) {
  return leaders[Math.floor(Math.random() * leaders.length)]
}

function randomGroupKeys(group, leaders) {
  const groupKeys = Object.keys(group)
  const leadKey = leaders[Math.floor(Math.random() * leaders.length)]
  const leadIndex = groupKeys.indexOf(leadKey)
  groupKeys.splice(leadIndex, 1)
  groupKeys.sort(() => Math.random() - 0.5)
  groupKeys.unshift(leadKey)
  return groupKeys
}

function getTestSequence(testData, leaders) {
  const grouping = groupByKey(testData)
  const randomKeys = randomGroupKeys(testData, leaders)
  let sequence = []
  for (let k of randomKeys) {
    sequence.push(...grouping[k])
  }
  return sequence
}

// module.exports = cobra
// module.exports = { createTestSequence }

exports.createTestSequence = createTestSequence
exports.groupByKey = groupByKey
exports.objectify = objectify
exports.getLeaderKey = getLeaderKey
exports.randomGroupKeys = randomGroupKeys
exports.getTestSequence = getTestSequence