import Counter from "../islands/Counter.tsx";
import { Handler, Handlers, PageProps } from "$fresh/server.ts";
import { Author, Post } from "blog/types.ts";
import { laserTagPosts } from "blog/posts.ts"

export const handler: Handlers<Post[]> = {
  GET: async (req, ctx) => {
    const posts: Post[] = laserTagPosts
    const res = await ctx.render(posts);
    return res;
  },
};

export default function Home(props: PageProps<Post[]>) {
  return (
    <>
      <header>
        Welcome to my super cool blog!
      </header>
      <ul>
        {props.data.map((p) => (
          <li>
            <a href={`/post/${p.id}`}>{p.title}</a>
          </li>
        ))}
      </ul>
      <h3>Here, play with a counter</h3>
      <Counter start={0} />
    </>
  );
}
