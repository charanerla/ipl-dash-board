// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = matchDetails
  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="opponent-team-logo"
      />
      <p className="opponent-team">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatus === 'Lost' ? 'lost' : 'won'}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
