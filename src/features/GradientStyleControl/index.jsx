import { useContext } from "react"
import { LINEAR, CIRCULAR, CONIC } from "../../shared/utils/constants"
import { capitalizeString } from "../../shared/utils/functions"
import { SET_GRADIENT_STYLE } from "../../shared/state/config/actions"
import { StoreContext, StoreDispatchContext } from "../../shared/state/store"
import ButtonGrid from "../../shared/ui/ButtonGrid"
import ControlButton from "../../shared/ui/ControlButton"

const styleOptions = [LINEAR, CIRCULAR, CONIC]

const GradientStyleControl = () => {
  const { gradientOptions } = useContext(StoreContext)
  const dispatch = useContext(StoreDispatchContext)

  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section className="control-panel__styles">
      <p className="text-bold margin-block-end-50">Style</p>
      <ButtonGrid>
        {styleOptions.map((styleOption, index) => {
          return (
            <ControlButton
              key={index}
              selected={gradientOptions.style === styleOption}
              onClick={dispatchAction(SET_GRADIENT_STYLE, {
                style: styleOption
              })}
            >
              {capitalizeString(styleOption)}
            </ControlButton>
          )
        })}
      </ButtonGrid>
    </section>
  )
}

export default GradientStyleControl
