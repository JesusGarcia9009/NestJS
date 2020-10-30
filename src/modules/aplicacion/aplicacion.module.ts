import { Module } from '@nestjs/common';
import { AplicacionService } from './services/aplicacion.service';
import { AplicacionController } from './controllers/aplicacion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AplicacionEntity } from 'src/entity/aplicacionEntity';

@Module({
  imports:[
		TypeOrmModule.forFeature([AplicacionEntity])
	],
  controllers: [AplicacionController],
  providers: [AplicacionService]
})
export class AplicacionModule {}
