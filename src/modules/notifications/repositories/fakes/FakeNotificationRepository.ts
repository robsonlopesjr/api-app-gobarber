import { ObjectID } from 'mongodb';

import INotificationRepository from '@modules/notifications/repositories/INotificationRepository';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';

class FakeNotificationRepository implements INotificationRepository {
  private notifications: Notification[] = [];

  public async create({
    content,
    id_recipient,
  }: ICreateNotificationDTO): Promise<Notification> {
    const notification = new Notification();

    Object.assign(notification, { id: new ObjectID(), content, id_recipient });

    this.notifications.push(notification);

    return notification;
  }
}

export default FakeNotificationRepository;
