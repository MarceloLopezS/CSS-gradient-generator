import {
  TOGGLE_THEME,
  TOGGLE_PANEL_DISPLAY,
  SET_GRADIENT_STYLE,
  SET_LINEAR_DIRECTION,
  SET_RADIAL_POSITION,
  SET_CONIC_START_ANGLE,
  SET_RADIAL_SHAPE
} from "../../config/actions"
import {
  toggleTheme,
  togglePanelDisplay,
  setGradientStyle,
  setLinearDirection,
  setRadialPosition,
  setConicStartAngle,
  setRadialShape
} from "../../model/actionHandlers"

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return toggleTheme(state)
    case TOGGLE_PANEL_DISPLAY:
      return togglePanelDisplay(state)
    case SET_GRADIENT_STYLE:
      return setGradientStyle(state, action)
    case SET_LINEAR_DIRECTION:
      return setLinearDirection(state, action)
    case SET_RADIAL_POSITION:
      return setRadialPosition(state, action)
    case SET_RADIAL_SHAPE:
      return setRadialShape(state, action)
    case SET_CONIC_START_ANGLE:
      return setConicStartAngle(state, action)
    default: {
      console.error(`Unknown action: ${action.type}`)
      return state
    }
  }
}

export default rootReducer