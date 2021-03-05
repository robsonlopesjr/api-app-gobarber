import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderMonthAvailabilityService from '@modules/appointments/services/ListProviderMonthAvailabilityService';

class ProviderMonthAvailabilityController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { id_provider } = request.params;

    const { month, year } = request.query;

    const listProviderMonthAvailability = container.resolve(
      ListProviderMonthAvailabilityService,
    );

    const availability = await listProviderMonthAvailability.execute({
      id_provider,
      month: Number(month),
      year: Number(year),
    });

    return response.json(availability);
  }
}

export default ProviderMonthAvailabilityController;
