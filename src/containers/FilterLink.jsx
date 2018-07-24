import Link from "../components/Link";
import { setVisibilityFilter } from "../actions";
import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: dispatch(setVisibilityFilter(ownProps.filter))
});

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink