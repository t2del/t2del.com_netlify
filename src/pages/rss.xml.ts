import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { HOME } from "@consts";

type Context = {
  site: string
}

export async function GET(context: Context) {
// Fetch blog posts from WordPress
  const blogPosts = await fetch("https://your-wordpress-site.com/wp-json/wp/v2/posts")
    .then(res => res.json())
    .then(posts => posts.map((post: any) => ({
      data: {
        title: post.title.rendered,
        desc: post.excerpt.rendered,
        date: post.date,
      },
      collection: "blog",
      slug: post.slug,
    })));

  const projects = (await getCollection("projects"))
    .filter(project => !project.data.draft);

  const items = [...projects, ...blogPosts]
    .sort((a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf());

  return rss({
    title: HOME.TITLE,
    description: HOME.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.desc,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.slug}/`,
    })),
  });
}
