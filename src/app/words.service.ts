import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { Word } from './word.interface';

@Injectable({
  providedIn: 'root'
})
export class WordsService {
  private words: Word[] = [];

  constructor(private http: HttpClient) {
    this.loadWords();
  }

  private loadWords(): void {
    this.http.get<any>('assets/data/gre_wordlist.json').subscribe(data => {
      this.words.push(...data);
    }
    );
  }

  getWords(): Observable<Word[]> {
    //return of(this.words);
    return this.http.get<any>('assets/data/gre_list_completed.json');
    
    
  }

  getWord(id: number): Word | undefined {
    return this.words.find(word => word.id === id);
  }
}