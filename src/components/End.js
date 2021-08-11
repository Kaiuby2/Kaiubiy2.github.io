import React from "react";
import "../Style.css";
import Logo from "./Logo.js";

const End = (props) => {
  // Button Click Handler einfügen

  return (
    <div>
      <form>
        <header className="Startseite-header">
          <h1 className="logo">Nav2Gö</h1>
          <div id="endText">
            <p>
              <br></br>Vielen Dank für die Teilnahme!{" "}
            </p>
            <p>
              Klicken Sie jetzt bitte auf den Button, um zur Umfrage zu gelangen
              {/* <p> Klicken Sie jetzt bitte auf den Button, um zur zweiten App-Version zu gelangen */}
              <br></br>
              <br></br>
            </p>
          </div>
        </header>
        <div id="containerButtonEnd">
          <a href="https://www.survio.com/survey/d/C3K5I4C4W7L5R1J7O">
            Umfrage starten
          </a>
          {/* <a href="https://morza95.github.io">
            App-Version 2 starten
          </a> */}
          {/* <button type="submit">Zurück auf Anfang</button> */}
        </div>
      </form>
    </div>
  );
};

export default End;
