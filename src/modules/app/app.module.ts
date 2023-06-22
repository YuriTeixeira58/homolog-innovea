import { Module } from '@nestjs/common';
import { ArticleModule } from '../articles/article.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), ArticleModule],
})
export class AppModule {}
