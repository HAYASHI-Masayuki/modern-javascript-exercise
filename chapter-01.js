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
  }
}

const [, , ...args] = process.argv.map(arg => `question${arg}`)

Object.entries(questions).filter(entry => !args.length || args.includes(entry[0])).forEach(entry => {
  console.log(`BEGIN ${entry[0]}`)
  entry[1]()
  console.log(`END`)
})
