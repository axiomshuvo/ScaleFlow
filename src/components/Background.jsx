export const Background = () => {
  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(96, 219, 251, 0.3) 0%, transparent 50%)",
        }}
      />
    </div>
  );
};
