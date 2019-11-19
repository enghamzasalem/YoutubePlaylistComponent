import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
import "./playlist-embed.js";

class StartPolymer3 extends PolymerElement {
  static get template() {
    return html`
      <playlist-embed width="100%" height="700" listid="PL32HFpx_LBMvvsDUTEBQxIdrmszkfEM0H"></playlist-embed>
    `;
  }
}

// Register the element with the browser.
customElements.define("start-polymer3", StartPolymer3);
