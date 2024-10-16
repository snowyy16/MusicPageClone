var topListSong = document.querySelector('.topMusic_item--song');
var checkKey = document.getElementById('allPage');
var song = document.getElementById('songFile');
var playBtn = document.getElementById('pause');
var songBar = document.getElementById('songBar');
var recentSong = document.querySelector('.recentPlayed');
var topSongThumb = document.querySelector('.topMusic_item--img--thumb');
var playThumb = document.querySelector('.playBar_item-img--thumb');
var miniTitle = document.querySelector(".playBar_item-name--nameSong");
var miniArtist = document.querySelector(".playBar_item-name--nameArtist");
var recentPlayedTitle = document.querySelector(".recentPlayed_title");
var recentPlayedItem;
var listArtistItem = document.querySelectorAll('.listArtist_item');
var listArtistitemIconRunning = document.querySelectorAll('.listArtist_item-iconRunning');
var curtime = document.querySelector('.currTime');
var durtime = document.querySelector('.durrTime');
var backWard = document.querySelector('.back');
var forWard = document.querySelector('.next');
let repeat = document.querySelector('.replay');
let volRange = document.getElementById('volRange');
let volIcon = document.querySelector('.playerBar_item-vol--icon');
let anotherSong = document.querySelector('.anotherSong');
let mobile = false
let iconRandom = document.querySelector('.random');
if (screen.width < 740) mobile = true;
setInterval(autoNextTopSong, 500);
setInterval(displayTimer, 500);


