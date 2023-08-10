export async function loader(...a) {
  throw new Response('Not found', {status: 404});
}

export default function Component() {
  return null;
}
