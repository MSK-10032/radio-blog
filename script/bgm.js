document.querySelector('body').insertAdjacentHTML('beforeend', `
    <!-- BGM -->
    <div id="cmsk_bgm" title="BGM">
        <div class="bgm_button bgm_play" onclick="toggleBGM()">
            <svg style="width: 50px; height: 50px; cursor: pointer" viewBox="0 0 24 24">
                <path d="M9 7l8 5-8 5z" fill="#000" />
            </svg>
        </div>
        <div class="bgm_button bgm_pause" onclick="toggleBGM()" style="display: none">
            <svg style="width: 50px; height: 50px; cursor: pointer" viewBox="0 0 24 24">
                <rect x="8" y="8" width="3" height="8" fill="#000" />
                <rect x="13" y="8" width="3" height="8" fill="#000" />
            </svg>
        </div>
        <style>
            #cmsk_bgm {
                position: fixed;
                z-index: 114;
                bottom: 2vw;
                right: 2vw;
                display: flex;
                align-items: center;
            }
    
            .bgm_button {
                display: flex;
                justify-content: center;
                align-items: center;
                border: 3px solid #000;
                background-color: #fff;
                padding: 0;
            }
        </style>
        <audio src="https://file-1.御坂网络.100320721.xyz/audio/level5_-judgelight-.m4a" autoplay loop></audio>
    </div>
    `);

const bgm = document.querySelector("#cmsk_bgm audio");
const playButton = document.querySelector("#cmsk_bgm .bgm_play");
const pauseButton = document.querySelector("#cmsk_bgm .bgm_pause");

function toggleBGM() {
    if (bgm.paused) {
        bgm.play();
    } else {
        bgm.pause();
    }
    updateBGMButton();
}

function updateBGMButton() {
    if (bgm.paused) {
        playButton.style.display = "";
        pauseButton.style.display = "none";
    } else {
        playButton.style.display = "none";
        pauseButton.style.display = "";
    }
}

bgm.addEventListener("play", updateBGMButton);
bgm.addEventListener("pause", updateBGMButton);

bgm.play();
updateBGMButton();