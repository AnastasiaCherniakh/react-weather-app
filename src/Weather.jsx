import './Weather.css'

export default function Weather() {
    return (
        <div className="Weather">
            <form className='search-city'>
                <input type="text" placeholder='Search for a city' autoFocus='on' />
                <button>Search</button>
            </form>
            <section className='current-weather-info'>
                <div className="current-weather-details">
                    <h1 className='city-name'>Vienna</h1>
                    <span className='current-date'>Thursday 13:00</span>
                    <h2 className='current-temperature'>16°<span className='temperature-unit'>C | F</span></h2>
                    <p className='feels-like'>16° / 8° Feels like 16°</p>
                </div>
                <div className="current-weather-icon">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAZ9JREFUaN7tmdGNgzAMhhmBERiBEVjgJEbICIyQERiBTS4j5JU3RmCDnHNyq1wE1A4Jl0iJ9KtqVdv/R+xA1cYY05Ssos1XgCwBOGtd1x4kPfVNwhUFAI1rkDmRTgVyGwCMiQvjvkRWAGBoYJh/qc8JQAcAqCwAsO9NoBbQ5n1m38+g9ikAeQPgSjtofAJgTgTw0lg6wE5ppyAAmxj72CTWHB0Ae39/wPzvYEcDwKuuHzL+VkyAx81HA0h4ZKYHwNbZ/wvg4KFQcAFEJub/3Mk5ADJDgPcRWzKAVVc6wFQ6gKQA9EUD4H1AFdtCN3465jHEua8KUCzA1/c6gBbQxikI35cgZV8ZMae1ggAgUWuTgQxqIBqZnBhFjLmsFQognYRWI9HI7sRoxo6d1mIDQILOS0i9kosXNxBiPtYKAVBe0o7Yw27MQoT+WIsFYLfPSyiJRrQTY9uoJcSQapEBDoZpIxqZPCNTwOCe1uIAZDO4oQBbwOAK7uBya3EAFs7gHpwipMHl1uIADLi1XcNYGCOYMeRa9W/WClABKkAFiKofRnoGaQBkK9wAAAAASUVORK5CYII=" 
                    alt="Light rain" />
                    <p className='icon-description'>Light Rain</p>
                </div>
            </section>  
        </div> 
    )
}