import { Postcard } from "./postcard";
export function Postlist() {
  return (
    <div
      style={{
        textAlign: "center",

        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <Postcard
        title="First post"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, ab maiores corporis sit eaque dolor labore reiciendis culpa a cumque animi incidunt obcaecati quis libero. "
        createby="hari"
        date={new Date("2022-1-20")}
      />
      <Postcard
        title="second post"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, ab maiores corporis sit eaque dolor labore reiciendis culpa a cumque animi incidunt obcaecati quis libero. "
        createby="sam"
        date={new Date("2023-1-20")}
      />
      <Postcard
        title="third post"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, ab maiores corporis sit eaque dolor labore reiciendis culpa a cumque animi incidunt obcaecati quis libero. "
        createby="david"
        date={new Date("2024-1-20")}
      />
    </div>
  );
}
