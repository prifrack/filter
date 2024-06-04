import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TournamentsModule } from './tournaments/tournaments.module';
import { ResultsModule } from './results/results.module';
import { PlayersModule } from './players/players.module';
import { PlayersModule } from './players/players.module';
import { ResultsModule } from './results/results.module';
import { TournamentsModule } from './tournaments/tournaments.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true, // Aquí puedes cambiar a false en producción para desactivar la sincronización automática
      entities: [PlayersEntity, tournamentEntity],
      extra: {
        ssl: true, // Ajusta según la configuración de tu base de datos
      },
    }),
    TypeOrmModule.forFeature([PlayersEntity, tournamentEntity]),
  ],
  controllers: [PlayersController, TournamentController],
  providers: [PlayersService, TournamentService],
})
export class AppModule {