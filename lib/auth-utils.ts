import db from '../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const hashPassword = async (password: string) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};


export { hashPassword };