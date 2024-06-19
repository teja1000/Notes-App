const express = require('express');
const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const dotenv = require('dotenv');

dotenv.config();

const prisma = new PrismaClient();
const router = express.Router();

router.post('/create-user', async (req, res) => {
  const { fullname, phoneNumber, email, DOB, password } = req.body;

  if (!fullname || !phoneNumber || !email || !DOB || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { phoneNumber: phoneNumber }
        ]
      }
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email or phone number already in use' });
    }

    
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = await prisma.user.create({
      data: {
        fullname: fullname,
        phoneNumber: phoneNumber,
        email: email,
        DOB: new Date(DOB),
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Error creating user' });
  }
});

module.exports = router;

