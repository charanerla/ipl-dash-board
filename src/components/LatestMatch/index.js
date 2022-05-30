// Write your code here
import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    // id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    secondInnings,
    firstInnings,
    // matchStatus,
  } = matchDetails
  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Match</h1>
      <div className="latest-match">
        <div className="opponent-team-container">
          <div className="opp-team-date-venue-status-unordered-list">
            <p className="opponent-team">{competingTeam}</p>

            <p className="date">{date}</p>

            <p className="list-item">{venue}</p>
            <p className="list-item">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="opponent-team-logo"
          />
        </div>
        <div className="match-summery-unordered-list">
          <p className="list-item">First Innings</p>
          <p className="list-item">{firstInnings}</p>
          <p className="list-item">Second Innings</p>
          <p className="list-item">{secondInnings}</p>
          <p className="list-item">Man Of The Match</p>
          <p className="list-item">{manOfTheMatch}</p>
          <p className="list-item">Umpires</p>
          <p className="list-item">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
