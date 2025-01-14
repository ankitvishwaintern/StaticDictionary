import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashcardComponent } from '../../flashcard/flashcard.component';
import { WordsService } from '../../words.service';
import { Word } from '../../word.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FlashcardComponent, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentWord: Word | null = null;
  currentPage = 0;
  maxPages = 0;
  searchTerm = '';
  private words: Word[] = [];
  private filteredWords: Word[] = [];

  constructor(private wordsService: WordsService) {}

  ngOnInit() {
    this.wordsService.getWords().subscribe(words => {
      this.words = words;
      this.filteredWords = words;
      this.maxPages = words.length;
      this.updateCurrentWord();
    });
  }

  searchWord() {
    if (!this.searchTerm.trim()) {
      this.filteredWords = this.words;
    } else {
      const term = this.searchTerm.toLowerCase().trim();
      this.filteredWords = this.words.filter(word => 
        word.term.toLowerCase().includes(term)
      );
    }
    this.maxPages = this.filteredWords.length;
    this.currentPage = 0;
    this.updateCurrentWord();
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
    this.currentWord = this.filteredWords[this.currentPage];
  }

  firstPage() {
    this.currentPage = 0;
    this.updateCurrentWord();
  }

  lastPage() {
    this.currentPage = this.maxPages - 1;
    this.updateCurrentWord();
  }
}