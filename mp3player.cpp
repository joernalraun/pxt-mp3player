#include "pxt.h"

namespace mp3player {
	

    //% block="serial_rb|write buffer %buffer"
	void sendCommand(Buffer buffer){
		//static const uint8_t cmd[] = {0x7E, 0xFF, 0x06, command, 0x00, hbyte, lbyte, 0xEF };
		//uBit.serial.send(cmd, 8);
		if (!buffer) return;
		
		ManagedBuffer buf(buffer);
      		uBit.serial.send(buf.getBytes(), buf.length());
	}

}
