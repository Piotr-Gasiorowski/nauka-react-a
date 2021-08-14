import {connect} from 'react-redux';
import Home from './Home';

const mapStateToProps = state => ({
  subtitle: state.app.subtitle,
  title: state.app.title,
  lists: state.lists,
});

export default connect(mapStateToProps)(Home);