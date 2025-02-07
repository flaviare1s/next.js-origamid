type PageParams = {
  params: {
    slug: string[];
  };
}

export default async function CursosPage({ params }: PageParams) {
    console.log(params);

  return (
    <main>
      <h1>{params.slug.join("/")}</h1>
    </main>
  );
}
