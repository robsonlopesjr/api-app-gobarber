import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListProviderAppointmentsService from '@modules/appointments/services/ListProviderAppointmentsService';

class ProviderAppointmentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const id_provider = request.user.id;

    const { day, month, year } = request.body;

    const listProviderAppointments = container.resolve(
      ListProviderAppointmentsService,
    );

    const appointments = await listProviderAppointments.execute({
      id_provider,
      day,
      month,
      year,
    });

    return response.json(appointments);
  }
}

export default ProviderAppointmentsController;
