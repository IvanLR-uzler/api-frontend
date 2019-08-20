import React, { Fragment} from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//Components
import Header from './components/Header'
//import Prueba from './components/Prueba'
import Students from './components/Students'
import  EditStudent from './components/UpdateStudent/EditStudent'
import NewStudent from './components/RegisterStuden/NewStudent'



const client = new ApolloClient({
  uri: 'https://api-iti.herokuapp.com/graphql',
  onError: ({networkError, graphQLErrors}) => {
    console.log('graphqlErrors: ', graphQLErrors);
    console.log('networkErrors: ', networkError);
  
  }
});

function App() {
  return (
    <ApolloProvider client = {client}>
      <Router>
        <Fragment>
          <Header/>
          <div className="container-fluid">
            <Switch>
              <Route exact path="/" component={Students}/>
              <Route exact path="/student/edit/:_id" component={EditStudent}/>
              <Route exact path="/student/new" component={NewStudent}/>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </ApolloProvider>
  );
}
//<Route exact path="/prueba" component={Prueba}/>

export default App;
