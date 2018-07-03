
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

	/**************************************************************** 
	 * Function Name: SpecifyMusicPlay
	 * Description: Specify the music index to play, the index is decided by the input sequence of the music.
	 * Parameters: index: the music index: 0-65535.
	 * Return: none
	****************************************************************/
    //% block="Play | File | %index"
    export function playIndex(index: number) {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x03
        buf[4] = 0x00
        buf[5] = (index >> 8) & 0xFF
        buf[6] = index & 0xFF
        buf[7] = 0xEF
        send(buf)
        basic.pause(10)
    }



    /*************************************************************
     * Function Name: PlayMP3folder
     * Description: Plays the music specified in the MP3 folder.
     *              First create a folder named MP3. Then rename the music file to 0001.mp3,0002.mp3, and so on. Save these music files in the MP3 folder.
     *              The name must be Decimal. 
     * Parameters: index, the name of MP3 flie.
     * Return: none
    **************************************************************/
    //% block="Play | File | %index in Folder MP3"
    export function playMP3Index(index: number) {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x12
        buf[4] = 0x00
        buf[5] = (index >> 8) & 0xFF
        buf[6] = index & 0xFF
        buf[7] = 0xEF
        send(buf)
        basic.pause(10)
    }

    /**************************************************************** 
     * Function Name: specifyFolderIndex
     * Description: Specify the music index in the folder to play, the index is decided by the input sequence of the music.
     * Parameters: folder: folder name, must be number;  index: the music index.
     * Return: none
    ****************************************************************/
    //% block="Play File | %index | in folder | %folder"
    export function specifyFolderIndex(folder: number, index: number)
    {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x0F
        buf[4] = 0x00
        buf[5] = folder & 0xFF
        buf[6] = index & 0xFF
        buf[7] = 0xEF
        send(buf)
        basic.pause(10)
    }

    /**************************************************************** 
     * Function Name: pause
     * Description: Pause the MP3 player.
     * Parameters: none
     * Return: none
    ****************************************************************/
    //% block="pause"
    export function pause()
    {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x0E
        buf[4] = 0x00
        buf[5] = 0x00
        buf[6] = 0x00
        buf[7] = 0xEF
        send(buf)
        basic.pause(20)
    }

    /**************************************************************** 
     * Function Name: resume
     * Description: Resume the MP3 player.
     * Parameters: none
     * Return: none
    ****************************************************************/
    //% block="resume"
    export function resume()
    {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x0D
        buf[4] = 0x00
        buf[5] = 0x00
        buf[6] = 0x00
        buf[7] = 0xEF
        send(buf)
        basic.pause(20)
    }

    /**************************************************************** 
     * Function Name: PlayNext
     * Description: Play the next song.
     * Parameters: none
     * Return: none
    ****************************************************************/
    //% block="Play next"
    export function playNext()
    {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x01
        buf[4] = 0x00
        buf[5] = 0x00
        buf[6] = 0x00
        buf[7] = 0xEF
        send(buf)
        basic.pause(10)
    }

    /**************************************************************** 
     * Function Name: PlayPrevious
     * Description: Play the previous song.
     * Parameters: none
     * Return: none
    ****************************************************************/
    //% block="Play previous"
    export function playPrevious()
    {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x02
        buf[4] = 0x00
        buf[5] = 0x00
        buf[6] = 0x00
        buf[7] = 0xEF
        this.send(buf)
        basic.pause(10)
    }

    /**************************************************************** 
     * Function Name: PlayLoop
     * Description: Play loop for all the songs.
     * Parameters: none
     * Return: none
    ****************************************************************/
    //% block="Loop all"
    export function playLoop()
    {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x11
        buf[4] = 0x00
        buf[5] = 0x00
        buf[6] = 0x01
        buf[7] = 0xEF
        send(buf)
        basic.pause(10)
    }

    /**************************************************************** 
     * Function Name: SetVolume
     * Description: Set the volume, the range is 0x00 to 0x1E.
     * Parameters: volume: the range is 0x00 to 0x1E.
     * Return: none
    ****************************************************************/
    //% block="Set volume to | %volume"
    export function setVolume(volume: number)
    {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x06
        buf[4] = 0x00
        buf[5] = 0x00
        buf[6] = volume & 0x1E
        buf[7] = 0xEF
        send(buf)
        basic.pause(10)
    }

    /**************************************************************** 
     * Function Name: IncreaseVolume
     * Description: Increase the volume.
     * Parameters: none
     * Return: none
    ****************************************************************/
    //% block="Volume up"
    export function increaseVolume()
    {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x04
        buf[4] = 0x00
        buf[5] = 0x00
        buf[6] = 0x00
        buf[7] = 0xEF
        send(buf)
        basic.pause(10)
    }

    /**************************************************************** 
     * Function Name: DecreaseVolume
     * Description: Decrease the volume.
     * Parameters: none
     * Return: none
    ****************************************************************/
    //% block="Volume down"
    export function decreaseVolume()
    {
        let buf = pins.createBuffer(8)
        buf[0] = 0x7E
        buf[1] = 0xFF
        buf[2] = 0x06
        buf[3] = 0x05
        buf[4] = 0x00
        buf[5] = 0x00
        buf[6] = 0x00
        buf[7] = 0xEF
        send(buf)
        basic.pause(10)
    }
}
