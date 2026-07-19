import Container from './components/Container';

// Temporary shell for while the real sections are still being built
// (Navbar Day 3, Hero Day 4, and onward). Replaced incrementally —
// nothing here is meant to be the finished homepage.
function App() {
  return (
    <Container
      as="main"
      className="flex min-h-screen flex-col items-center justify-center gap-4 text-center"
    >
      <p className="font-mono text-sm uppercase tracking-widest text-ink-soft">
        Under construction
      </p>
      <h1 className="text-3xl font-bold md:text-5xl">Portfolio in progress</h1>
    </Container>
  );
}

export default App;
