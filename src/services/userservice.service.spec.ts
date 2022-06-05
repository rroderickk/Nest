import { Test, TestingModule } from '@nestjs/testing';
import { UserserviceService } from './userservice.service';

describe('UserserviceService', () => {
  let service: UserserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserserviceService],
    }).compile();

    service = module.get<UserserviceService>(UserserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
