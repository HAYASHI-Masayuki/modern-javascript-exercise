'use strict'

const questions = {
  question1: () => {
    // XXX 以下を直にREPLやコンソールに入力する
    // おそらくすべてundefinedが表示される
    /* eslint-disable */

    console.log(1)

    let a

    {
      console.log(2)
    }

    { ; }

    for (let i = 0; i <= 0; i++) {
      console.log(3)
    }

    while (false) {
      console.log(4)
    }

    if (true) {
      console.log(5)
    }

    try {
      console.log(6)
    } catch (e) {}

    try {
      throw 7
    } catch (e) {}

    /* eslint-enable */
  },

  question2: () => {
    const x = 0

    if (x === 0) console.log('zero')
    else console.log('nonzero')

    if (x === 0) { console.log('zero') } else { console.log('nonzero') }
  },

  question3: () => {
    const x = 1;
    [0].forEach(() => x)
  },

  question4: () => {
    [undefined, null, 0, ''].forEach(i => {
      [undefined, null, 0, ''].forEach(j => {
        if (i === j) {
          return
        }

        console.log(`${i === '' ? "''" : i} < ${j === '' ? "''" : j}`, i < j)
        console.log(`${i === '' ? "''" : i} <= ${j === '' ? "''" : j}`, i <= j)
        // eslint-disable-next-line eqeqeq
        console.log(`${i === '' ? "''" : i} == ${j === '' ? "''" : j}`, i == j)
      })
    })

    /*
     * undefined == nullは、そういうルールのためtrue.
     * 0 == ''は、文字列が数値に変換されて比較されるので、true.
     * null, 0, ''を<=で比較する際は、すべて0に変換されて比較されるので？ true.
     */
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
