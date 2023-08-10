import { useLoaderData } from '@remix-run/react';

export default (args) => {
    const r = useLoaderData()

    console.log(args)

    return <div className="text-xxxx">9999</div>
}