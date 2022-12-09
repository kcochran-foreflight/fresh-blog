import { asset, Head } from "$fresh/runtime.ts";

interface Props {
  pageTitle?: string;
}

export default function SharedHead(props: Props) {
  const title = props.pageTitle || 'My Blog'

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
      <link rel="stylesheet" href={asset("/global.css")} />
    </Head>
  );
}
