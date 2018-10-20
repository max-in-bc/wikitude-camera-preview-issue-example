import { Injectable } from '@angular/core';
import {Platform, Events} from "ionic-angular";

declare var WikitudePlugin: WikitudePlugin;
@Injectable()
export class WikitudeProvider {
  readonly API_KEY = 'Ma317cIsmfE9HI4EoRA5P5V8oxs6JvzGV6YJs20VI911Pm3HLuyZay+8YYMX5Dg50cq6gqeE4IfjgRG55bQKxf6brAgeabdaT6P/fmvgoWb6Td+UcqvyRIELBigd48wxuiP3yLZuvta0Y5rnf57MslsWJ1A4FRVZEDupyud8q4hTYWx0ZWRfX2MO1R4FfHYQYNJJ7xAzw2IDACThzYR9rdnYfXARA4hTtGWwn0hkn0tzPGqrmQh2GrjbXCRhc3Xayz2eyWiCRz2Bq8026BHag3OWlS64glrWlUT5tup+pFhKJTFFjAQvXTnZ/JJnPq8XuzXsn4kjpI9+idpzzG44RhRGrz/zrlEr73xTU0qi8JE7Fp93i1551sljpriQ0yLtRMlTWgrUa6D/NQ8fcKTt6hJrHAlEu5s+Kmb+1wcv6H+nBvh0avh+TjGckDwSiim5YYv10XrbJlquxgz1Y+RjErZa6zCTXYOyHrDnxzDmFOV2w677N7+4+LdTaibgskYb4jq5qnChejmwF0/NftCE+5LQnMq6x7pkVJZZvWLOgdaN8BqnaXakcDC15keL0XWXuPBS9Q/2Cg7c9vuQgUvoFlFkqenGVgDgZz1yrTtezFzvm5OyTCtXwujXTMHahJoj2wdRC+NF3R5bUFxGSrhCS4GSRfbuMRDnPrWGTnip1BbOTaXBWuSb2+mi/v6606b9YASezqX+U7HN4GcOO+I4RQ==';
  constructor(public pl: Platform, public events: Events) {

  }

  start(started_already=false): Promise<any>{
    let first_OK = true;
    if (!started_already){
      WikitudePlugin._sdkKey = this.API_KEY;
      return new Promise<any>((resolve, reject) => {
        this.checkCompatability().then((can_start) => {
          if (can_start){
            WikitudePlugin.setJSONObjectReceivedCallback((data: any) => {
              console.log(data);
              switch(data.action) {
                case 'open_camera_preview': this.hideWikitudeCamera(); this.events.publish('open_camera_preview'); break;
                case 'close_wikitude_camera': this.stop(); this.events.publish('close_wikitude_camera'); break;
                case 'hide_wikitude_camera': this.hideWikitudeCamera(); this.events.publish('hide_wikitude_camera'); break;
                case 'show_wikitude_camera': this.showWikitudeCamera(); this.events.publish('show_wikitude_camera'); break;
              };
            });

            WikitudePlugin.loadARchitectWorld(
              () => {
                setTimeout(() => {
                  WikitudePlugin.callJavaScript('app.getStartupInformation();');
                }, 500);
                WikitudePlugin.onWikitudeError = (err) => {
                  console.log('Wikitude error!', err);
                };
                WikitudePlugin.onPause = () => {
                  console.log('Wikitude plugin paused');
                };
                WikitudePlugin.onResume = () => {
                  console.log('Wikitude plugin resumed');
                };
                WikitudePlugin.onWikitudeOK = () => {
                  console.log('Wikitude plugin ok');
                  if (first_OK){
                    first_OK = false;
                    resolve();
                  }
                };
                WikitudePlugin.onBackButton = () => {
                  console.log('back button clicked');
                };
              },
              (err) => {throw Error('Failed to load world')},
              'www/assets/remake_xr/index.html',
              ['geo'],
              <any>{
                'camera_position': 'back',
                'camera_resolution': 'auto'
              })
          }
          else{
            reject("Not compatible");
          }
        });
      });
    }
    else{
      this.showWikitudeCamera();
      return Promise.resolve();
    }
  }

  stop(): Promise<any>{
    return new Promise<any>((resolve) => {
      WikitudePlugin.close();
      resolve();
    });
  }

  hideWikitudeCamera(){
    WikitudePlugin.hide();
  }

  showWikitudeCamera(){
    WikitudePlugin.show();
  }

  private checkCompatability(): Promise<boolean>{
    return new Promise((res) => {
      WikitudePlugin.isDeviceSupported(() => {
        res(true);
      }, () => {
        res(false);
      }, [WikitudePlugin.FeatureGeo]);
    });
  }
}
