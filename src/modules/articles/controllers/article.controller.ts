import { Controller, Get, Param, Query } from '@nestjs/common';
import { getAllArticlesService } from '../services/get-all-articles.service';
import { findAllArticleDto } from '../dto/find-all-article.dto';

@Controller()
export class ArticleController {
  constructor(private readonly getAllArticles: getAllArticlesService) {}

  @Get()
  findAllArticle(@Query() findAllDto: findAllArticleDto) {
    return this.getAllArticles.findAll({
      query: findAllDto.query,
      sortBy: findAllDto.sortBy,
    });
  }
}
