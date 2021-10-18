import React from 'react';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const routes = [
    { toPath: '/modal-demo', label: 'Modal Proper' },
    { toPath: '/modal-working-demo', label: 'Modal Workshop' },
    { toPath: '/todo', label: 'Todo Workshop' },
  ];
  return (
    <div className={styles.Navigation} data-testid="Navigation">
      {routes.length && (
        <ul>
          {routes.map(route =>
            <li key={route.toPath}>
              <Link to={route.toPath}>{route.label}</Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
