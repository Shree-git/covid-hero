import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { finalize } from 'rxjs/operators'
import { Router } from '@angular/router';



@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.page.html',
  styleUrls: ['./display-photo.page.scss'],
})
export class DisplayPhotoPage implements OnInit {
  file: File
  downloadURL: string
  photoUrl: string
  constructor(
    private firebase: AngularFireStorage, private authService: AuthenticationService, private router: Router) { }
  
  ngOnInit() {


  }

  photoChanged(photo){
    this.file = photo.target.files
    var filePath = 'images/' + this.file[0].name
    const fileRef = this.firebase.ref(filePath)
    this.firebase.upload(filePath, this.file[0]).snapshotChanges().pipe(
      finalize(()=>{
        fileRef.getDownloadURL().subscribe(url =>{
          this.downloadURL = url
          
        })
      })
    ).subscribe()
}

  savePhoto(){
    this.authService.updatePhotoURL(this.downloadURL)
    this.downloadURL = null
  }

  getPhoto(){
   
     this.photoUrl = this.authService.getUser().photoURL
   
  }


}
