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
      .subscribe(notes => { this.notes = notes; this.isLoaded = true; console.log(this.notes); setTimeout(() => { this.nextText(); }, this.calculateTime()); });

  }

  nextText() {
    if (this.selectedIndex < this.notes.length - 1) {
      this.selectedIndex++;
    } else {
      this.selectedIndex = 0;
    }
    setTimeout(() => {
      this.nextText();
    }, this.calculateTime());
  }

  private calculateTime(): number {
    return (this.notes[this.selectedIndex].content.length + this.notes[this.selectedIndex].author.length) * 80;
  }
}
