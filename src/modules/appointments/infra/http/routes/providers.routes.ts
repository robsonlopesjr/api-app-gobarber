import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProvidersController from '@modules/appointments/infra/http/controllers/ProvidersController';
import ProviderDayAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderDayAvailabilityController';
import ProviderMonthAvailabilityController from '@modules/appointments/infra/http/controllers/ProviderMonthAvailabilityController';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';

const providersRouter = Router();
const providersController = new ProvidersController();
const providerDayAvailabilityController = new ProviderDayAvailabilityController();
const providerMonthAvailabilityController = new ProviderMonthAvailabilityController();

providersRouter.use(ensureAuthenticated);

providersRouter.get('/', providersController.index);

providersRouter.get(
  '/:id_provider/month-availability',
  celebrate({
    [Segments.PARAMS]: {
      id_provider: Joi.string().uuid().required(),
    },
  }),
  providerMonthAvailabilityController.index,
);

providersRouter.get(
  '/:id_provider/day-availability',
  celebrate({
    [Segments.PARAMS]: {
      id_provider: Joi.string().uuid().required(),
    },
  }),
  providerDayAvailabilityController.index,
);

export default providersRouter;
