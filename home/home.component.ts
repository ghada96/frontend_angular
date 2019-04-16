import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dones=[]
  todos=[{
    description:"MEAN",
    
    date:new Date(2016,3,1)
  },
  {
    description:"ghadaa",
    
    date:new Date(2016,3,1)
  },
  {
    description:"success",
    
    date:new Date(2016,3,1)
  }]

  constructor() { }

  ngOnInit() {
  }
  remove(todo){
    let index=this.todos.indexOf(todo)
    this.todos.splice(index,1);
  }
  accomplished(todo){
    let index =this.todos.indexOf(todo)
  
    this.dones.push(this.todos[index])
    this.todos.splice(index,1)
  }

 

  delete_done(done)
  {
    let index =this.dones.indexOf(done)
    this.dones.splice(index,1)
  }

}
