import { Dispatch } from "redux"
import ajax from "util/ajax"
export const getList = () => (dispatch: Dispatch) => {
  ajax
    .get("/discover/movie", {
      params: {
        "primary_release_date.gte": "2014-09-15",
        "primary_release_date.lte": "2014-10-22"
      }
    })
    .then(response => {
      console.log(response)
    })
}
