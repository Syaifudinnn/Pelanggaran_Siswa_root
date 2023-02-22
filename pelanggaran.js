const express = require("express")
const router = express.Router()
const db = require("./db")

//============================================ PELANGGARAN ============================================
//end point menampilkan pelanggaran
router.get("/pelanggaran", (req,res) => {

    let sql = "select * from pelanggaran"

    db.query(sql, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error, message
            }
        }
        else {
            response = {
                count : result.length,
                pelanggaran : result
            }
        }
        res.json(response)
    })
})

//end point menambahkan pelanggaran
router.post("/pelanggaran", (req,res) => {

    let data = {
        nama_pelanggaran : req.body.nama_pelanggaran,
        poin : req.body.poin
    }

    let sql = "insert into pelanggaran set ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data inserted"
            }
        }
        res.json(response)
    })
})

//end point mengubah data pelanggaran
router.put("/pelanggaran", (req,res) => {

    let data = [
        {
            nama_pelanggaran : req.body.nama_pelanggaran,
            poin : req.body.poin
        },

        {
            id_pelanggaran : req.body.id_pelanggaran
        }
    ]

    let sql = "update pelanggaran set ? where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data updated"
            }
        }
        res.json(response)
    })
})

//end point menghapus data pelanggaran berdasarkan id pelanggaran
router.delete("/pelanggaran/:id", (req,res) => {

    let data = {
        id_siswa : req.params.id
    }

    let sql = "delete from pelanggaran where ?"

    db.query(sql, data, (error, result) => {
        let response = null
        if (error) {
            response = {
                message : error.message
            }
        }
        else {
            response = {
                message : result.affectedRows + " data deleted"
            }
        }
        res.json(response)
    })
})

module.exports = router