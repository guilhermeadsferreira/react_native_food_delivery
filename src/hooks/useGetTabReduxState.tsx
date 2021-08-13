import {useSelector} from 'react-redux';
import {ApplicationState} from '~/redux';

const useGetTabReduxState = () => {
  const {tab} = useSelector((state: ApplicationState) => state);

  return tab;
};

export default useGetTabReduxState;
