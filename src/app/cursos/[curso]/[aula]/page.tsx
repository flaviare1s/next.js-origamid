import { getAula } from "@/api/cursos";
import Link from "next/link";

export default async function AulaPage(props: {
  params: Promise<{ curso: string; aula: string }>;
}) {
  const params = await props.params;
  const aula = await getAula(params.curso, params.aula);
  return (
    <main>
      <Link href={`/cursos/${params.curso}`}>{params.curso}</Link>
      <h1>{aula.nome}</h1>
      <p>{aula.descricao}</p>
      <p>Tempo: {aula.tempo}</p>
    </main>
  );
}
