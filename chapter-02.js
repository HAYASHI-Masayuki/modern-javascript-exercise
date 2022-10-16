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

  question9: () => {
    const arr = Array(100).fill(0).map((_, i) => i)
    const k = Math.floor(Math.random() * 100 - 7)
    const n = Math.floor(Math.random() * 7 + 1)

    switch (n) {
      /* eslint-disable no-fallthrough, semi */
      case 7: arr[k + 7 - 1] = 0;
      case 6: arr[k + 6 - 1] = 0;
      case 5: arr[k + 5 - 1] = 0;
      case 4: arr[k + 4 - 1] = 0;
      case 3: arr[k + 3 - 1] = 0;
      case 2: arr[k + 2 - 1] = 0;
      case 1: arr[k + 1 - 1] = 0;
      default: arr[k] = 0;
      /* eslint-enable no-fallthrough, semi */
    }

    console.log(k, n, arr)
  },

  question10: () => {
    const s = ' abc def ghi'

    // doなので、1文字目が空白でも、そこでは止まらない
    let i = 0
    do {
      i++
    } while (i < s.length && s[i] !== ' ')
    console.log(i)

    let j = 0
    while (j < s.length && (s[j] !== ' ' || j === 0)) {
      j++
    }
    console.log(j)
  },

  question11: () => {
    let i, j

    console.log('2.10.1-1')
    i = 1
    while (i <= 10) {
      console.log(i)
      i++
    }

    console.log('2.10.1-2')
    const a = [1, 2, 3]
    i = a.length - 1
    while (i >= 0) {
      console.log(a[i])
      i--
    }

    console.log('2.10.1-3')
    // eslint-disable-next-line no-sequences, no-unused-expressions
    i = 0, j = a.length - 1
    while (i < j) {
      const temp = a[i]
      a[i] = a[j]
      a[j] = temp
      // eslint-disable-next-line no-sequences, no-unused-expressions
      i++, j--
    }
    console.log(a)

    console.log('2.10.2-1')
    // eslint-disable-next-line no-sparse-arrays
    const arr = [, 2, , 4]
    arr[9] = 100
    i = 0
    while (i < arr.length) {
      console.log(arr[i])
      i++
    }

    console.log('2.10.2-2')
    const greeting = 'Hello 🌐'
    i = 0
    // XXX これだとUNICODEが分離されちゃう
    // while (i < greeting.length) {
    //   console.log(greeting[i])
    //   i++
    // }
    // XXX for~ofは、Iterableを処理する。同様にスプレッド演算子もIterableを処理
    // できるので、これで行ける。あるいはArray.fromでも行けるはず。
    const greetingArray = [...greeting]
    while (i < greetingArray.length) {
      console.log(greetingArray[i])
      i++
    }
    // あるいは、
    const greetingIterator = greeting[Symbol.iterator]()
    while (true) {
      const { done, value } = greetingIterator.next()
      if (done) {
        break
      }
      console.log(value)
    }

    console.log('2.10.3-1')
    const obj = { name: 'Harry Smith', age: 42 }
    const objEntries = [...Object.entries(obj)]
    i = 0
    while (i < objEntries.length) {
      console.log(`${objEntries[i][0]}: ${objEntries[i][1]}`)
      i++
    }

    console.log('2.10.3-2')
    // eslint-disable-next-line no-sparse-arrays
    const numbers = [1, 2, , 4]
    numbers[99] = 100
    let numbersEntries = Object.entries(numbers)
    i = 0
    while (i < numbersEntries.length) {
      console.log(`${numbersEntries[i][0]}: ${numbersEntries[i][1]}`)
      i++
    }

    numbers.lucky = true
    console.log('2.10.3-3')
    // TODO: Object.entriesは継承されたプロパティは見ないのでこれは不完全か。
    numbersEntries = Object.entries(numbers)
    i = 0
    while (i < numbersEntries.length) {
      console.log(`${numbersEntries[i][0]}: ${numbersEntries[i][1]}`)
      i++
    }
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
