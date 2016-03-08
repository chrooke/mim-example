/**
 * Created by Andrew Rapo on 12/27/15.
 */
"use strict";

class SpeakerIds {
    constructor(data) {
        this.data = data;
        this.speakerIdStatus = null;
        this.speakerIds = null;

        if (data) {
            this.initWithData(data);
        }
    }

    initWithData(data) {
        this.speakerIdStatus = data.speakerIdStatus;
        this.speakerIds = data.speakerIds;
    }

    get primarySpeaker() {
      let result = null;
      if (this.speakerIds && this.speakerIds.length > 0) {
        result = this.speakerIds[0];
      }

      return result;
    }

    toHtml() {
        let html = '<p>SpeakerIds:</br>';

        html += `speakerIdStatus: ${this.speakerIdStatus}</br>`;

        if (this.speakerIds) {
            this.speakerIds.forEach(id => {
                html += `${id}, `;
            });
        }

        html += '</p>';

        return html;
    }
}

module.exports =  SpeakerIds;
