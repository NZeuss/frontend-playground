import { Button } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/products/$id/')({
  component: RouteComponent,
});

function RouteComponent() {
  console.log('products $id rendered');

  const { id } = Route.useParams();

  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);


  return (
    <div className="flex flex-col gap-2">
      <div>The product id is {id}</div>
      <div>The number is {counter}</div>
      <Button onClick={() => setCounter(counter + 1)}>Increment</Button>

      <Button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'}
      </Button>

      {show === true && (
        <div>This is some additional information</div>
      )}
    </div>
  );
}
