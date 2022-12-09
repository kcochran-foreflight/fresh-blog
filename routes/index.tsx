import Counter from "../islands/Counter.tsx";
import { Handler, Handlers, PageProps } from "$fresh/server.ts";
import { Author, Post } from "blog/types.ts";
import { laserTagPosts } from "blog/posts.ts"
import SharedHead from "../components/SharedHead.tsx";

export const handler: Handlers<Post[]> = {
  GET: async (req, ctx) => {
    const posts: Post[] = laserTagPosts
    const res = await ctx.render(posts);
    return res;
  },
};

export default function Home(props: PageProps<Post[]>) {
  return (
    <section className="section">
      <div className="container">
      <SharedHead />
      <h1 className="title">
        Welcome to my super cool blog!
      </h1>
      <h2 className="subtitle">Try clicking some of the links below</h2>
      <div className="content">
      <ul>
        {props.data.map((p) => (
          <li>
            <a className="post-link" href={`/post/${p.id}`}>{p.title}</a>
          </li>
        ))}
      </ul>
      </div>
      <h3>Here, play with a counter</h3>
      <Counter start={0} />
      </div>
    </section>
  );
}
