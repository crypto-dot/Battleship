import './FriendlyUI.scss';
import EnemyGrid from './EnemyGrid';
const FriendlyUI = () => {

    return (
        <div className='friendlyUI'>
            <h1>
                Computer's Board
            </h1>
            <EnemyGrid></EnemyGrid>
        </div>
    )
}

export default FriendlyUI;