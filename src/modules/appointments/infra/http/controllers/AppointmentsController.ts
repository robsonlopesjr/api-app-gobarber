import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { id_provider, date } = request.body;
    const id_user = request.user.id;

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      id_provider,
      id_user,
      date,
    });

    return response.json(appointment);
  }
}

export default AppointmentsController;
