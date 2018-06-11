import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"]
})
export class NoteComponent implements OnInit {

  notes: Note[];
  selectedIndex: number = 0;

  isLoaded: Boolean = false;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes()
      .subscribe(notes => { this.notes = notes; this.isLoaded = true; console.log(this.notes) });
  }
}
