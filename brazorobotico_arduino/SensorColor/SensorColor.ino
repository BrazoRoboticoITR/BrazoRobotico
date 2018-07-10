#include <Wire.h>
#include <SparkFun_APDS9960.h>

SparkFun_APDS9960 SensorColor = SparkFun_APDS9960();
uint16_t LuzAmbiente = 0;
uint16_t LuzRoja = 0;
uint16_t LuzVerde = 0;
uint16_t LuzAzul = 0;

void setup() {
  Serial.begin(9600);

  if (SensorColor.init()) {
    // Serial.println("Sensor Iniciado");
  }
  else {
    //  Serial.println("Fallo sensor");
  }
  if ( SensorColor.enableLightSensor(false) ) {
    // Serial.println(F("Sensor de luz está encendido"));
  } else {
    //  Serial.println(F("Algo fallo en el sensor!"));
  }
}

void loop() {
  if (  !SensorColor.readAmbientLight(LuzAmbiente) ||
        !SensorColor.readRedLight(LuzRoja) ||
        !SensorColor.readGreenLight(LuzVerde) ||
        !SensorColor.readBlueLight(LuzAzul) ) {
    //  Serial.println("El sensor falló");
  } else {
    if (LuzRoja > LuzVerde && LuzRoja > LuzAzul) {
      Serial.print("R");
    }
    else if (LuzVerde > LuzAzul) {
      Serial.print("G");
    }
    else {
      Serial.print("B");
    }
  }
  delay(10000);
}
