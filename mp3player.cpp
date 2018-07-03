#include "pxt.h"

//% weight=5 color=#2699BF icon="\uf120" block="mp3player"
namespace mp3player {
	

    //%
	void sendCommand(uint8_t command, uint8_t hbyte, uint8_t lbyte){
		static const uint8_t cmd[] = {0x7E, 0xFF, 0x06, command, 0x00, hbyte, lbyte, 0xEF };
		uBit.serial.send(cmd, 8);
	}

}
