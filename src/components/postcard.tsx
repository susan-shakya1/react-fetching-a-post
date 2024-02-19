export function Postcard(props: {
  title: string;
  description: string;
  createby: string;
  date: Date;
}) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{props.createby}</p>
      <p>{props.date.toISOString()}</p>
    </div>
  );
}
