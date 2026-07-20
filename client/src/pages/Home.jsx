import Container from '../components/ui/Container';

function Home() {
  return (
    <Container
      as="main"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center"
    >
      <p className="font-mono text-sm uppercase tracking-widest text-ink-soft">Under construction</p>
      <h1 className="text-3xl font-bold md:text-5xl">Portfolio in progress</h1>
    </Container>
  );
}

export default Home;