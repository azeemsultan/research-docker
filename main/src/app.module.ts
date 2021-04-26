import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://raja:zqqpezRtdW2ZkhIy@tarar.sinqh.mongodb.net/<dbname>?retryWrites=true&w=majority',{
      autoCreate:true
    }),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
