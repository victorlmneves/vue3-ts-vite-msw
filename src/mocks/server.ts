import { setupServer } from 'msw/node'
import { usersHandlers } from './usersHandlers'
// This configures a request mocking server with the given request handlers.
export const server = setupServer(...usersHandlers)
