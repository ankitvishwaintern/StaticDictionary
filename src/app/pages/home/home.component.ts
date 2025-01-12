import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlashcardComponent } from '../../flashcard/flashcard.component';
import { WordsService } from '../../words.service';
import { Word } from '../../word.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FlashcardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentWord: Word | null = null;
  currentPage = 0;
  maxPages = 0;
  private words: Word[] = [];

  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.wordsService.getWords().subscribe(words => {
      this.words = words;
      this.maxPages = words.length;
      this.updateCurrentWord();
    });
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateCurrentWord();
    }
  }

  nextPage() {
    if (this.currentPage < this.maxPages - 1) {
      this.currentPage++;
      this.updateCurrentWord();
    }
  }

  updateCurrentWord() {
    this.currentWord = this.words[this.currentPage];
  }
}