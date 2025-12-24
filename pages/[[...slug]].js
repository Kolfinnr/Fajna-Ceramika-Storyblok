import { StoryblokComponent, useStoryblokState } from "@storyblok/react";
import { getStoryblokApi } from "@storyblok/react";

export default function Page({ story }) {
  // Enables live updates in the Visual Editor
  story = useStoryblokState(story);

  return (
    <main style={{ padding: 24 }}>
      {story ? <StoryblokComponent blok={story.content} /> : <p>Not found</p>}
    </main>
  );
}

export async function getStaticProps(context) {
  const sbApi = getStoryblokApi();

  // slug becomes [] for "/", or ["store"] for "/store"
  const slugArray = context.params?.slug || [];
  const slug = slugArray.length ? slugArray.join("/") : "home";

  const version =
    context.preview || context.query?._storyblok ? "draft" : "published";

  try {
    const { data } = await sbApi.get(`cdn/stories/${slug}`, {
      version,
    });

    return {
      props: {
        story: data?.story ?? null,
        // Next.js requires serializable props
        key: data?.story?.id ?? null,
      },
      revalidate: 60, // refresh content every minute
    };
  } catch (e) {
    return {
      props: { story: null },
      revalidate: 60,
    };
  }
}

export async function getStaticPaths() {
  // Keep it simple: Next will generate pages on-demand
  return { paths: [], fallback: "blocking" };
}
