import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { UsuarioEntity } from './UsuarioEntity';
import { PerfilEntity } from './PerfilEntity';

@Entity('usuario_perfil')
export class Usuario_PerfilEntity {
  @PrimaryGeneratedColumn()
  id_usuario_perfil: number;

  @OneToMany(() => Usuario_PerfilEntity, UsuarioEntity => UsuarioEntity.id_perfil, { nullable: true })
  @Column({type: 'number', nullable:false})
  id_usuario: number;

  @OneToMany(() => Usuario_PerfilEntity, PerfilEntity => PerfilEntity.id_perfil, { nullable: true })
  @Column({type: 'number', nullable:false})
  id_perfil: number;

}