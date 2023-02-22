//inisialisasi library
const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")

const siswa_route = require("./siswa")
const user_route = require("./user")
const pelanggaran_route = require("./pelanggaran")
const pelanggaran_siswa_route = require("./pelanggaran_siswa")

const app = express()
app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.static(__dirname))
app.use(express.json())


app.use(siswa_route)
app.use(user_route)
app.use(pelanggaran_route)
app.use(pelanggaran_siswa_route)


app.listen(9000, ()=>{
    console.log("barakallah");
})