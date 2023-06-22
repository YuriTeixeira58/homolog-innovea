import { IsIn, IsOptional, IsString } from 'class-validator';

export class findAllArticleDto {
  @IsOptional()
  @IsString()
  query?: string;

  @IsOptional()
  @IsIn(['relevancy', 'popularity', 'publishedAt'])
  sortBy?: string;
}
