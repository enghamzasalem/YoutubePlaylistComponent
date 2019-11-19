import {PolymerElement, html} from "@polymer/polymer/polymer-element.js";
class PlaylistEmbed extends PolymerElement {
  static get properties() {
    return {
      width: {
        type: String,
        value: ""
      },
      height: {
        type: String,
        value: ""
      },
      listid: {
        type: URL
      }
    };
  }
  static get template() {
    return html`
      <iframe
        width="[[width]]"
        height="[[height]]"
        src="https://www.youtube.com/embed/videoseries?list=[[listid]]"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      ></iframe>
    `;
  }
}

customElements.define("playlist-embed", PlaylistEmbed);
