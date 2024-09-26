import { createMocks } from 'node-mocks-http';
import register from '../pages/api/register.ts';
import { PrismaClient } from '@prisma/client';

jest.mock('@prisma/client');

describe('/api/register', () => {
  it('creates a new user', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'test@example.com',
        password: 'password123',
      },
    });

    const mockCreate = jest.fn().mockResolvedValue({
      id: '1',
      email: 'test@example.com',
      password: 'hashedPassword',
    });

    (PrismaClient as jest.Mock).mockImplementation(() => ({
      user: {
        create: mockCreate,
      },
      $disconnect: jest.fn(),
    }));

    await register(req, res);

    expect(res._getStatusCode()).toBe(201);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({
        success: true,
        message: 'User registered successfully',
      })
    );
    expect(mockCreate).toHaveBeenCalledWith({
      data: expect.objectContaining({
        email: 'test@example.com',
        password: expect.any(String),
      }),
    });
  });
});