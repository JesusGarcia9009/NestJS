import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AplicacionEntity } from '../../entity/aplicacionEntity'

@Module({
	imports:[
		TypeOrmModule.forRoot({
			type: 'postgres',// type database  
			host:'localhost',//server  database
			port:5432, // port the database
			username:'postgres', //user database
			password: 'postgres', 
			database:'demo-nestjs',
			entities:[ AplicacionEntity ],
			synchronize:false
		}),
	]
})

export class DatabaseModule {}
