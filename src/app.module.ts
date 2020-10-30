import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { AplicacionModule } from './modules/aplicacion/aplicacion.module';
import { AplicacionController } from './modules/aplicacion/controllers/aplicacion.controller';

@Module({
  imports: [DatabaseModule, AplicacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
