#include "pxt.h"
//#include "MicroBitSerial.h"

namespace mp3player {
		
	MicroBitSerial uBitSerial;
	
	

    //%
    void sendCommand(uint8_t command, uint8_t hbyte, uint8_t lbyte){
        uint8_t cmd[] = {0x7E, 0xFF, 0x06, command, 0x00, hbyte, lbyte, 0xEF };
	uBitSerial.send(cmd, 8);
    }
	
    //%
    void redirect(SerialPin tx, SerialPin rx) {
      MicroBitPin* txp = getPin(tx); if (!tx) return;
      MicroBitPin* rxp = getPin(rx); if (!rx) return;

      uBit.serial.redirect(txp->name, rxp->name);
      uBit.serial.baud(9600);
    }

}
