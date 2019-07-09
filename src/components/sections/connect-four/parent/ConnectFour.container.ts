import { connect } from "react-redux";
import { Dispatch } from "redux";

import * as actionCreators from "../../../../store/actions/actions";
import { GameState } from "../../../../core/models/state.model";
import ConnectFourComponent, {
  OwnProps,
  ConnectedState,
  ConnectedDispatch
} from "./ConnectFour.component";

const mapStateToProps = (state: GameState): ConnectedState => ({
  boardSizeConfig: state.boardSizeConfig
});

const mapDispatchToProps = (dispatch: any): ConnectedDispatch => ({
  onBoardSizeChange: (number: number) =>
    dispatch(actionCreators.setBoardConfiguration(number))
});

export const ConnectFourContainer: React.ComponentClass<OwnProps> = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectFourComponent);
