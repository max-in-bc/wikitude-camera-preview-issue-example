"use strict";
/// <reference path="../typings/index.d.ts" />
var Remake;
/// <reference path="../typings/index.d.ts" />
(function (Remake) {
    var App = /** @class */ (function () {
        function App() {
            console.log('App initialized');
            this.setLocationChanged();
        }
        App.prototype.getStartupInformation = function () {
            var _this = this;
            setTimeout(function () {
                _this.ready();
            }, 1000);
        };
        App.prototype.ready = function () {
            $('#pre-loading').fadeOut();
            $('#vue-app').fadeIn();
        };
        App.prototype.openCameraPreview = function () {
            AR.platform.sendJSONObject({
                action: 'open_camera_preview'
            });
        };
        App.prototype.closeWikitude = function () {
            AR.platform.sendJSONObject({
                action: 'close_wikitude_camera'
            });
        };
        App.prototype.hideWikitude = function () {
            AR.platform.sendJSONObject({
                action: 'hide_wikitude_camera'
            });
        };
        App.prototype.showWikitude = function () {
            AR.platform.sendJSONObject({
                action: 'show_wikitude_camera'
            });
        };
        App.prototype.setLocationChanged = function () {
            if (window.hasOwnProperty('AR')) {
                AR.context.onLocationChanged = function (lat, lng, alt, accuracy) {
                    vue.lat = lat;
                    vue.lng = lng;
                };
            }
        };
        return App;
    }());
    Remake.App = App;
})(Remake || (Remake = {}));
var app;
var vue;
$(function () {
    app = new Remake.App();
    // @ts-ignore
    vue = new Vue({
        el: '#vue-app',
        data: {},
        methods: {
            openCameraPreview: function () {
                app.openCameraPreview();
            },
            hideWikitude: function () {
                app.hideWikitude();
            },
            closeWikitude: function () {
                app.closeWikitude();
            },
        }
    });
});
//# sourceMappingURL=build.js.map