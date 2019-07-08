import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as Actions from '../../../../core/actions/actions';
import { GameState } from '../../../../core/models/state.model';
import ConnectFourComponent, {
  OwnProps,
  ConnectedState,
  ConnectedDispatch
} from './ConnectFour.component';

const mapStateToProps = (state: GameState): ConnectedState => ({
  boardSizeConfig: state.boardSizeConfig
});

const mapDispatchToProps = (dispatch: Dispatch): ConnectedDispatch => ({
  setBoardConfigNumber: (number: number) =>
    dispatch(Actions.setBoardConfigNumber(number))
});

export const ConnectFourContainer: React.ComponentClass<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectFourComponent);
