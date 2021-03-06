import { connect } from 'react-redux';
import RegisterPage from '../../components/signup/RegisterPage';
import { createUser } from '../../actions/userAction';
import { userCreateLoadingStateSelector } from '../../selectors/userSelectors';

export default connect({ loading: userCreateLoadingStateSelector }, { createUser })(RegisterPage);
