
//% color=#0fbc11 icon="\uf120" block="mp3player"
namespace mp3player {

    /**
     * Dynamically configuring the serial instance to use pins other than USBTX and USBRX.
     * @param tx the new transmission pins, eg: SerialPin.P0
     * @param rx the new reception pin, eg: SerialPin.P1
     * @param rate the new baud rate. eg: 115200
     */
    //% weight=10
    //% help=serial/redirect-to
    //% blockId=serial_redirect block="serial|redirect to|TX %tx|RX %rx|at baud rate %rate"
    //% blockExternalInputs=1 shim=serial::redirect
    function redirect(tx: SerialPin, rx: SerialPin, rate: BaudRate): void{
        return;
    }
    
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
