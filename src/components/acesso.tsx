import fs from "fs/promises";

export default async function Acesso() {

  await fs.appendFile("acesso.txt", `${Date.now()}\n`, "utf-8");
  const data = await fs.readFile("acesso.txt", "utf-8");
  return <div>{data}</div>
}
