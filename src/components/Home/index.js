// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {listOfIplTeams: [], isTeamsLoaded: false}

  componentDidMount() {
    this.fetchTheIplTeams()
  }

  fetchTheIplTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const iplTeamsDetails = await response.json()
    const updatedIplList = iplTeamsDetails.teams.map(eachTeam => {
      const newIplTeam = {
        id: eachTeam.id,
        name: eachTeam.name,
        teamImageUrl: eachTeam.team_image_url,
      }
      return newIplTeam
    })
    this.setState({listOfIplTeams: updatedIplList, isTeamsLoaded: true})
  }

  loader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  iplTeams = () => {
    const {listOfIplTeams} = this.state

    return (
      <ul className="unordered-list-of-teams">
        {listOfIplTeams.map(eachTeam => (
          <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isTeamsLoaded} = this.state

    return (
      <div className="home-container">
        <div className="logo-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="ipl-teams-container">
          {!isTeamsLoaded ? this.loader() : this.iplTeams()}
        </div>
      </div>
    )
  }
}

export default Home
