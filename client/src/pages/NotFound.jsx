import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

function NotFound() {
  return (
    <Container
      as="main"
      className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center gap-4 text-center"
    >
      <p className="font-mono text-sm text-ink-soft">404</p>
      <h1 className="text-2xl font-bold md:text-3xl">Page not found</h1>
      <Button to="/" variant="secondary" className="mt-2">
        Back home
      </Button>
    </Container>
  );
}

export default NotFound;
