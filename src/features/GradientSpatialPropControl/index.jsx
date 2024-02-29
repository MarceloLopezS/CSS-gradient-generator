import { useStoreData, dispatch } from "../../shared/state/store"
import { LINEAR, RADIAL, CONIC } from "../../shared/utils/constants"
import ButtonGrid from "../../shared/ui/ButtonGrid"
import ButtonsLinearGradient from "./ui/ButtonsLinearGradient"
import ButtonsRadialGradient from "./ui/ButtonsRadialGradient"
import ButtonsConicGradient from "./ui/ButtonsConicGradient"

const setTitle = gradientStyle => {
  if (gradientStyle === RADIAL) return "Position"
  if (gradientStyle === CONIC) return "Start Angle"

  return "Direction"
}

const GradientDirectionControl = () => {
  const style = useStoreData(state => state.gradientStyle)
  const direction = useStoreData(state => state.linearDirection)
  const position = useStoreData(state => state.radialPosition)
  const startAngle = useStoreData(state => state.conicStartAngle)
  const dispatchAction = (type, payload) => () => dispatch({ type, payload })

  return (
    <section>
      <p className="text-bold margin-block-end-50">{setTitle(style)}</p>
      <ButtonGrid>
        {style === LINEAR ? (
          <ButtonsLinearGradient
            currentDirection={direction}
            dispatcher={dispatchAction}
          />
        ) : style === RADIAL ? (
          <ButtonsRadialGradient
            currentPosition={position}
            dispatcher={dispatchAction}
          />
        ) : (
          style === CONIC && (
            <ButtonsConicGradient
              currentStartAngle={startAngle}
              dispatcher={dispatchAction}
            />
          )
        )}
      </ButtonGrid>
    </section>
  )
}

export default GradientDirectionControl
