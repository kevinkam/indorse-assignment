import * as React from "react"
import ReactDOM from "react-dom"
import { Switch, Route, Router } from "react-router-dom"
import loadable from "react-loadable"
import createBrowserHistory from "history/createBrowserHistory"

const history = createBrowserHistory()

const List = loadable({
  loader: () => import("./List"),
  loading: () => <div />
})

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={List} />
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
