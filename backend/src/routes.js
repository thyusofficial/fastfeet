import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymenController from './app/controllers/DeliverymenController';
import DeliveryController from './app/controllers/DeliveryController';
import DeliverymanUndeliveredController from './app/controllers/DeliverymanUndeliveredController';
import DeliverymanDeliveredController from './app/controllers/DeliverymanDeliveredController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

import FileController from './app/controllers/FileController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Create new user
// routes.post('/users', UserController.store);

/**
 * Create Session/Login
 */
routes.post('/sessions', SessionController.store);

// Get deliveryman by id
routes.get('/deliverymen/:id', DeliverymenController.show);

/**
 * Deliveryman features
 */

// List undelivered orders
routes.get(
  '/deliveryman/:id/undelivered',
  DeliverymanUndeliveredController.index
);
/**
 * DELIVERIES
 */
// List delivered orders
routes.get('/deliveryman/:id/delivered', DeliverymanDeliveredController.index);
/**
 * Change order status
 */
// Set delvery start_date
routes.put('/deliveries/withdraw/:id', DeliverymanUndeliveredController.update);
// Set delivery end_date
routes.delete(
  '/deliveries/withdraw/:id',
  DeliverymanUndeliveredController.delete
);

/**
 * PROBLEMS
 */
// Get problem by id
routes.get('/delivery/:id/problems', DeliveryProblemController.show);

/**
 * Register delivery problem
 */
routes.post('/delivery/:id/problems', DeliveryProblemController.store);

/**
 * Upload files
 */
routes.post('/files', upload.single('file'), FileController.store);

/**
 * All routes below require a JWT token created on SessionController,
 * and after authMidleware all routes require authentication to be used.
 * */

routes.use(authMiddleware);

// Update user
routes.put('/users', UserController.update);

/**
 * Recipients
 */
// Shows on req.query or all
routes.get('/recipients', RecipientController.index);
// Show by id
routes.get('/recipients/:id', RecipientController.show);
// Create
routes.post('/recipients', RecipientController.store);
// Update
routes.put('/recipients/:id', RecipientController.update);
// Delete
routes.delete('/recipients/:id', RecipientController.delete);

/**
 * Deliveryman
 */
// Shows on req.query or all
routes.get('/deliverymen', DeliverymenController.index);

// Create
routes.post('/deliverymen', DeliverymenController.store);
// Update
routes.put('/deliverymen/:id', DeliverymenController.update);
// Delete
routes.delete('/deliverymen/:id', DeliverymenController.delete);

/**
 * Delivery
 */
// Shows on req.query or all
routes.get('/deliveries', DeliveryController.index);
// Show by id
routes.get('/deliveries/:id', DeliveryController.show);
// Create
routes.post('/deliveries', DeliveryController.store);
// Update
routes.put('/deliveries/:id', DeliveryController.update);
// Delete
routes.delete('/deliveries/:id', DeliveryController.delete);

/**
 * Delivery problems
 */

// Shows all
routes.get('/delivery/problems', DeliveryProblemController.index);

// Cancel by problem id
routes.delete('/problem/:id/cancel', DeliveryProblemController.delete);

export default routes;
