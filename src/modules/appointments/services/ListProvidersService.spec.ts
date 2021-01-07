import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import FakeCacheProvider from '@shared/container/providers/CacheProvider/fakes/FakeCacheProvider';
import ListProvidersService from './ListProvidersService';

let fakeUsersRepository: FakeUsersRepository;
let listProviders: ListProvidersService;
let fakeCacheProvider: FakeCacheProvider;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeCacheProvider = new FakeCacheProvider();

    listProviders = new ListProvidersService(
      fakeUsersRepository,
      fakeCacheProvider,
    );
  });

  it('should be able show to list the providers', async () => {
    const userOne = await fakeUsersRepository.create({
      name: 'One',
      email: 'one@example.com',
      password: '123456',
    });

    const userTwo = await fakeUsersRepository.create({
      name: 'Two',
      email: 'two@example.com',
      password: '123456',
    });

    const loggedUser = await fakeUsersRepository.create({
      name: 'Three',
      email: 'three@example.com',
      password: '123456',
    });

    const providers = await listProviders.execute({
      id_user: loggedUser.id,
    });

    expect(providers).toEqual([userOne, userTwo]);
  });
});
