
import { Link } from 'react-router-dom';
import Todo from '../components/blocks/Todo'

const Sub = () => {
    return (
        <div>
          <Link to="/">
            <button>test</button>
          </Link>
          <Todo />
        </div>
      );
}

export default Sub;