import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispath, RootState } from "../store/store";


export const useTypedDispatch = () => useDispatch<AppDispath>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector