import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/link'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick() {
            dispatch(setVisibilityFilter(ownProps.filter))
        },
        onChange() {
            console.log(1);
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink
