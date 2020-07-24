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
    // this.photoService.loadSaved();

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
  //   var storageRef = this.firebase.storage.ref()
    
  //   console.log(this.file[0].name)
  //   const uploadTask = storageRef.child('images/' + this.file[0].name).put(this.file[0])
  //   const task = storageRef.child('images/' + this.file[0].name)
  //   task.getDownloadURL()

  //   from(task.getDownloadURL()).subscribe(
  //     download => );
  //   uploadTask.on('state_changed', function(snapshot){ 
  //     // var progress =  
  //     //  (snapshot.bytesTransferred / snapshot.totalBytes) * 100; 
     
      
  //     //   switch (snapshot.state) { 
  //     //     case this.firebase.storage.TaskState.PAUSED: 
  //     //       console.log('Upload is paused'); 
  //     //       break; 
  //     //     case this.firebase.storage.TaskState.RUNNING: 
  //     //       console.log('Upload is running'); 
  //     //       break; 
  //     //   } 
  //   }, function(error) {console.log(error); 
  //   }, function() { 
  //         // Upload completed successfully, now we can get the download URL
  //     uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) =>{
  //     this.downloadURL = downloadURL
  //       console.log('File available at', this.downloadURL);
      
  // }).then(()=>{
  //   console.log(this.downloadURL)
  
  //   this.authService.updatePhotoURL(this.downloadURL)
  // })})



}

  savePhoto(){
    this.authService.updatePhotoURL(this.downloadURL)
    this.downloadURL = null
  }

  getPhoto(){
   
     this.photoUrl = this.authService.getUser().photoURL
   
  }


}
