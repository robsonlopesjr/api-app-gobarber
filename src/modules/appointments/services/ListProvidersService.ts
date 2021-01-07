import { injectable, inject } from 'tsyringe';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import ICacheProvider from '@shared/container/providers/CacheProvider/models/ICacheProvider';

import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  id_user: string;
}

@injectable()
class ListProvidersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('CacheProvider')
    private cacheProvider: ICacheProvider,
  ) {}

  public async execute({ id_user }: IRequest): Promise<User[]> {
    let users = await this.cacheProvider.recover<User[]>(
      `providers-list:${id_user}`,
    );

    if (!users) {
      users = await this.usersRepository.findAllProviders({
        except_user_id: id_user,
      });

      await this.cacheProvider.save(`providers-list:${id_user}`, users);
    }

    return users;
  }
}

export default ListProvidersService;
