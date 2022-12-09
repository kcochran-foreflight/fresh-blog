import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "blog/types.ts";
import { laserTagPosts } from "blog/posts.ts"

type Data = { post: Post | undefined };

export const handler: Handlers<Data> = {
  GET: (req, ctx) => {
    const post = laserTagPosts.find(p => p.id === ctx.params.postId)
    return ctx.render({post});
  },
};

export default function PostViewer(props: PageProps<Data>) {
  const { postId } = props.params;
  const { post } = props.data
  if (post === undefined) return <h1>Post unavailable</h1>
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>By {post.author.name}</h2>
      <p>{post.contents}</p>
    </div>
  );
}
