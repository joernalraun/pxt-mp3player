#include "pxt.h"
//#include "MicroBitSerial.h"

//% weight=5 color=#2699BF icon="\uf120"
namespace mp3player {
		
	MicroBitSerial uBitSerial;
	
	
	/**
    * Sending a command to the MP3 Player
    * @param command play a file, eg: 0x03
    * @param high byte of the 16bit file index, eg: 0x00
    * @param low byte of the 16bit file index, eg: 0x04
    */
    //% weight=10
    //% help=serial/send command
    //% blockId=serial_sendCommand block="serial|send|command %command | hbyte %hbyte | lbyte %lbyte"
	void sendCommand(int command, int hbyte, int lbyte){
		uint8_t cmd[] = {0x7E, 0xFF, 0x06, command, 0x00, hbyte, lbyte, 0xEF };
		uBit.serial.send(cmd, 8);
		//uBitSerial.send(cmd, 8);
	}

}