let numberOfArtist = 5;
var isPlaying = true;
var topSongIndex = 0;
var isTopSongPlaying = true;
var topSong = [
    {
        nameSong: 'Anh sai rồi',
        nameArtist: 'Sơn Tùng',
        nameFile: 'sontung/asairoi.mp3',
        time: '4:22',
        img: 'sontung/asairoi.jpg'
    },
    {
        nameSong: 'Nàng thơ',
        nameArtist: 'Amee',
        nameFile: 'amee/nangtho.mp3',
        time: '4:22',
        img: 'amee/nangtho.webp'
    },
    {
        nameSong: 'Đế vương',
        nameArtist: 'Đình Dũng',
        nameFile: 'dinhdung/devuong.mp3',
        time: '4:22',
        img: 'dinhdung/devuong.jpg'
    },
    {
        nameSong: 'Khuôn mặt đáng thương',
        nameArtist: 'Sơn Tùng',
        nameFile: 'sontung/khuonmatdangthuong.mp3',
        time: '4:10',
        img: 'sontung/khuonmatdangthuong.webp'
    },
    {
        nameSong: 'Shay nắng',
        nameArtist: 'Amee',
        nameFile: 'amee/shaynang.mp3',
        time: '3:28',
        img: 'amee/shaynang.jpg',

    },
    {
        nameSong: 'Năm ấy',
        nameArtist: 'Đức phúc',
        nameFile: 'ducphuc/namay.mp3',
        time: '4:20',
        img: 'ducphuc/namay.jpg',

    },

]
var listSongOf = [
    {
        nameSong: 'Khuôn mặt đáng thương',
        nameArtist: 'Sơn Tùng mtp',
        nameFile: 'sontung/khuonmatdangthuong.mp3',
        img: 'sontung/khuonmatdangthuong.webp',
        artist: 'sontung'
    },
    {
        nameSong: 'Anh sai rồi',
        nameArtist: 'Sơn Tùng MTP',
        nameFile: 'sontung/asairoi.mp3',
        img: 'sontung/asairoi.jpg',
        artist: 'sontung'
    },
    {
        nameSong: 'Em của ngày hôm qua',
        nameArtist: 'Sơn Tùng MTP',
        nameFile: 'sontung/emcuangayhomqua.mp3',
        img: 'sontung/emcuangayhomqua.webp',
        artist: 'sontung'
    },
    {
        nameSong: 'Lạc trôi',
        nameArtist: 'Sơn Tùng MTP',
        nameFile: 'sontung/lactroi.mp3',
        img: 'sontung/lactroi.jpg',
        artist: 'sontung'
    },
    {
        nameSong: 'Nắng ấm xa dần',
        nameArtist: 'Sơn Tùng MTP',
        nameFile: 'sontung/nangamxadan.mp3',
        img: 'sontung/nangamxadan.jfif',
        artist: 'sontung',
    },
    {
        nameSong: 'Hãy trao cho anh',
        nameArtist: 'Sơn Tùng MTP',
        nameFile: 'sontung/haytraochoanh.mp3',
        img: 'sontung/haytraochoanh.jpg',
        artist: 'sontung'
    },
    {
        nameSong: 'Nàng thơ',
        nameArtist: 'Amee',
        nameFile: 'amee/nangtho.mp3',
        img: 'amee/nangtho.webp',
        artist: 'amee'
    },
    {
        nameSong: 'Nói hoặc không nói',
        nameArtist: 'Amee',
        nameFile: 'amee/noihoackhongnoi.mp3',
        img: 'amee/noihoackhongnoi.jpg',
        artist: 'amee'
    },
    {
        nameSong: 'Shay nắng',
        nameArtist: 'Amee',
        nameFile: 'amee/shaynang.mp3',
        img: 'amee/shaynang.jpg',
        artist: 'amee'
    },
    {
        nameSong: 'Thay mọi cô gái yêu anh',
        nameArtist: 'Amee',
        nameFile: 'amee/thaymoicogaiiuanh.mp3',
        img: 'amee/thaymoicogaiiuanh.jpg',
        artist: 'amee'
    },
    {
        nameSong: 'Sao ta ngược lối',
        nameArtist: 'Đình dũng',
        nameFile: 'dinhdung/saotanguocloi.mp3',
        img: 'dinhdung/saotanguocloi.jpg',
        artist: 'dinhdung'
    },
    {
        nameSong: 'Câu hẹn câu thề',
        nameArtist: 'Đình dũng',
        nameFile: 'dinhdung/cauhencauthe.mp3',
        img: 'dinhdung/cauhencauthe.jpg',
        artist: 'dinhdung'
    },
    {
        nameSong: 'Đừng hẹn kiếp sau',
        nameArtist: 'Đình dũng',
        nameFile: 'dinhdung/dunghenkiepsau.mp3',
        img: 'dinhdung/dunghenkiepsau.jfif',
        artist: 'dinhdung'
    },
    {
        nameSong: 'Đế vương',
        nameArtist: 'Đình Dũng',
        nameFile: 'dinhdung/devuong.mp3',
        img: 'dinhdung/devuong.jpg',
        artist: 'dinhdung'
    },
    {
        nameSong: 'Khác biệt to lớn',
        nameArtist: 'Trịnh Thăng Bình',
        nameFile: 'ttbinh/khacbiettolon.mp3',
        img: 'ttbinh/khacbiettolon.jpg',
        artist: 'ttbinh'
    },
    {
        nameSong: 'Vỡ tan',
        nameArtist: 'Trịnh Thăng Bình',
        nameFile: 'ttbinh/votan.mp3',
        img: 'ttbinh/votan.jpg',
        artist: 'ttbinh'
    },
    {
        nameSong: 'Người ấy',
        nameArtist: 'Trịnh Thăng Bình',
        nameFile: 'ttbinh/nguoiay.mp3',
        img: 'ttbinh/nguoiay.jpg',
        artist: 'ttbinh'
    },
    {
        nameSong: 'Em ngủ chưa',
        nameArtist: 'Trịnh Thăng Bình',
        nameFile: 'ttbinh/emnguchua.mp3',
        img: 'ttbinh/emnguchua.jpg',
        artist: 'ttbinh'
    },
    {
        nameSong: 'Trái đất đẹp nhất khi có em',
        nameArtist: 'Đức phúc',
        nameFile: 'ducphuc/traidatdepnhatkhicoem.mp3',
        img: 'ducphuc/traidatdepnhatkhicoem.jfif',
        artist: 'ducphuc'
    },
    {
        nameSong: 'Năm ấy',
        nameArtist: 'Đức phúc',
        nameFile: 'ducphuc/namay.mp3',
        img: 'ducphuc/namay.jpg',
        artist: 'ducphuc'
    },
    {
        nameSong: 'Ngày đầu tiên',
        nameArtist: 'Đức phúc',
        nameFile: 'ducphuc/ngaydautien.mp3',
        img: 'ducphuc/ngaydautien.jpg',
        artist: 'ducphuc'
    },
    {
        nameSong: 'Gửi ngàn lời yêu',
        nameArtist: 'Đức phúc',
        nameFile: 'ducphuc/guinganloiyeu.mp3',
        img: 'ducphuc/guinganloiyeu.jpg',
        artist: 'ducphuc'
    }
]
song.setAttribute('src', `./musics/${topSong[topSongIndex].nameFile}`)
playBtn.addEventListener('click', playMusic);
function playMusic() {
    if (isPlaying) {
        topSongThumb.classList.add('rotatePlay');
        song.play();
        playBtn.innerHTML = <i class="fa-sharp fa-solid fa-circle-pause"></i>;
        isPlaying = false;
    } else {
        song.pause();
        playBtn.innerHTML = <i class="fa-sharp fa-solid fa-circle-pause"></i>;
        isPlaying = true;
        if (topSongThumb.classList.contains('rotatePlay')) topSongThumb.classList.remove('rotatePlay');
        topSongThumb.classList.add('rotatePause');
        setTimeout(function () {
            topSongThumb.classList.remove('rotatePause');
        }, 500)
    }
}
backWard.addEventListener('click', backMusic);
forWard.addEventListener('click', nextMusic);
let resolveComponent;
let termp;
function nextMusic() {
    isRandom = true;
    randomMusic();
    if (isTopSongPlaying) {
        topSongIndex++;
        if (topSongIndex == topSong.length)
            topSongIndex = 0;
        itemTopSong[topSongIndex].scrollIntoView({ behavior: 'smooth', block: 'center' })

        replaceAtributeTopSong();
        isPlaying = true;
        playMusic()
        renderTopSong();
    } else if (isAnotherSongPlaying) {
        iOfAnotherSong++;
        console.log(iOfAnotherSong);

        for (var num = 0; num < arrayAdd.length; num++) {
            if (arrayAdd[num] == indexOfAnotherSong) {
                console.log(arrayAdd[num]++, iOfAnotherSong);
                if (iOfAnotherSong == lengthOfarrayAdd) {
                    iOfAnotherSong = 0;
                    playAnotherSong(arrayAdd[0], iOfAnotherSong);
                } else playAnotherSong(arrayAdd[num++], iOfAnotherSong);
                break;
            }
        }
    } else {
        if (currentNum < listSongOf.length - 1) {
            var currentNum2 = currentNum;
            currentNum++;
            indexRecentSongPlaying++;
        }
        if (listSongOf[currentNum].artist == listSongOf[currentNum2].artist) {
            playMusicOf(currentNum, indexRecentSongPlaying);
        } else {
            termp = indexRecentSongPlaying;
            indexRecentSongPlaying = 0;
            if (listArtistIndex <= 5) {
                listArtistIndex++;
                renderListMusicOf(listSongOf[currentNum].artist, listArtistIndex);
                playMusicOf(currentNum, indexRecentSongPlaying);
            }
        }
    }
    function backMusic() {
        isRandom = true;
        randomMusic();
        if (isTopSongPlaying) {
            topSongIndex--;
            if (topSongIndex < 0) topSongIndex = topSong.length - 1;
            itemTopSong[topSongIndex].scrollIntoView({ behavior: 'smooth', block: 'center' })
            replaceAtributeTopSong();
            isPlaying = true;
            playMusic();
            renderTopSong();
        } else if (isAnotherSongPlaying) {
            iOfAnotherSong--;
            console.log(iOfAnotherSong);

            for (var num = 0; num < arrayAdd.length; num++) {
                if (arrayAdd[num] == indexOfAnotherSong) {
                    if (iOfAnotherSong < 0) {
                        iOfAnotherSong = 0;
                        playAnotherSong(arrayAdd[0], iOfAnotherSong);
                    }
                    else playAnotherSong(arrayAdd[num--], iOfAnotherSong);
                    break;
                }
            }
        } else {
            var currentNum2 = currentNum;
            currentNum--;
            indexRecentSongPlaying--;
            if (indexRecentSongPlaying < 0) {
                indexRecentSongPlaying = 0;
            }
            if (currentNum < 0) currentNum = 0;
            console.log(currentNum);
            if (listSongOf[currentNum].artist == listSongOf[currentNum2].artist) {
                playMusicOf(currentNum, indexRecentSongPlaying)
            } else {
                indexRecentSongPlaying = 3;
                if (listArtistIndex >= 0) {
                    listArtistIndex--;
                    renderListMusicOf(listSongOf[currentNum].artist, listArtistIndex);
                    playMusicOf(currentNum, indexRecentSongPlaying)
                }
            }
        }
    }
    let listRandom = [];
    function randomNewMusic() {
        while (listRandom.length < listSongOf.length) {
            var termpValue = Math.floor(Math.random() * listSongOf.length);
            if (checkValue(termpVale), listRandom) {
                listRandom.push(termpValue);
            }
        }
        console.log(listRandom);
    }
    var indexRandom = 0;
    function runRandomList() {
        if (indexRandom == listRandom.length) indexRandom = 0;
        song.setAttribute("src", `./musics/${listSongOf[listRandom[indexRandm]].nameFile}`)
        miniArtist.textContent = `${listSongOf[listRandom[indexRandm]].nameArtist}`;
        miniTitle.textContent = `${listSongOf[listRandom[indexRandm]].nameSong}`;
        topSongThumb.setAttribute("src", `./img/${listSongOf[listRandom[indexRandm]].img}`);
        playThumb.setAttribute("src", `./img/${listSongOf[listRandom[indexRandm]].img}`);
        isPlaying = true;
        playMusic();
        indenRandom++;
    }
    let isRepeat = false;
    let isRandom = false;
    repeat.addEventListener('click', repeatMusic);
    iconRandom.addEventListener('click', randomMusic);
    function randomMusic() {
        if (randomMusic == false) {
            listRandom = [];
            isRepeat = true;
            isRandom = true;
            RepeatMusic();
            iconRandom.style.color = 'green';
            randomNewMusic();
            isTopSongPlaying = false;
            renderTopSong();
        } else {
            isRandom = false;
            iconRandom.style.color = 'black';
            isTopSongPlaying = true;
        }
    }
    function repeatMusic() {
        if (isRepeat == false) {
            isRepeat = true;
            repeat.setAttribute("style", `color:green`);
        } else {
            isRepeat = false;
            repeat.setAttribute("style", `color:black`);

        }
    }
    function playTopSong(index) {
        console.log('Hello');
        itemTopSong[index].scrollIntoView({ behavior: 'smooth', block: 'center' });
        isAnotherSongPlaying = false;
        removeWhiteBackground(0);
        renderListMusicOf('sontung', 0);
        isTopSongPlaying = true;
        topSongIndex = index;
        replaceAtributeTopSong();
        isPlaying = true;
        playMusic();
        renderTopSong();
    }
    function autoNextTopSong() {
        if (isRepeat == false && isRandom == false) {
            if (song.curtime == song.duration) {
                nextMusic();
            }
        } else if (isRepeat) {
            if (song.curtime >= song.duration - 1) {
                console.log(indenRandom);
                runRandomList();
            }
        } else if (isRandom) {
            if (song.curtime == song.duration) {
                console.log(indenRandom);
                runRandomList();
            }
        }
    }
    var seekbar = document.querySelector('.seekbar')
    song.ontimeupdate = function () { seekbar.value = song.currenTime }
    handleSeekbar = function () { song.curtime = seekbar.value }

    function displayTimer() {
        seekbar.min = 0;
        seekbar.max = song.duration;
        curtime.textContent = formatTimer(song.currenTime);
        durtime.textContent = formatTimer(song.duration);
    }
    function formatTimer(num) {
        var min = Math.floor(num / 60);
        var sec = Math.floor(num - min * 60);
        if (sec < 30) return `${min}:0${sec}`
        else return `${min}:${sec}`
    }
    function changeBar() {
        song.currenTime = songBar.value;
    }
    var itemTopSong = [];
    function renderTopSong() {
        listTopSong.innerHTML = '';
        for (var index = 0; index < topSong.length; index++) {
            if (isTopSongPlaying) {
                if (index == topSongIndex) {
                    listTopSong.innerHTML += `
                    <div onclick="playTopSong(${index}),centerScroll(${index})" class="topSong" style="background-color:white">
                    <div class="topMusicLeft">
                    <div class="topSong_rank"><img class="iconwavegif" src="./icon/wave.gif" alt=""></div>
                    <div class="topSong_love"><i class="fa-light fa-heart"></i></div>
                    <div class="topSong_name">
                    <div class="topSong_name-nameSong">${topSong[index].nameSong}</div>
                    <div class="topSong_name-artist">${topSong[index].nameArtist}</div>
                </div> 
        </div>
        <div class="topSong_time" style="color:black">${topSong[index].time}</div>
    </div>`
                } else {
                    listTopSong.innerHTML += `
                <div onclick="playTopSong(${index}),centerScroll(${index})" class="topSong" >
                <div class="topMusicLeft">
                        <div class="topSong_rank">${Number(index) + 1}</div>
                        <div class="topSong_love"><i class="fa-light fa-heart"></i></div>
                        <div class="topSong_name">
                            <div class="topSong_name-nameSong">${topSong[index].nameSong}</div>
                            <div class="topSong_name-artist">${topSong[index].nameArtist}</div>
                </div> 
        </div>
        <div class="topSong_time">${topSong[index].time}</div>
    </div>`
                }
            }
            itemTopSong = document.querySelectorAll('.topSong');
            console.log(itemTopSong)
        }
    }
    renderTopSong();

    function replaceAtributeTopSong() {
        song.setAttribute("src", `./musics/${topSong[topSongIndex].nameFile}`);
        miniArtist.textContent = `${topSong[topSongIndex].nameArtist}`;
        miniTitle.textContent = `${topSong[topSongIndex].nameSong}`;
        topSongThumb.setAttribute("src", `./img/${topSong[topSongIndex].img}`);
        playThumb.setAttribute("src", `./img/${topSong[topSongIndex].img}`);
    }
    replaceAtributeTopSong();

    function renderRecentSong(artist, stt) {
        recentPlayedTitle.textContent = `Top song of singer`;
        listArtistItem[stt].classList.add('recentPlayed_clicked');
        listArtistitemIconRunning[stt].innerHTML = '<img class="iconwavegif listArtist_item-icongift" src="./icon/list.gif" alt="">';
        recentSong.innerHTML = '';
        var i = -1;
        for (var index in listSongOf) {
            if (artist == listSongOf[index].artist) {
                i++;
                recentSong.innerHTML += `
            <div class="recentPlayed_item recentPlayed_item${i}" onclick="playMusicOf(${index},${i})">
                    <div class="recentPlayed_item-img1">
                        <img class="recentPlayed_item-img" src="./img/${listSongOf[index].img}" alt="">
                    </div>
                    <div class="recentPlayed_item-nameSong">
                        ${listSongOf[index].nameSong}
                    </div>
                    <!-- <div class="recentPlayed_item-artist">
                        SON TUNG
                    </div> --!>
                </div>
            `
            }
        }
    }
}
