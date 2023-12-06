require('dotenv').config()

// imports
const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cors = require('cors')

const app = express()

// Config JSON response

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Models

const User = require('./models/User')
const Product = require('./models/Product')

// Open Route - Public Route
app.get('/', (req,res) => {
    res.status(200).json({msg: 'Bem vindo a nossa API!'})
})

// Private Route
app.get('/user/:id',checkToken, async (req,res) => {

    const id = req.params.id

    // check if user exists
    const user =  await User.findById(id, '-password')

    if (!user) {
        return res.status(404).json({msg: 'Usuário não encontrado'})
    }

    res.status(200).json({user})

})


// Middleware
function checkToken(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).json({msg: 'Acesso negado'})
    }

    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
    } catch(error) {
        res.status(400).json({msg: "Token inválido"})
    }
}

// Register Product

app.post('/product', async (req,res) => {
    const { name, price, category, image } = req.body

    // validations

    if(!name) {
        return res.status(422).json({msg: 'Nome do produto é obrigatório'})
    }

    if(!price) {
        return res.status(422).json({msg: 'Preço do produto é obrigatório'})
    }

    if(!category) {
        return res.status(422).json({msg: 'Categoria do produto é obrigatório'})
    }

    if(!image) {
        return res.status(422).json({msg: 'Imagem do produto é obrigatório'})
    }

    const productExists = await Product.findOne({name: name})

    if (productExists) {
        return res.status(422).json({msg: 'Produto já existe'})
    }

    // create product
    try {
        const product = await Product.create({
            name,
            price,
            category,
            image,
            disponivel,
        })

        res.status(201).json({ msg: 'Produto criado com sucesso' });
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})
    }
})

// GET ALL PRODUCTS
app.get('/product', async (req,res) => {
    const products = await Product.find()
    res.status(200).json({products})
})

// GET ONE PRODUCT

app.get('/product/:id', async (req,res) => {
    const id = req.params.id
    const product = await Product.findById(id)

    if (!product) {
        return res.status(404).json({msg: 'Produto não encontrado'})
    }

    res.status(200).json({product})
})

// UPDATE PRODUCT
app.post('/product/:id', async (req,res) => {
    const id = req.params.id
    const { name, price, category, image, disponivel } = req.body

    // validations

    if(!name) {
        return res.status(422).json({msg: 'Nome do produto é obrigatório'})
    }

    if(!price) {
        return res.status(422).json({msg: 'Preço do produto é obrigatório'})
    }

    if(!category) {
        return res.status(422).json({msg: 'Categoria do produto é obrigatório'})
    }

    if(!image) {
        return res.status(422).json({msg: 'Imagem do produto é obrigatório'})
    }

    if (!disponivel) {
        return res.status(422).json({msg: 'Disponibilidade do produto é obrigatório'})
    }

    const productExists = await Product.findOne({_id: id})

    if (!productExists) {
        return res.status(422).json({msg: 'Produto não existe'})
    }

    // update product
    try {
        const product = await Product.findByIdAndUpdate(id, {
            name,
            price,
            category,
            image,
            disponivel,
        })

        res.status(201).json({ msg: 'Produto atualizado com sucesso' });
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})
    }
})

// Register User

app.post('/auth/register', async (req,res) => {
    const { email, password, name } = req.body

    // validations

    if(!name) {
        return res.status(422).json({msg: 'Nome é obrigatório'})
    }

    if(!email) {
        return res.status(422).json({msg: 'Email é obrigatório'})
    }

    if(!password) {
        return res.status(422).json({msg: 'Senha é obrigatório'})
    }

    // check if user exists

    const userExists = await User.findOne({email: email})

    if (userExists) {
        return res.status(422).json({msg: 'Usuário já existe'})
    }

    // create password

    const salt = await bcrypt.genSalt(12)

    const passwordHash = await bcrypt.hash(password, salt)

    // create user

    const user = new User({
        name,
        email,
        password: passwordHash
    })

    try {
        await user.save()
        res.status(201).json({msg: 'Usuário criado com sucesso'})
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})
    }

})


// Login User

app.post('/auth/login', async (req,res) => {
    const { email, password } = req.body

    // validations

    if (!email) {
        return res.status(422).json({msg: 'Email é obrigatório'})
    }

    if (!password) {
        return res.status(422).json({msg: 'Senha é obrigatório'})
    }

    // check if user exists
    const user = await User.findOne({email: email})

    if (!user) {
        return res.status(404).json({msg: 'Usuário não encontrado'})
    }

    // check if password is correct

    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
        return res.status(422).json({msg: 'Senha inválida'})
    }

    try {
        const secret = process.env.SECRET
        const token = jwt.sign({userId: user._id}, secret)
        res.status(200).json({msg: "Autenticação realizada com sucesso", token, user: {id: user._id, name: user.name, email: user.email}})
    } catch (error) {
        res.status(500).json({msg: error})
    }
})


// Credenciais

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const port = process.env.PORT

mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@comercialluna.0u6kbeo.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    app.listen(port)
    console.log("Conectou ao banco")
}).catch((err) => console.log(err))