'use strict'

const questions = {
  question1: () => {
    // NaN
    console.log('NaN + 0', NaN + 0)

    // Infinity
    console.log('Infinity + 0', Infinity + 0)

    // 0
    console.log('false + 0', false + 0)

    // 1
    console.log('true + 0', true + 0)

    // 0
    console.log('null + 0', null + 0)

    // 0 → NaN
    console.log('undefined + 0', undefined + 0)
  },

  question2: () => {
    // 配列は、toStringで、たとえば['a', 'b']は'a,b'となる。空配列の場合は空文字
    // 列となる。空文字列同士を文字列として結合すれば、空文字列となる。
    const bracketsPlusBrackets = [] + []
    console.log('[] + []', `'${[] + []}'`, `'${bracketsPlusBrackets}'`)

    // オブジェクトはtoStringで'[object Object]'となるため。
    const bracesPlusBrackets = {} + []
    console.log('{} + []', `'${{} + []}'`, `'${bracesPlusBrackets}'`)

    const bracketsPlusBraces = [] + {}
    console.log('[] + {}', `'${[] + {}}'`, `'${bracketsPlusBraces}'`)

    const bracesPlusBraces = {} + {}
    console.log('{} + {}', `'${{} + {}}'`, `'${bracesPlusBraces}'`)

    // ここまでと違い、'-'は減算であり、空文字列はともかくオブジェクトを引くこと
    // はできないため、NaN.
    const bracketsMinusBraces = [] - {}
    console.log('[] - {}', [] - {}, bracketsMinusBraces)
  },

  question3: () => {
    [3, 2, 1, 0, -1, -2, -3].forEach(n => {
      console.log(`${n} % 2 =`, n % 2)
    });

    [3, 2, 1, 0, -1, -2, -3].forEach(n => {
      console.log(`${n} % -2 =`, n % -2)
    });

    [3.5, 2.5, 1.5, 0.5, -1.5, -2.5, -3.5].forEach(n => {
      console.log(`${n} % 2 =`, n % 2)
    })
  },

  question4: () => {
    const addAngle = (n, o) => (n + o) % 360

    console.log('90 + 90 = ', addAngle(90, 90))
    console.log('180 + 180 = ', addAngle(180, 180))
    console.log('270 + 270 = ', addAngle(270, 270))
    console.log('360 + 360 = ', addAngle(360, 360))
    console.log('359 + 1 = ', addAngle(359, 1))
  },

  question5: () => {
    console.log('\\\\')
    /* eslint-disable quotes */
    console.log("\\\\")
    console.log(`\\\\`)
    /* eslint-enable quotes */
    console.log('\x5C\x5C')
  },

  question6: () => {
    // raw
    console.log('🌐')

    // UTF-16
    console.log('\uD83C\uDF10')

    // UTF-32
    console.log('\u{1F310}')
  },

  question7: () => {
    const subpath = 'subpath'

    console.log(`/path/to${subpath ? `/${subpath}` : ''}`)
  },

  question8: () => {
    const array1 = []
    array1[1] = 1
    console.log(array1)

    const array2 = []
    array2.length = 1
    console.log(array2)

    console.log(Array(1))
  },

  question9: () => {
    const array = []
    array[0] = 0
    array[0.5] = 0.5
    array[1] = 1
    array[1.5] = 1.5
    array[2] = 2
    console.log(array)
    console.log(array.length)
  },

  question10: () => {
    console.log([0, [1, 2]].toString())
  },

  question11: () => {
    const harry = { friends: [] }
    const sally = { friends: [] }
    harry.friends.push(sally)
    sally.friends.push(harry)
    console.log(harry)
    console.log(sally)
    console.log(JSON.stringify(harry))
    console.log(JSON.stringify(sally))
  },
}

let args = []

try {
  [, , ...args] = process.argv.map(arg => `question${arg}`)
} catch (error) {
  if (error.name !== 'ReferenceError') {
    throw error
  }
}

Object.entries(questions).filter(entry => !args.length || args.includes(entry[0])).forEach(entry => {
  console.log(`BEGIN ${entry[0]}`)

  try {
    entry[1]()
  } catch (error) {
    console.error(error)
  }

  console.log('END')
})
