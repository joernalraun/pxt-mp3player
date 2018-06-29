/*
 *	
 */
//% color=#0fbc11 icon="\uf120"
namespace mp3player {

    /**
     * 
     * @param 
     */
    //% weight=87 blockGap=8
    //% block="serial|send|command %command | hbyte %hbyte | lbyte %lbyte" 
    //% blockId=send_command
    //% icon="\uf120"
    export function sendCommand(command: number, hbyte: number, lbyte: number): void {
        mp3player.sendCommand(command, hbyte, lbyte)
    }
}
