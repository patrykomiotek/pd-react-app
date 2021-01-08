import { rest } from 'msw';

const baseUrl = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post('/login', (req, res, ctx) => {
    const { username } = req.body;

    return res(
      ctx.json({
        id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
        username,
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),

  rest.get(`${baseUrl}/tickets.json`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 'b968bcc5-cf59-40d2-9628-a0de0722d5c3',
          title: 'Task 1',
          description: 'Lorem ipsum',
        },
        {
          id: '30769d1c-22f5-43d2-8f2c-eaa1796930a7',
          title: 'Task 2',
          description: 'Lorem ipsum',
        },
        {
          id: 'a0cb80b3-6fd9-475f-9046-38a0304125ff',
          title: 'Ticket 3',
          description: 'Lorem ipsum',
        }
      ])
    );
  }),

  rest.post(`${process.env.REACT_APP_API_URL}/movies`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ status: 'ok' })
    );
  })
];
