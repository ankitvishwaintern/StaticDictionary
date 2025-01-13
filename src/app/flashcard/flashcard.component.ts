import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Word } from '../word.interface';

@Component({
  selector: 'app-flashcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent {
  @Input() word!: Word;
  isFlipped = false;

  flip() {
    this.isFlipped = !this.isFlipped;
    // if ('speechSynthesis' in window) {
    //   const synth = window.speechSynthesis;
    //   const utterance = new SpeechSynthesisUtterance('hello');
    //   synth.speak(utterance);
    // } else {
    //   console.log('Text-to-speech not supported');
    // }
  }

  pronounceWord(event: MouseEvent) {
    event.stopPropagation(); // Prevent card flip when clicking the pronunciation icon
    
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(this.word.term);
      utterance.rate = 0.8; // Slightly slower rate for better clarity
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    } else {
      console.log('Text-to-speech not supported in this browser');
    }
  }
}