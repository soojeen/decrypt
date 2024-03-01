import express from 'express'
import multer from 'multer'
import openpgp from 'openpgp'
import fs from 'fs'

const upload = multer({ dest: 'uploads/' })
const app = express()
const port = 3000
app.use(express.static('public'))


    const privateKey = await openpgp.decryptKey({
        privateKey: await openpgp.readPrivateKey({ armoredKey: process.env.DECRYPT_PRIVATE_KEY
        }),
        passphrase: 'super long and hard to guess secret'
    });

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/upload', upload.single('file'), async (req, res) => {
    const file = req.file
    const stream = fs.createReadStream(file.path)
        const message = await openpgp.readMessage({
        binaryMessage: stream // parse armored message
    });

        const decrypted = await openpgp.decrypt({
        message,
        decryptionKeys: privateKey
    });
    
    console.log(decrypted)
    
    await fs.promises.writeFile('public/test.txt', decrypted.data)

    res.redirect('/test.txt')
})

app.get('/finished', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">

<body>
        <main>
        Hello
        <button>button</button>
        </main>
        </body>
        `)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
