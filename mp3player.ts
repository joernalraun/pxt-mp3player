/*
 *	
 */
//% color=#0fbc11 block="mp3player"
namespace mp3player {

    /**
     * sends a command and its 16bit value as low and high byte
     * @param cmd command
     * @param hb high byte
     * @param lb low byte
     */
    //% weight=87 blockGap=8
    //% block="send | %cmd | with | hbyte | %hb | and | lbyte | %lb " 
    //% blockId=sendCommand
    //%block shim=mp3player::sendCommand
    export function sendCommand(cmd: number, hb: number, lb: number ): void {
        
    }
	
}
