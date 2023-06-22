import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { getAllArticlesService } from './services/get-all-articles.service';
import { ArticleController } from './controllers/article.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, HttpModule],
  controllers: [ArticleController],
  providers: [getAllArticlesService],
})
export class ArticleModule {}
