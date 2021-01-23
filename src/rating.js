export default function Rating({ current, max }) {
  const stars = [];

  for (let i = 0; i < max; i++) {
    const sym = i < current ? "★" : "☆";
    stars.push(<span key={i}>{sym}</span>);
  }

  return (
    <div
      style={{
        fontSize: "40px",
        color: "hsl(36deg 100% 56%)",
      }}
    >
      {stars}
    </div>
  );
}
