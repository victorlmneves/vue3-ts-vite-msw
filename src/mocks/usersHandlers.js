import { rest } from 'msw'

export const usersHandlers = [
  // Handles a GET /user request
  rest.get('/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        users: [
          {
            id: 1,
            name: 'Annick'
          },
          {
            id: 2,
            name: 'Dirk'
          },
          {
            id: 3,
            name: 'Victor'
          }
        ]
      })
    )
  })
]
