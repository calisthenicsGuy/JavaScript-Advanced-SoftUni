function createAssemblyLine() {
    let hasClimaParameter = {
        temp : 21,
        tempSettings : 21,
        adjustTemp() {
            if (this.temp < this.tempSettings) {
                this.temp++;
            } else if (this.tempSettings > this.temp) {
                this.tempSettings--;
            }
        }
    };

    let hasAudioParameter = {
        currentTrack : {
            name : null,
            artist : null,
        },
        nowPlaying() {
            return `Now playing '${currentTrack.name}' by ${currentTrack.artist}`;
        }
    };

    let hasParktronicParameter = {
        checkDistance(distance) {
            if (distance < 0.1) {
                return "Beep! Beep! Beep!";
            } else if (distance >= 0.1 && distance < 0.25) {
                return "Beep! Beep!";
            } else if (distance >= 0.25 && distance < 0.5) {
                return "Beep!";
            } else {
                return null;
            }
        }
    };

    let object = {
        hasClima(hasClimaParameter) { },
        hasAudio(hasAudioParameter) { },
        hasParktronic(hasParktronicParameter) { },
    };
}


const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);