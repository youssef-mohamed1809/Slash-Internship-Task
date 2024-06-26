import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CartModule } from './cart/cart.module';
import { PrismaModule } from './prisma/prisma.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CartModule, PrismaModule, OrdersModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
