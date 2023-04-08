import { Component, Input } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-elementexp',
  templateUrl: './elementexp.component.html',
  styleUrls: ['./elementexp.component.css']
})
export class ElementexpComponent {
  
  id: any;
  descripcion: string = "";

  constructor(private route: ActivatedRoute, private database: DatabaseService){
      this.route.params.subscribe( (data) => {
        this.id = parseInt(this.route.snapshot.paramMap.get('id') as string);
    })
  }

  
}
