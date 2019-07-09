const { readFileSync, writeFileSync } = require('fs')

function main() {
  const initialData = JSON.parse(
    readFileSync('./assets/emoji.json').toString('utf8')
  )
  const finalData = initialData
  delete finalData.compressed
  finalData.categories = finalData.categories.map(category => ({
    ...category,
    emojis: category.emojis.filter(id => finalData.emojis[id])
  }))
  finalData.emojis = Object.entries(initialData.emojis).reduce(
    (acc, [key, value]) => {
      // https://github.com/missive/emoji-mart/blob/master/src/utils/data.js#L1
      delete value.c
      delete value.d
      delete value.e
      delete value.f
      delete value.g
      delete value.h
      delete value.i
      delete value.j
      delete value.k
      delete value.l
      delete value.m
      delete value.n
      delete value.o

      value.name = value.a
      delete value.a

      value.unified = value.b
      delete value.b

      value.id = key

      if (value.skin_variations) {
        value.skin_variations = Object.entries(value.skin_variations).reduce(
          (acc, [k, v]) => ({
            ...acc,
            [k]: v.unified
          }),
          {}
        )
      }
      return {
        ...acc,
        [key]: value
      }
    },
    finalData.emojis
  )
  finalData.categories.unshift({ id: 'recent', name: 'Recent', emojis: [] })
  writeFileSync('./assets/emoji-new.json', JSON.stringify(finalData))
}

main()
