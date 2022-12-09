import { Handlers, PageProps } from "$fresh/server.ts";
import { Post } from "blog/types.ts";
import { laserTagPosts } from "blog/posts.ts"
import SharedHead from "../../components/SharedHead.tsx";

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
    <div className="content py-5 px-6">
      <SharedHead />
      <h1 className="title">{post.title}</h1>
      <h2 className="subtitle">By {post.author.name}</h2>
      <p>{post.contents}</p>
    </div>
  );
}
