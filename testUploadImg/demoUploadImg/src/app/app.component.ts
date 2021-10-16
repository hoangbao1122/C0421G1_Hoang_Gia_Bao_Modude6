import {Component} from '@angular/core';

import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";
import {finalize} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "cloudsSorage";
  selectedFile: File | undefined;
  fb:string|undefined;
  downloadURL: Observable<string> | undefined;

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit() {
  }

  onFileSelected(event:Event) {
    var n = Date.now();
    // @ts-ignore
    const file = event.target.files[0];
    const filePath = `RoomsImages/${n}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(`RoomsImages/${n}`, file);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }
}
