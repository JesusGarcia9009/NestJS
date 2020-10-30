import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AplicacionEntity } from '../../../entity/aplicacionEntity';

@Injectable()
export class AplicacionService {
    constructor( 
		@InjectRepository(AplicacionEntity) 
		private readonly  AplicationRepository:Repository<AplicacionEntity>){

	}
	async saveAplication(AplicacionEntity:any){
			await this.AplicationRepository.insert(AplicacionEntity);
			return AplicacionEntity
	}

	async updateAplication(id:number, AplicacionEntity:any){
		await this.AplicationRepository.update(id,AplicacionEntity);
	}

	async findAll(){
		return await this.AplicationRepository.find();
	}
	
	async findOnAplication( id:number){
		return  await this.AplicationRepository.findOne(id);
	}
	
	async deleteAplication(id:number){
		return  await this.AplicationRepository.delete(id);
	}

}
