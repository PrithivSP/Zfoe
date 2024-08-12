const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const Order = require('./models/servicesSchema');
const Customer = require('./models/serviceSeekerSchema');
const Provider = require('./models/serviceProviderSchema');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',  // Replace with your frontend's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://prithivspn:root@zfoe.yifqp.mongodb.net/?retryWrites=true&w=majority&appName=zfoe").then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.error("MongoDB connection error:", err);
});

app.post('/signup', async (req, res) => {
    try {
        const {email, password, type } = req.body;
        let user;
        if (type === 'customer') {
            user = new Customer({ email, password });
        } else if (type === 'provider') {
            user = new Provider({ email, password });
        } else {
            return res.status(400).send('Invalid user type');
        }
        console.log("Signed UP");
        await user.save();
        res.status(201).send(user);
    } catch (err) {
        res.status(500).send({error: err.message});
    }
});

app.post('/signin', async (req, res) => {
    try {
        const { email, password, type } = req.body;
        let user;
        if (type === 'customer') {
            user = await Customer.findOne({ email, password });
        } else if (type === 'provider') {
            user = await Provider.findOne({ email, password });
        } else {
            return res.status(400).send('Invalid user type');
        }
        if (!user) return res.status(400).send('Invalid credentials');
        console.log("LoggedIn")
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/user/details', async (req, res) => {
    try {
        const { id, type, ...updateData } = req.body;
        let user;
        if (type === 'customer') {
            user = await Customer.findByIdAndUpdate(id, updateData, { new: true });
        } else if (type === 'provider') {
            user = await Provider.findByIdAndUpdate(id, updateData, { new: true });
        } else {
            return res.status(400).send('Invalid user type');
        }
        if (!user) return res.status(404).send('User not found');
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/provider/service', async (req, res) => {
    try {
        const { id, name, category, experience, pricePerHour } = req.body;
        const provider = await Provider.findById(id);
        if (!provider) return res.status(404).send('Provider not found');
        provider.services.push({ name, category, experience, pricePerHour });
        await provider.save();
        res.status(200).send(provider);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/order', async (req, res) => {
    try {
        const { providerId, customerId, date, time, duration, price } = req.body;
        const order = new Order({ providerId, customerId, date, time, duration, price, status: 'Requested' });
        await order.save();
        res.status(201).send(order);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/order/accept', async (req, res) => {
    try {
        const { id } = req.body;
        const order = await Order.findByIdAndUpdate(id, { status: 'Pending' }, { new: true });
        if (!order) return res.status(404).send('Order not found');
        res.status(200).send(order);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/order/decline', async (req, res) => {
    try {
        const { id } = req.body;
        const order = await Order.findByIdAndUpdate(id, { status: 'Cancelled' }, { new: true });
        if (!order) return res.status(404).send('Order not found');
        res.status(200).send(order);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/order/complete', async (req, res) => {
    try {
        const { id } = req.body;
        const order = await Order.findByIdAndUpdate(id, { status: 'Completed' }, { new: true });
        if (!order) return res.status(404).send('Order not found');
        res.status(200).send(order);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.get('/orders', async (req, res) => {
    try {
        const { userId, type } = req.body;
        let orders;
        if (type === 'customer') {
            orders = await Order.find({ customerId: userId });
        } else if (type === 'provider') {
            orders = await Order.find({ providerId: userId });
        } else {
            return res.status(400).send('Invalid user type');
        }
        res.status(200).send(orders);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/order/details', async (req, res) => {
    try {
        const { id, ...updateData } = req.body;
        const order = await Order.findByIdAndUpdate(id, updateData, { new: true });
        if (!order) return res.status(404).send('Order not found');
        res.status(200).send(order);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.put('/user/edit', async (req, res) => {
    try {
        const { id, type, ...updateData } = req.body;
        let user;
        if (type === 'customer') {
            user = await Customer.findByIdAndUpdate(id, updateData, { new: true });
        } else if (type === 'provider') {
            user = await Provider.findByIdAndUpdate(id, updateData, { new: true });
        } else {
            return res.status(400).send('Invalid user type');
        }
        if (!user) return res.status(404).send('User not found');
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
