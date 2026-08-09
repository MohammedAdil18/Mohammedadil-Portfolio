import Container from "./Container";

function Section({
  id,
  background = "bg-slate-950",
  children,
}) {
  return (
    <section
      id={id}
      className={`${background} py-24 text-white`}
    >
      <Container>
        {children}
      </Container>
    </section>
  );
}

export default Section;