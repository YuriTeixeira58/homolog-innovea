import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  QueryAndOrderParams,
  FindAllResponse,
} from '../interfaces/findAll.interface';
@Injectable()
export class getAllArticlesService {
  private apiKey = this.configService.get('NEWS_API_KEY');

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  async findAll(params: QueryAndOrderParams): Promise<FindAllResponse> {
    const items = [];
    const { data } = await this.httpService.axiosRef.get(
      `${this.configService.get('NEWS_API_BASE_URL')}?q=${
        params.query
      }&sortBy=${params.sortBy}&apiKey=${this.apiKey}`,
    );

    data.articles.map((result) => {
      items.push({
        name: result.author,
        title: result.title,
        description: result.description,
      });
    });

    return {
      ...data,
      articles: items,
    };
  }
}
