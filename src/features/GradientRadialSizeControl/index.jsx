import { useStoreData, dispatch } from "../../shared/state/store"
import {
  CLOSEST_CORNER,
  CLOSEST_SIDE,
  FARTHEST_CORNER,
  FARTHEST_SIDE,
  RADIAL
} from "../../shared/utils/constants"
import {
  capitalizeString,
  toSpaceSeparated
} from "../../shared/utils/functions"
import { SET_RADIAL_SIZE } from "../../shared/state/config/actions"
import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"

const availableSizes = [
  CLOSEST_SIDE,
  FARTHEST_SIDE,
  CLOSEST_CORNER,
  FARTHEST_CORNER
]

const GradientRadialSizeControl = () => {
  const size = useStoreData(state => state.gradientOptions[RADIAL].size)
  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section>
      <p className="text-bold margin-block-end-50">Size</p>
      <ButtonGrid columns={2}>
        {availableSizes.map(availableSize => {
          return (
            <ControlButton
              key={availableSize}
              selected={size === availableSize}
              onClick={dispatchAction(SET_RADIAL_SIZE, { size: availableSize })}
            >
              {capitalizeString(toSpaceSeparated(availableSize, "-"))}
            </ControlButton>
          )
        })}
      </ButtonGrid>
    </section>
  )
}

export default GradientRadialSizeControl
