#include "pxt.h"
//#include "MicroBitSerial.h"

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
    //% blockId=serial_redirect block="serial|send|command %command | hbyte %hbyte | lbyte %lbyte"
    //% blockExternalInputs=1
	void sendCommand(uint8_t command, uint8_t hbyte, uint8_t lbyte){
		uint8_t cmd[] = {0x7E, 0xFF, 0x06, command, 0x00, hbyte, lbyte, 0xEF };
		uBitSerial.send(cmd, 8);
	}
		
	/**
    * Dynamically configuring the serial instance to use pins other than USBTX and USBRX.
    * @param tx the new transmission pins, eg: SerialPin.P0
    * @param rx the new reception pin, eg: SerialPin.P1
    */
    //% weight=10
    //% help=serial/redirect-to
    //% blockId=serial_redirect block="serial|redirect to|TX %tx|RX %rx"
    //% blockExternalInputs=1
    void redirect(SerialPin tx, SerialPin rx) {
      MicroBitPin* txp = getPin(tx); if (!tx) return;
      MicroBitPin* rxp = getPin(rx); if (!rx) return;

      uBit.serial.redirect(txp->name, rxp->name);
      uBit.serial.baud(9600);
    }

}
