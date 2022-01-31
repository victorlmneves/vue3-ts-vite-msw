import { setupWorker } from 'msw'
import { usersHandlers } from './usersHandlers'
import { moviesHandlers } from './moviesHandlers'
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...usersHandlers, ...moviesHandlers)
