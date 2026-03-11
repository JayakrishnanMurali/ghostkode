import { getBlogPosts } from "app/db/blog";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `https://jkayy.in/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/project", "/work"].map((route) => ({
    url: `https://jkayy.in${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
