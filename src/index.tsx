import * as React from "react"
import ReactDOM from "react-dom"
import { Route, Switch } from "react-router-dom"
import loadable from "react-loadable"
import { Provider } from "react-redux"
import { ConnectedRouter } from "connected-react-router"
import store, { history } from "./store"

const List = loadable({
  loader: () => import("./components/List"),
  loading: () => <div />
})

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/" component={List} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
