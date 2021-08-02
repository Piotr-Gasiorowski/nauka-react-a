import {connect} from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  subtitle: state.app.subtitle,
  title: state.app.title,
  lists: state.lists,
});

export default connect(mapStateToProps)(App);