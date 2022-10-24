import './EnemyGrid.scss';
const GRID_COUNT = 100;
const EnemyGrid = () => {
    const generateGrid = () => {
        let arr = [];
        for (let i = 0; i < GRID_COUNT; i++) {
            arr.push(<div key={i} className='waterCell'></div>);
        }
        return arr;
    }
    return (
        <div className='enemyGrid'>{generateGrid()}</div>
    )
}

export default EnemyGrid