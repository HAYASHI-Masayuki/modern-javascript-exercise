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

  question5: () => {
    console.log(`
      a || bはa, bの型に関係なく常にa ? a : bと等価。
      理由は、前者は「aが真の場合はa, 偽の場合はb」であり、後者も同等のため。
      a && bは、a ? b : aと等価。
    `)
  },

  question6: () => {
    const a = Array(5).fill(0).map(_ => Math.floor(Math.random() * 100))
    console.log(a)

    let max1 = 0
    for (let i = 0; i <= a.length; i++) {
      if (a[i] > max1) {
        max1 = a[i]
      }
    }
    console.log(max1)

    let max2 = 0
    for (const j of a) {
      if (j > max2) {
        max2 = j
      }
    }
    console.log(max2)

    let max3 = 0
    for (const k in a) {
      if (a[k] > max3) {
        max3 = a[k]
      }
    }
    console.log(max3)
  },

  question7: () => {
    // for~inにconstの追加と、変数名の(おそらく)typoの修正は本題と関係ないはず。
    // なにも表示されないのは、iはインデックスというかプロパティ名で、
    // これはまた文字列であるため、i + 1は01, 11, 21, ... 101, 111となるため。
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    for (const i in arr) { if (i + 1 === 10) console.log(arr[i]) }
  },

  question8: () => {
    const zeroToNine = Array(10).fill(0).map((_, i) => i)

    zeroToNine.forEach(i => {
      switch (i) {
        case 0:
          console.log('zero')
          break

        case 1:
          console.log('one')
          break

        case 2:
          console.log('two')
          break

        case 3:
          console.log('three')
          break

        case 4:
          console.log('four')
          break

        case 5:
          console.log('five')
          break

        case 6:
          console.log('six')
          break

        case 7:
          console.log('seven')
          break

        case 8:
          console.log('eight')
          break

        case 9:
          console.log('nine')
          break
      }
    })

    const iToS = [
      'zero',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
    ]

    const zeroToNineString = zeroToNine.map(i => iToS[i])
    console.log(zeroToNineString)
    console.log(zeroToNineString.map(s => iToS.findIndex(v => v === s)))
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
