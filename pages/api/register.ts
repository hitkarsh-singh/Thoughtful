import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { hashPassword } from '../../lib/auth-utils';

const prisma = new PrismaClient();

const register = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await hashPassword(password);

    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({ success: false, message: 'Internal server error' });
  } finally {
    await prisma.$disconnect();
  }
};

export default register;