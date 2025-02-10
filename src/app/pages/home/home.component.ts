import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlashcardComponent } from '../../flashcard/flashcard.component';
import { WordsService } from '../../words.service';
import { AuthService } from '../../services/auth.service';
import { RegisterModalComponent } from '../../components/register-modal/register-modal.component';
import { Word } from '../../word.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FlashcardComponent, FormsModule, RegisterModalComponent],
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
  showRegisterModal = false;
  wordsViewed = 0;
  isRegistered = false;
  remainingFreeWords = 10;
  @ViewChild(FlashcardComponent) flashcard!: FlashcardComponent;

  constructor(
    private wordsService: WordsService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.isRegistered = !!user;
      this.wordsViewed = user?.wordsViewed || 0;
      this.remainingFreeWords = Math.max(0, 10 - this.wordsViewed);
    });

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
      this.resetFlipState();
    }
  }

  nextPage() {
    if (this.currentPage < this.maxPages - 1) {
      if (!this.isRegistered && this.wordsViewed >= 10) {
        this.showRegisterModal = true;
        return;
      }
      let min = 0;
      let max = this.filteredWords.length;
      let random = Math.floor(Math.random() * (max - min + 1)) + min;
      this.currentPage = random;

      this.updateCurrentWord();
      this.wordsViewed++;
      this.resetFlipState();

      if (this.isRegistered) {
        this.currentPage = random;
        this.updateCurrentWord();
        this.wordsViewed++;
      }
    }
  }

  updateCurrentWord() {
    this.currentWord = this.filteredWords[this.currentPage];
  }

  firstPage() {
    this.currentPage = 0;
    this.updateCurrentWord();
    this.resetFlipState();
  }

  lastPage() {
    this.currentPage = this.maxPages - 1;
    this.updateCurrentWord();
    this.resetFlipState();
  }

  closeRegisterModal() {
    this.showRegisterModal = false;
  }

  private resetFlipState() {
    if (this.flashcard) {
      this.flashcard.isFlipped = false;
    }
  }
}