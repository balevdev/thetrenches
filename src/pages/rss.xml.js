import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

// Strip HTML tags from titles for RSS feed
function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '');
}

export async function GET(context) {
  const posts = await getCollection('blog', ({ data }) => {
    return data.draft !== true;
  });

  return rss({
    title: 'The Trenches',
    description: 'Practical engineering insights from the frontlines. Deep dives into data architecture, infrastructure economics, and system design.',
    site: context.site,
    items: posts
      .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
      .map((post) => ({
        title: stripHtml(post.data.title),
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
        categories: post.data.tags,
      })),
    customData: `<language>en-us</language>`,
  });
}
