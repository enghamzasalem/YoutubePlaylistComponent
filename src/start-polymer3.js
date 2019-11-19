/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// Import statements in Polymer 3.0 can now use package names.
// polymer-element.js now exports PolymerElement instead of Element,
// so no need to change the symbol.
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
