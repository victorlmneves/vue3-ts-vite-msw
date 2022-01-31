import { rest } from 'msw'

export const moviesHandlers = [
  // Handles a GET /user request
  rest.get('/movies', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        movies: [
          {
            id: 1,
            title: '2001: A Space Odyssey'
          },
          {
            id: 2,
            title: 'Back to the Future'
          },
          {
            id: 3,
            title: 'Blade Runner'
          }
        ]
      })
    )
  })
]
