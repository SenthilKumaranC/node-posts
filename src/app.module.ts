import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://mongodb:mongodb@cluster0.k4ntk.mongodb.net/firebook?retryWrites=true&w=majority'), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
