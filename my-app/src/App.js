import React from 'react';
import './App.css';
import axios from 'axios';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersCard';


class App extends React.Component {
  state = {
    user: [],
    followers: []
  };

  componentDidMount() {
    axios.get(`https://api.github.com/users/ian-schwartz`)
    .then(res => {
      this.setState({
        user: res.data
      });
    })
    axios.get(`https://api.github.com/users/ian-schwartz/followers`)
    .then(res => {
      this.setState({
        followers: res.data
      });
    })
    .catch(err => console.log(err))
  }
  
render() {
  return (
    <div className="App">
     <h1>Github</h1>
     <div className="user-card">
     <UserCard key={this.state.user.id} avatar={this.state.user.avatar_url} login={this.state.user.login} location={this.state.user.location} bio={this.state.user.bio} />
     </div>

     <div className="follower-card">
       <h2>My Followers</h2>
     {this.state.followers.map(item => (
           <FollowersCard key={item.id} item={item}/>
     ))}
     </div>
  </div>
  );
 }
}

export default App;
