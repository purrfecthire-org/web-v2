import type { APIRoute } from 'astro';
import { articles } from '../../../content/insights';
import type { InsightArticle } from '../../../content/insights';

export const prerender = true;

export function getStaticPaths() {
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: { article },
  }));
}

export const GET: APIRoute = ({ props }) => {
  const { article } = props as { article: InsightArticle };
  const { worksheet } = article;
  const text = [
    worksheet.title,
    '',
    worksheet.instructions,
    '',
    ...worksheet.lines.flatMap((line, index) => [`${index + 1}. ${line}`, '', '', '']),
  ].join('\n');

  return new Response(text, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': `attachment; filename="${article.slug}-worksheet.txt"`,
    },
  });
};
