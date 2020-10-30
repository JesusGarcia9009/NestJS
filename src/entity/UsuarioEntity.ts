import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class UsuarioEntity {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({type: 'varchar', length: 50, nullable:false})
  rut: string;

  @Column({type: 'varchar', length: 50, nullable:false})
  nombre: string;

  @Column({type: 'varchar', length: 50, nullable:false})
  apellido_paterno: string;

  @Column({type: 'varchar', length: 50, nullable:false})
  apellido_materno: string;

  @Column({type: 'varchar', length: 200, nullable:false})
  usuario: string;

  @Column({type: 'varchar', length: 200, nullable:false})
  pass: string;
  
}