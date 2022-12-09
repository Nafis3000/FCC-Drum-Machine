import styles from '../styles/DrumMachine.module.css'
import React from 'react'

//DrumMachine react component
class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'Click or Press a Key'
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress);
    }

    handleClick(e) {
        this.playSound(e.target.innerText);

    }
    handleKeyPress(event) {
        switch (event.key) {
            case 'q':
                this.playSound('Q');
                break;
            case 'w':
                this.playSound('W');
                break;
            case 'e':
                this.playSound('E');
                break;
            case 'a':
                this.playSound('A');
                break;
            case 's':
                this.playSound('S');
                break;
            case 'd':
                this.playSound('D');
                break;
            case 'z':
                this.playSound('Z');
                break;
            case 'x':
                this.playSound('X');
                break;
            case 'c':
                this.playSound('C');
                break;
            default:
                this.setState({
                    display: 'Invalid Key'
                    });
        }
    }


    playSound(key) {
        const sound = document.getElementById(key);
        sound.currentTime = 0;
        sound.play();
        this.setState({
            display: sound.parentElement.id
        });
    }
   



    render() {
        return (
            <div id="drum-machine" className={styles.drumMachine}>
                <div id="display" className={styles.display}>
                    {this.state.display}
                </div>
                <div id="drum-pads" className={styles.drumPads}>
                    <button className={styles.drumPad} id="Heater-1" onClick={this.handleClick}>Q
                        <audio className="clip" id="Q" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>
                    </button>
                    <button className={styles.drumPad} id="Heater-2" onClick={this.handleClick}>W
                        <audio className="clip" id="W" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>
                    </button>
                    <button className={styles.drumPad} id="Heater-3" onClick={this.handleClick}>E
                        <audio className="clip" id="E" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>
                    </button>   
                    <button className={styles.drumPad} id="Heater-4" onClick={this.handleClick}>A
                        <audio className="clip" id="A" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>
                    </button>   
                    <button className={styles.drumPad} id="Clap" onClick={this.handleClick}>S
                        <audio className="clip" id="S" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>
                    </button>   
                    <button className={styles.drumPad} id="Open-HH" onClick={this.handleClick}>D
                        <audio className="clip" id="D" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>
                    </button>
                    <button className={styles.drumPad} id="Kick-n'-Hat" onClick={this.handleClick}>Z    
                        <audio className="clip" id="Z" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>
                    </button>
                    <button className={styles.drumPad} id="Kick" onClick={this.handleClick}>X
                        <audio className="clip" id="X" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>
                    </button>
                    <button className={styles.drumPad} id="Closed-HH" onClick={this.handleClick}>C  
                        <audio className="clip" id="C" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>
                    </button>
                </div>
            </div>
        );
    }
}

            
export default DrumMachine
