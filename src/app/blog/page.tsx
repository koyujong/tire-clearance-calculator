import { blogPosts } from "@/lib/blogData";
import BlogListClient from "@/components/BlogListClient";

export const metadata = {
  title: "Reading & Content Blog | Reading Time Calculator",
  description: "The latest insights on blog dwell time, reading science, and content marketing strategies for bloggers.",
};

export default function BlogListPage() {
  return <BlogListClient allPosts={blogPosts} />;
}
