export function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "60px",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <img
        style={{
          width: "150px",
        }}
        src="/images/logo.png"
        alt="logo"
      />

      {/* input box for search */}
      <input
        style={{
          padding: "5px",
          width: "420px",
          outline: "none",
        }}
        placeholder="search posts"
        type="text"
        name="search"
      />
    </div>
  );
}
