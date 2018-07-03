

namespace mp3player {

    /**
     * @param command play a file, eg: 0x03
     * @param high byte of the 16bit file index, eg: 0x00
     * @param low byte of the 16bit file index, eg: 0x04
     */
    //% block="serial|send|command %command | hbyte %hbyte | lbyte %lbyte" 
    //% blockId=send_command
    //% shim=mp3player::sendCommand
    export function sendCommand(command: number, hbyte: number, lbyte: number): void {
        //mp3player.sendCommand(command, hbyte, lbyte)
        return;
    }
}
