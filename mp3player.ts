
//% color=#0fbc11 icon="\uf120" block="mp3player"
namespace mp3player {

    /**
     * @param command play a file, eg: 0x03
     * @param high byte of the 16bit file index, eg: 0x00
     * @param low byte of the 16bit file index, eg: 0x04
     */
    //% block="serial|send|command %command" 
    //% blockId=send_command
    //% shim=mp3player::sendCommand
    export function send(command: Buffer): void {
        //mp3player.sendCommand(command, hbyte, lbyte)
        return;
    }
}
