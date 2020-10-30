import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('perfil')
export class PerfilEntity {
  @PrimaryGeneratedColumn()
  id_perfil: number;

  @Column({type: 'varchar', length: 100, nullable:false})
  nombre: string;

  @Column({type: 'varchar', length: 200, nullable:false})
  descripcion: string;

}