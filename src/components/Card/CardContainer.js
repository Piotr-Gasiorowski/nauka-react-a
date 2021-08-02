import {connect} from 'react-redux';
import List from './List';
import { getCardsForList } from '../../redux/cardsRedux.js';
import { createActionAddCard } from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForList(state, props.id),
});
const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard ({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);