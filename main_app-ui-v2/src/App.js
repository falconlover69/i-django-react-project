import { Switch, Route, BrowserRouter as Router, useHistory } from 'react-router-dom'
import { Provider } from './context';

import Navbar from './components/Navbar/Navbar';
import Intro from './components/Main/Intro';
import Posts from './components/Posts/Posts';
import Footer from './components/Footer/Footer';
import Tracks from './components/Music/Tracks';
import Videos from './components/Video/Videos';
import NotFound from './components/404/NotFound';
import Lk from './components/PersonalArea/Lk';

function App() {

  const history = useHistory()

  return (
    <div className="App">
      <Provider>
        <Router>
          <Navbar />

          <Switch>

            <Route path="/" exact component={Intro} key="main-page"/>
            <Route path="/posts/" exact component={Posts} key="posts-page"/>
            <Route path="/music/" exact component={Tracks} key="tracks-page"/>
            <Route path="/video/" exact component={Videos} key="videos-page"/>
            <Route path="/lk/" exact component={Lk} key="personalArea-page"/>
            <Route exact component={NotFound} />

          </Switch>
          <Footer />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
