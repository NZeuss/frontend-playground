import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/products/')({
  component: RouteComponent,
});

function RouteComponent() {
  console.log('products index rendered');
  return null;
}
