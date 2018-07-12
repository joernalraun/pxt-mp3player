#include "pxt.h"

namespace MP3_Modul {
	
    //%
	void sendCommand(Buffer buffer){
		if (!buffer) return;
		
		ManagedBuffer buf(buffer);
      		uBit.serial.send(buf.getBytes(), buf.length());
	}

}
