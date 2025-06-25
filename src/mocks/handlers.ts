import { customersHandler } from './customers-handler';
import { WELCOME_HANDLERS } from './welcome-handlers';

export const handlers = [...WELCOME_HANDLERS, ...customersHandler];
