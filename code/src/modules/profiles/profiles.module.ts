import { Module } from '@nestjs/common';
import { PrismaService } from '../../services/prisma/prisma.service';
import { ProfilesResolver } from './profiles.resolver';
import { ProfilesService } from './profiles.service';

@Module({
  providers: [ProfilesResolver, ProfilesService, PrismaService],
})
export class ProfilesModule {}
