import { Controller, Post, Get, Param, Put, Body, Delete } from '@nestjs/common';
import { AplicacionService } from '../services/aplicacion.service';
import { AplicacionModel } from 'src/models/AplicacionModel';

@Controller('aplicacion')
export class AplicacionController {
    constructor(private  aplciacionServices:AplicacionService){
	}

	@Post()
	addProdut(@Body() aplicacionModel:AplicacionModel):any{

		return this.aplciacionServices.saveAplication(aplicacionModel); 
	}

	@Get('all')
	getProduct():any{
	
		return  this.aplciacionServices.findAll();
	}

	@Get(':id')
	getOneProduct(@Param() params):any{
		return this.aplciacionServices.findOnAplication(params.id);
	}

	@Put(':id')
	updateProduct(@Body() aplicacionModel:AplicacionModel, @Param() params):any{
        return   this.aplciacionServices.updateAplication(params.id, aplicacionModel);
	}

	@Delete(':id')
	deleteProducto( @Param() params):any{
		return  this.aplciacionServices.deleteAplication(params.id);
	}

}
