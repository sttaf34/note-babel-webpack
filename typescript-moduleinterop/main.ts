// esModuleInterop について詳しく書いてあってありがたい
// https://osamtimizer.hatenablog.com/entry/2018/06/28/122502

// "esModuleInterop": true,
// /*

import moment from "moment"
import dayjs from "dayjs"
import parse from "csv-parse/lib/sync"
import { readFileSync } from "fs"

console.log(moment())
console.log(dayjs().locale())

const data = readFileSync("./sample.csv")
const fruitData = parse(data, { columns: true })
console.log(fruitData)

// */

// "esModuleInterop": false
/*

import * as moment from "moment"
import * as dayjs from "dayjs"
import * as parse from "csv-parse/lib/sync"
import { readFileSync } from "fs"

console.log(moment())
console.log(dayjs().locale())

const data = readFileSync("./sample.csv")
const fruitData = parse(data, { columns: true })
console.log(fruitData)

// */
