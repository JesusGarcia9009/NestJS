# NestJS

Repositorio asociado a la creacion de un microservicio de nodejs utilizando el framework NEST JS 

## Pre-requisitos 🚀
* [Node JS](https://nodejs.org/es/) - Node.js® es un entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
* [PostgreSQL](https://www.postgresql.org/) - Gestor de base de datos


## Comenzando 🚀

Ejecutar comando para la instalacion del framework nestjs

```
npm i -g @nestjs/cli
```
Una vez instalado podemos crear nuestro primer proyecto Nest ejecutando el comando:

```
nest new project-name
```

Luego de crado nuestro primer proyecto Nest deberiamos conectar a la base de datos para ello necesitariamos configurar TypeORM Integration, instalamos la dependencia via consola ejecutando el siguiente comando:

```
npm install --save @nestjs/typeorm typeorm ´´mysql, pg, oracle´´
```

Una vez instalado ya podemos importar4 la dependecia en el fichero > AppModule

```
app.module.tsJS

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```