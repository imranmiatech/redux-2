import { useSelector, useDispatch } from "react-redux"
import { decrement, increment } from "../redux/dynamicCounter/actions";

const DynamicHooksCounter = () => {
    const count = useSelector((state: any) => state.dynamicCounter.value)
    const dispatch = useDispatch();
    const incrementHandler = (value : any) => {
        dispatch(increment(value))
    }
    const decrementHandler = (value : any) => {
        dispatch(decrement(value))
    }

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <div className="text-2xl font-semibold">{count}</div>

            <div className="flex space-x-3">
                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
            
                    onClick={() => incrementHandler(2)}
                >
                    Increment
                </button>

                <button
                    className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
                     onClick={() => decrementHandler(3)}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default DynamicHooksCounter