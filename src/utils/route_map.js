import history from './history';


const getRoute = ({route}) => {
  switch (route) {
    case 'dashboard':
      history.push('/dashboard');
      break;
    case 'production/groups':
      return history.push('/production/groups');
    case 'production/members':
      return history.push('/production/members');
    case 'stagging/dashboard':
      return history.push('/stagging/dashboard');
    case 'stagging/groups':
      return history.push('/stagging/groups');
    case 'stagging/migration':
      return history.push('stagging/migration');
    case 'support/logs':
      return history.push('/support/logs');
    case 'support/balances':
      return history.push('/support/balances');
    case 'support/loan-requests':
      return history.push('/support/loan-requests');
    case 'providers/providers':
      return history.push('/providers/providers');
    case 'providers/products':
      return history.push('/providers/products');
    case 'providers/orders':
      return history.push('/providers/orders');
    default:
      break;
  }
};

export { getRoute };
