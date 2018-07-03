
//% color=#0fbc11 icon="\uf120" block="mp3player"
namespace mp3player {

    /**
     * @param command buffer to send
     */
    //% block="serial|send|command %command" 
    //% blockId=send_command
    //% shim=mp3player::sendCommand
    export function send(command: Buffer): void {
        //mp3player.sendCommand(command, hbyte, lbyte)
        return;
    }
}
