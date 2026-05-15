import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Tambahkan @Global() agar module ini bisa diakses di mana saja tanpa perlu di-import berulang-ulang
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export PrismaService
})
export class PrismaModule {}