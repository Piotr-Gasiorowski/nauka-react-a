import {connect} from 'react-redux';
import Column from './Column.js';

export const getCardsForColumn = ({cards}, listId) => cards.filter(card => card.listId == listId);

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

export default connect(mapStateToProps)(Column);