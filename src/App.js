
import './App.css';
import '../src/js/index'
import '../src/js/time'
import { BsSearch } from 'react-icons/bs';

function App() {
  return (
    <div className="App">
       <div class="container">
        <div class="main-section">
            <div class="search-bar">
                {/* <i class="fas fa-search search-icon"></i> */}
                <i><BsSearch/></i>

                <input
                type="text" name="search-city" id="search-input" placeholder="Tìm kiếm thành phố..."/>
            </div>

            <div class="my-div">
                <div id="myDate"></div>
                <div id="myTime"></div>
            </div>
            
            <div class="info-wrapper">
                <p class="city-name">--</p>
                <p class="weather-state">--</p>
                <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="weather-icon"/>
                <p class="temperature">--</p>
            </div>
        </div>
        <div class="additional-section">
            <div class="row">
                <div class="item">
                    <div class="label">MT Mọc</div>
                    <div class="value sunrise">--</div>
                </div>
                <div class="item">
                    <div class="label">MT Lặn</div>
                    <div class="value sunset">--</div>
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <div class="label">Độ ẩm</div>
                    <div class="value"><span class="humidity">--</span>%</div>
                </div>
                <div class="item">
                    <div class="label">Gió</div>
                    <div class="value"><span class="wind-speed">--</span> km/h</div>
                </div>
            </div>
        </div>
    </div>
    <script src="../src/js/index.js"></script>
    </div>
  );
}

export default App;
