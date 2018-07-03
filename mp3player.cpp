#include "pxt.h"

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
    //% blockExternalInputs=1
    void redirect(SerialPin tx, SerialPin rx, BaudRate rate) {
      MicroBitPin* txp = getPin(tx); if (!tx) return;
      MicroBitPin* rxp = getPin(rx); if (!rx) return;

      uBit.serial.redirect(txp->name, rxp->name);
      uBit.serial.baud((int)rate);
    }
	
    //%
	void sendCommand(Buffer buffer){
		//static const uint8_t cmd[] = {0x7E, 0xFF, 0x06, command, 0x00, hbyte, lbyte, 0xEF };
		//uBit.serial.send(cmd, 8);
		if (!buffer) return;
		
		ManagedBuffer buf(buffer);
      		uBit.serial.send(buf.getBytes(), buf.length());
	}

}
