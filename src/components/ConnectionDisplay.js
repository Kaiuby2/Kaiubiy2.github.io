import React, { useState, useEffect } from "react";
import "../Style.css";
import Logo from "./Logo.js";
import SearchPage from "./SearchPage.js";
import End from "./End.js";
import { FaBus } from "react-icons/fa";
import { GiKickScooter } from "react-icons/gi";
import { BsArrowRight } from "react-icons/bs";

//import 'webpack';
/* import logo from '.../public/busemoji.png'

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img src={logo} alt="Logo" />;
}
 */

//die Fahrtdauer im Format h (Eingabewert 1), min (Eingabewert 2) wird nach einem Festen Schlüssel (0,1 , 0,3 oder 0,2 der Gesamtfahrtdauer)
// aufgeteilt in 2 bzw. 3 Fahrten und 1 bzw. 2 Wartezeiten . Ausgegeben wird es
// in einem Array nach dem Muster [Fahrtdauer1, WartezeitAufFahrt2, Fahrtdauer2, usw]
const durationSplitFast = (h, m) => {
  const hour = Number(h);
  const min = Number(m);
  const t = Number(h * 60 + min);
  const trail1 = Number(Math.floor(t * 0.3));
  const waiting1 = Number(Math.floor(t * 0.15));
  const trail2 = Number(t - trail1 - waiting1);
  console.log(
    "durationSplitFast= " + [Number(trail1), Number(waiting1), Number(trail2)]
  );
  return [Number(trail1), Number(waiting1), Number(trail2)];
};

const durationSplitCheap = (h, m) => {
  const hour = Number(h);
  const min = Number(m);
  const t = Number(h * 60 + min);
  let trail1 = Number(Math.floor(t * 0.3));
  let waiting1 = Number(Math.floor(t * 0.1));
  let trail2 = Number(Math.floor(t * 0.2));
  let waiting2 = Number(Math.floor(t * 0.15));
  let trail3 = Number(t - trail1 - waiting1 - trail2 - waiting2);
  console.log(
    "durationSplitCheap= " +
      [
        Number(trail1),
        Number(waiting1),
        Number(trail2),
        Number(waiting2),
        Number(trail3),
      ]
  );
  return [
    Number(trail1),
    Number(waiting1),
    Number(trail2),
    Number(waiting2),
    Number(trail3),
  ];
};

// zu einer Uhrzeit (attribut 1) eine h (attribut 2) und Min (attribut 3)  hinzufügen
const addDurationToTime = (time, h, min) => {
  console.log("time =" + time);
  const [hours, minutes] = time.split(":");
  var h = Number(h);
  let hoursSum = Number(hours) + Number(h);
  let minutesSum = Number(minutes) + Number(min);
  while (minutesSum >= 60) {
    minutesSum = minutesSum - 60;
    hoursSum = hoursSum + 1;
  }
  if (minutesSum < 10) minutesSum = "0" + minutesSum;
  return hoursSum + ":" + minutesSum;
};

// Entwurf: zu einer Dauer (hs attribut 1, mins attribut 2) eine Dauer () h (attribut 3) und Min (attribut 4))  hinzufügen
//und in der Form ... ausgeben:
// const addDurationToDuration = (h1, m1, h2, m2) => {
//   let hours1 = Number(h1);
//   let hours2 = Number(h2);
//   let min1 = Number(min1);
//   let min2 = Number(min2);

