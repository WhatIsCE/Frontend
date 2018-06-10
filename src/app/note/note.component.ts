import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NOTES } from '../mock-notes';

@Component({
  selector: "app-note",
  templateUrl: "./note.component.html",
  styleUrls: ["./note.component.css"]
})
export class NoteComponent implements OnInit {

  notes: Note[] = NOTES;

  constructor() { }

  ngOnInit() {}
}
