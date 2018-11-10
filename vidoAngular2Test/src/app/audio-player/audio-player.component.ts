import { Component, OnInit } from "@angular/core";
import {VgAPI} from 'videogular2/core';

@Component({
    selector: 'app-audio-player',
    templateUrl: './audio-player.component.html',
    styleUrls: [ './audio-player.component.css' ]
})
export class AudioPlayerComponent implements OnInit {
    sources: Array<Object>;
    api:VgAPI;
    constructor() {
        this.sources = [
            {
                src: "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1wfVKBKepZm.mp3",
                type: "audio/mp3"
            },
            {
                src: "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1wfVKBKepZm.mp3",
                type: "audio/mp3"
            }
        ];
    }

    ngOnInit() {
    }
    onPlayerReady(api:VgAPI) {
        this.api = api;
        this.api.getDefaultMedia().subscriptions.ended.subscribe(
            () => {
                // Set the video to the beginning
                this.changeSource()
                this.api.play();
            }
        );
    }

    changeSource(){
        this.sources = this.sources = [
            {
                src: "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1j7kSbEOaTr.mp3",
                type: "audio/mp3"
            },
            {
                src: "https://s1.vocaroo.com/media/download_temp/Vocaroo_s1j7kSbEOaTr.mp3",
                type: "audio/mp3"
            }
        ];
        
        
    }


}