const ConnectionDisplay = (props) => {
  const [clickedEnd, setEndClicked] = useState(false);
  const [hideConnectionDisplay, setHideConnectionDisplay] = useState(true);
  const [loadingMessage, setloadingMessage] = useState(true);

  const backClickHandler = () => {
    props.onGoBack();
  };
  const endClickHandler = () => {
    setEndClicked(true);
  };
  // ------------------------------- FÜR DIE VERZÖGERUNG---------------------------------------------------------------
  useEffect(() => {
    const timer = setTimeout(() => {
      setHideConnectionDisplay(false);
      setloadingMessage(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  //   --------------------------(nicht ganz so wichtige) Ideen für Eingabezeit + paar Sekunden als Losfahrzeit anzeigen--------------------

  // zum in-string konvertieren, außerdem zwischen 3-9 min (zufällig) hinzufügen
  const timeToDecimalAdd = (time) => {
    const [hours, minutes] = time.split(":");
    let additionalRandomMinutes = props.additionalRandomMinutes;
    let tneu = Number(minutes) + Number(additionalRandomMinutes);
    return Number(hours) + Number(tneu) / 60;
  };

  //   zum String in Zeit konvertieren
  const stringToTime = (StringTime) => {
    const hs = Math.floor(StringTime);
    const mins = Math.round((StringTime - hs) * 60);
    return `${hs < 10 ? "0" : ""}${hs}:${mins < 10 ? "0" : ""}${mins}`;
  };

  let newDepartureTime = stringToTime(timeToDecimalAdd(props.departureTime));
  let splittedDurationsCheap = durationSplitCheap(
    props.durationH,
    props.durationMin
  );
  let splittedDurationsFast = durationSplitFast(
    props.durationH,
    props.durationMin
  );

  return (
    <div>
      {props.cheaperConnectionStarted ? (
        <div>
          {clickedEnd ? (
            <End
            // onGoBack={() => {
            // setHideConnectionDisplay(false);
            // setEndClicked(false);}
            />
          ) : (
            <div className="container-verbindung">
              {/* {endClickHandler ? null:  */}
              {hideConnectionDisplay ? (
                loadingMessage ? (
                  <p>...loading...</p>
                ) : null
              ) : (
                <form>
                  <h1 className="Verbindung-header">Verbindung</h1>
                  {/* <Bild/> 
              <img src={require('.../public/busemoji.png')} />
              */}
                  <h2 className="h2ConnectionDisplay">Schritt 1</h2>
                  <div className="container-ConnectionDisplay">
                    <div className="verbindung-textfeld">
                      {" "}
                      <p>Abfahrt:</p> {props.departureDay} {newDepartureTime}{" "}
                    </div>
                    <div className="verbindung-textfeld">Linie: 50</div>
                    <div className="verbindung-textfeld">
                      <p>Ankunft:</p> {props.departureDay}{" "}
                      {addDurationToTime(
                        newDepartureTime,
                        Number(0),
                        Number(splittedDurationsCheap[0])
                      )}{" "}
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Abfahrt an Haltestelle:</p> {props.departureStop}{" "}
                    </div>
                    <div className="busIcon">
                      <FaBus size="3rem" color="white" />
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Ankunft an Haltestelle:</p> Weender Straße-Ost{" "}
                    </div>
                  </div>
                  <h2 className="h2ConnectionDisplay">Schritt 2</h2>
                  <div className="container-ConnectionDisplay">
                    <div className="verbindung-textfeld">
                      {" "}
                      <p>Abfahrt:</p> {props.departureDay}{" "}
                      {addDurationToTime(
                        newDepartureTime,
                        Number(0),
                        Number(
                          splittedDurationsCheap[0] + splittedDurationsCheap[1]
                        )
                      )}{" "}
                    </div>
                    <div className="verbindung-textfeld">Linie: 50</div>
                    <div className="verbindung-textfeld">
                      <p>Ankunft:</p> {props.departureDay}
                      {addDurationToTime(
                        newDepartureTime,
                        Number(0),
                        Number(
                          splittedDurationsCheap[0] +
                            splittedDurationsCheap[1] +
                            splittedDurationsCheap[2]
                        )
                      )}{" "}
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Abfahrt an Haltestelle:</p> Weender Straße-Ost{" "}
                    </div>
                    <div className="busIcon">
                      <GiKickScooter size="3rem" color="white" />
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Ankunft an Haltestelle:</p> Neues Rathaus{" "}
                    </div>
                  </div>
                  <h2 className="h2ConnectionDisplay">Schritt 3</h2>
                  <div className="container-ConnectionDisplay">
                    <div className="verbindung-textfeld">
                      {" "}
                      <p>Abfahrt:</p> {props.departureDay}{" "}
                      {addDurationToTime(
                        newDepartureTime,
                        Number(0),
                        Number(
                          splittedDurationsCheap[0] +
                            splittedDurationsCheap[1] +
                            splittedDurationsCheap[2] +
                            splittedDurationsCheap[3]
                        )
                      )}{" "}
                    </div>
                    <div className="verbindung-textfeld">Linie: 50</div>
                    <div className="verbindung-textfeld">
                      <p>Ankunft:</p> {props.departureDay}{" "}
                      {addDurationToTime(
                        newDepartureTime,
                        Number(0),
                        Number(
                          splittedDurationsCheap[0] +
                            splittedDurationsCheap[1] +
                            splittedDurationsCheap[2] +
                            splittedDurationsCheap[3] +
                            splittedDurationsCheap[4]
                        )
                      )}{" "}
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Abfahrt an Haltestelle:</p> Neues Rathaus{" "}
                    </div>
                    <div className="busIcon">
                      <FaBus size="3rem" color="white" />
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Ankunft an Haltestelle:</p> {props.destinationStop}{" "}
                    </div>
                  </div>
                  <div className="buttons-verbindung">
                    <button
                      className="button"
                      onClick={backClickHandler}
                      type="submit"
                    >
                      {" "}
                      Zurück
                    </button>
                    <button
                      className="button"
                      onClick={() => {
                        endClickHandler();
                        props.onSetStartFormHidden(true);
                      }}
                    >
                      {" "}
                      Test Beenden?
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
          ;
        </div>
      ) : (
        <div>
          {clickedEnd ? (
            <End
            // onGoBack={() => {
            // setHideConnectionDisplay(false);
            // setEndClicked(false);}
            />
          ) : (
            <div className="container-verbindung">
              {/* {endClickHandler ? null:  */}
              {hideConnectionDisplay ? (
                loadingMessage ? (
                  <p>...loading...</p>
                ) : null
              ) : (
                <form>
                  <h1 className="Verbindung-header">Verbindung</h1>
                  {/* <Bild/> 
              <img src={require('.../public/busemoji.png')} />
              */}
                  <h2 className="h2ConnectionDisplay">Schritt 1</h2>
                  <div className="container-ConnectionDisplay">
                    <div className="verbindung-textfeld">
                      {" "}
                      <p>Abfahrt:</p> {props.departureDay} {newDepartureTime}{" "}
                    </div>
                    <div className="verbindung-textfeld">Linie: 50</div>
                    <div className="verbindung-textfeld">
                      <p>Ankunft:</p> {props.departureDay}{" "}
                      {addDurationToTime(
                        newDepartureTime,
                        Number(0),
                        Number(splittedDurationsFast[0])
                      )}{" "}
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Abfahrt an Haltestelle:</p> {props.departureStop}{" "}
                    </div>
                    <div className="busIcon">
                      <FaBus size="3rem" color="white" />
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Ankunft an Haltestelle:</p> Weender Straße-Ost{" "}
                    </div>
                  </div>
                  <h2 className="h2ConnectionDisplay">Schritt 2</h2>
                  <div className="container-ConnectionDisplay">
                    <div className="verbindung-textfeld">
                      {" "}
                      <p>Abfahrt:</p> {props.departureDay}{" "}
                      {addDurationToTime(
                        newDepartureTime,
                        Number(0),
                        Number(
                          splittedDurationsCheap[0] + splittedDurationsCheap[1]
                        )
                      )}{" "}
                    </div>
                    <div className="verbindung-textfeld">Linie: 50</div>
                    <div className="verbindung-textfeld">
                      <p>Ankunft:</p> {props.departureDay}{" "}
                      {addDurationToTime(
                        newDepartureTime,
                        Number(0),
                        Number(
                          splittedDurationsFast[0] +
                            splittedDurationsCheap[1] +
                            splittedDurationsCheap[2]
                        )
                      )}{" "}
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Haltestelle:</p> Weender Straße-Ost{" "}
                    </div>
                    <div className="busIcon">
                      <FaBus size="3rem" color="white" />
                    </div>
                    <div className="verbindung-textfeld">
                      <p>Haltestelle:</p> {props.destinationStop}{" "}
                    </div>
                  </div>
                  <div className="buttons-verbindung">
                    <button
                      className="button"
                      onClick={backClickHandler}
                      type="submit"
                    >
                      {" "}
                      Zurück
                    </button>
                    <button
                      className="button"
                      onClick={() => {
                        endClickHandler();
                        props.onSetStartFormHidden(true);
                      }}
                    >
                      {" "}
                      Test Beenden?
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      )}
      )
    </div>
  );
};

export default ConnectionDisplay;
