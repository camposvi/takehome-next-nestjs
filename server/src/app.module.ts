import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { ConfigModule } from '@nestjs/config';
=======
import { ConfigModule, ConfigService } from '@nestjs/config';
>>>>>>> server-development
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/db.config';
<<<<<<< HEAD
import { ConfigService } from '@nestjs/config';
=======
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
>>>>>>> server-development

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
<<<<<<< HEAD
      useFactory: (configService) => typeOrmConfig(configService),
=======
      useFactory: (configService: ConfigService): TypeOrmModuleOptions =>
        typeOrmConfig(configService),
>>>>>>> server-development
      inject: [ConfigService],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
