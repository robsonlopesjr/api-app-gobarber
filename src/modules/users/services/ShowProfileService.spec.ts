import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUsersRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('ShowProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showProfile = new ShowProfileService(fakeUsersRepository);
  });

  it('should be able show the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'Pedro Álvares Cabral',
      email: 'cabral@example.com',
      password: '123456',
    });

    const profile = await showProfile.execute({
      id_user: user.id,
    });

    expect(profile.name).toBe('Pedro Álvares Cabral');
    expect(profile.email).toBe('cabral@example.com');
  });

  it('should not be able show the profile from non-existing user', async () => {
    await expect(
      showProfile.execute({
        id_user: 'non-existing-user',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
