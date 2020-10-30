import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('aplicacion')
export class AplicacionEntity {
  @PrimaryGeneratedColumn()
  id_aplicacion: number;

  @Column({type: 'varchar', length: 200, nullable:false})
  url: string;

  @Column({type: 'varchar', length: 50, nullable:false})
  nombre: string;

  @Column({type: 'varchar', length: 50, nullable:false})
  descripcion: string;

  @Column({type: 'varchar', length: 50, nullable:false})
  icono: string;

  @Column({type: 'varchar', length: 50, nullable:false})
  color: string;

}