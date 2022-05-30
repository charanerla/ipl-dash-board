// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isDataLoaded: false, teamDetails: {}}

  componentDidMount = () => {
    this.getTheDetailsOfSpecificTeam()
  }

  getTheDetailsOfSpecificTeam = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/ipl/${id}`
    const response = await fetch(url)
    const teamMatchesDetails = await response.json()
    const bannerUrl = teamMatchesDetails.team_banner_url
    const recentMatchesDetails = teamMatchesDetails.recent_matches
    const updatedRecentMatchesDetails = recentMatchesDetails.map(eachMatch => ({
      competingTeam: eachMatch.competing_team,
      umpires: eachMatch.umpires,
      result: eachMatch.result,
      manOfTheMatch: eachMatch.man_of_the_match,
      id: eachMatch.id,
      date: eachMatch.date,
      venue: eachMatch.venue,
      competingTeamLogo: eachMatch.competing_team_logo,
      firstInnings: eachMatch.first_innings,
      secondInnings: eachMatch.second_innings,
      matchStatus: eachMatch.match_status,
    }))
    const latestMatchDetails = teamMatchesDetails.latest_match_details
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }
    this.setState({
      isDataLoaded: true,
      teamDetails: {
        bannerUrl,
        updatedRecentMatchesDetails,
        updatedLatestMatchDetails,
      },
    })
  }

  loader = () => (
    <div testid="loader">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  loadPage = () => {
    const {teamDetails} = this.state
    const {
      bannerUrl,
      updatedLatestMatchDetails,
      updatedRecentMatchesDetails,
    } = teamDetails
    return (
      <div className="banner-latest-recent-matches-container">
        <img src={bannerUrl} alt="team banner" className="banner" />
        <LatestMatch matchDetails={updatedLatestMatchDetails} />
        <ul className="previous-match-details-unordered-list">
          {updatedRecentMatchesDetails.map(eachMatch => (
            <MatchCard matchDetails={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isDataLoaded} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div className="team-container" id={id}>
        {!isDataLoaded ? this.loader() : this.loadPage()}
      </div>
    )
  }
}
export default TeamMatches
