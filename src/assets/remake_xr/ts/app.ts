/// <reference path="../typings/index.d.ts" />

module Remake {
    export class App {



        constructor() {
            console.log('App initialized');
            this.setLocationChanged();
        }


        getStartupInformation() {
          setTimeout(() => {
            this.ready();
          }, 1000);
        }


        ready() {
            $('#pre-loading').fadeOut();
            $('#vue-app').fadeIn();
        }

        openCameraPreview(){
          AR.platform.sendJSONObject({
            action: 'open_camera_preview'
          });
        }

        closeWikitude(){
          AR.platform.sendJSONObject({
            action: 'close_wikitude_camera'
          });
        }

        hideWikitude(){
          AR.platform.sendJSONObject({
            action: 'hide_wikitude_camera'
          });
        }

        showWikitude(){
          AR.platform.sendJSONObject({
            action: 'show_wikitude_camera'
          });
        }
        openBarcodeScanner(){
          AR.platform.sendJSONObject({
            action: 'open_barcode_scanner'
          });
        }

        private setLocationChanged() {
            if(window.hasOwnProperty('AR')) {
                AR.context.onLocationChanged = (lat: number, lng: number, alt: number, accuracy: number) => {
                    vue.lat = lat;
                    vue.lng = lng;
                };
            }
        }
    }
}

let app: Remake.App;
var vue: any;
$(function(){
    app = new Remake.App();
    // @ts-ignore
    vue = new Vue({
        el: '#vue-app',
        data: {},
        methods: {
          openCameraPreview: function() {
            app.openCameraPreview();
          },
          hideWikitude: function() {
            app.hideWikitude();
          },
          closeWikitude: function() {
            app.closeWikitude();
          },
          openBarcodeScanner: function(){
            app.openBarcodeScanner();
          }

        }
    });
});

