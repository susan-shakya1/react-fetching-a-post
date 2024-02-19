export function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
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
        }}
        placeholder="search posts"
        type="text"
        name="search"
      />
    </div>
  );
}
