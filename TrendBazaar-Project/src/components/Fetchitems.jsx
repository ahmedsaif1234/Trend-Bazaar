import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
    const fetchStatus = useSelector((store) => store.fetchStatus);
    const dispatch = useDispatch();
    console.log(fetchStatus);
  
    useEffect(() => {
      if (fetchStatus.fetchDone) return;
  
      const controller = new AbortController();
      const signal = controller.signal;
  
      dispatch(fetchStatusActions.markfetchingStarted())

      fetch("http://localhost:8080/items", { signal })
        .then((res) => res.json())
        .then(({ items }) => {
          dispatch(fetchStatusActions.markfetchDone());
          dispatch(fetchStatusActions.markfetchingFinished());
          dispatch(itemsActions.addInitialItems(items[0]));
        });
  
      return () => {
        controller.abort();
      };
    }, [fetchStatus]);
  
    return <></>;
  };
  
  export default FetchItems;