import { useLoaderData } from '@remix-run/react';
import styles from './leasing.module.css'

console.log(styles)

export default (args) => {
    const r = useLoaderData()

    console.log(args)

    return <div className="text-xxxx">9999</div>
}