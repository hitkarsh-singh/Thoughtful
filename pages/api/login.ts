import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const login = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  console.log('Login API called with email:', email);

  try {
    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      process.env.JWT_SECRET!, // Make sure this is defined
      { expiresIn: '1h' }
    );

    console.log('Token generated:', token);
    return res.status(200).json({ success: true, token });

  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
};

export default login;
