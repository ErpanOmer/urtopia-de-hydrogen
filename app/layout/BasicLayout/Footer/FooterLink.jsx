import { Link } from '~/components';

export default function ({item}) {
    if (item.to.startsWith('http')) {
      return (
        <a href={item.to} target={item.target} rel="noopener noreferrer">
          {item.title}
        </a>
      );
    }
  
    return (
      <Link to={item.to} target={item.target} prefetch="intent">
        {item.title}
      </Link>
    );
  }