export function Postcard(props: { title: string; description: string }) {
  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "15px auto",
        border: "1px solid #aaa",
        padding: "15px",
      }}
    >
      <h1
        style={{
          color: "#9e9e9e",
        }}
      >
        {props.title}
      </h1>
      <p>{props.description}</p>
    </div>
  );
}
