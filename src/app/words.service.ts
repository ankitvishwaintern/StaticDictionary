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
    this.http.get<any>('assets/data/gre_wordlist.json').subscribe(data =>
      {
       this.words.push(...data);
      }
    );
  }

  getWords():Observable<Word[]> {
    //return of(this.words);
    //return this.http.get<any>('assets/data/gre_wordlist.json');
    return of([
      {
        "id": 1,
        "term": "abase",
        "picture": "https://artymarty99.wordpress.com/wp-content/uploads/2016/03/fb_img_1456490561431.jpg",
        "meaning": "To humiliate or degrade someone.",
        "mnemonic": ""
      },
      {
        "id": 2,
        "term": "abash",
        "picture": "https://images.pexels.com/photos/123457/pexels-photo-123457.jpeg",
        "meaning": "To make someone feel embarrassed or ashamed.",
        "mnemonic": ""
      },
      {
        "id": 3,
        "term": "abate",
        "picture": "https://images.pexels.com/photos/123458/pexels-photo-123458.jpeg",
        "meaning": "To reduce in intensity or amount.",
        "mnemonic": ""
      },
      {
        "id": 4,
        "term": "abbreviate",
        "picture": "https://images.pexels.com/photos/123459/pexels-photo-123459.jpeg",
        "meaning": "To shorten a word, phrase, or text.",
        "mnemonic": ""
      },
      {
        "id": 5,
        "term": "abdicate",
        "picture": "https://images.pexels.com/photos/123460/pexels-photo-123460.jpeg",
        "meaning": "To give up a position of power or responsibility.",
        "mnemonic": ""
      },
      {
        "id": 6,
        "term": "aberrant",
        "picture": "https://images.pexels.com/photos/123461/pexels-photo-123461.jpeg",
        "meaning": "Deviating from the normal or expected course.",
        "mnemonic": ""
      },
      {
        "id": 7,
        "term": "aberration",
        "picture": "https://images.pexels.com/photos/123462/pexels-photo-123462.jpeg",
        "meaning": "A departure from what is normal or expected.",
        "mnemonic": ""
      },
      {
        "id": 8,
        "term": "abet",
        "picture": "https://images.pexels.com/photos/123463/pexels-photo-123463.jpeg",
        "meaning": "To assist or encourage someone to do something wrong.",
        "mnemonic": ""
      },
      {
        "id": 9,
        "term": "abeyance",
        "picture": "https://images.pexels.com/photos/123464/pexels-photo-123464.jpeg",
        "meaning": "A state of temporary suspension or inactivity.",
        "mnemonic": ""
      },
      {
        "id": 10,
        "term": "abhor",
        "picture": "https://images.pexels.com/photos/123465/pexels-photo-123465.jpeg",
        "meaning": "To feel extreme dislike or hatred for something.",
        "mnemonic": ""
      },
      {
        "id": 11,
        "term": "abide",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 12,
        "term": "abject",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 13,
        "term": "abjure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 14,
        "term": "ablution",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 15,
        "term": "abnegation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 16,
        "term": "abode",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 17,
        "term": "abolish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 18,
        "term": "abominable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 19,
        "term": "abominate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 20,
        "term": "aboriginal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 21,
        "term": "abortive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 22,
        "term": "abrasive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 23,
        "term": "abridge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 24,
        "term": "abrogate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 25,
        "term": "abscission",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 26,
        "term": "abscond",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 27,
        "term": "absolute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 28,
        "term": "absolve",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 29,
        "term": "abstain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 30,
        "term": "abstemious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 31,
        "term": "abstinence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 32,
        "term": "abstract",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 33,
        "term": "abstruse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 34,
        "term": "abusive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 35,
        "term": "abut",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 36,
        "term": "abysmal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 37,
        "term": "abyss",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 38,
        "term": "academic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 39,
        "term": "accede",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 40,
        "term": "accelerate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 41,
        "term": "accessible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 42,
        "term": "accessory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 43,
        "term": "acclaim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 44,
        "term": "acclimate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 45,
        "term": "acclivity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 46,
        "term": "accolade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 47,
        "term": "accomplice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 48,
        "term": "accord",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 49,
        "term": "accost",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 50,
        "term": "accoutre",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 51,
        "term": "accretion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 52,
        "term": "accrue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 53,
        "term": "acerbity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 54,
        "term": "acetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 55,
        "term": "acidulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 56,
        "term": "acknowledge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 57,
        "term": "acme",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 58,
        "term": "acne",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 59,
        "term": "acoustics",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 60,
        "term": "acquiesce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 61,
        "term": "acquittal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 62,
        "term": "acrid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 63,
        "term": "acrimonious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 64,
        "term": "acrophobia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 65,
        "term": "actuarial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 66,
        "term": "actuary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 67,
        "term": "actuate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 68,
        "term": "acuity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 69,
        "term": "acumen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 70,
        "term": "acute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 71,
        "term": "adage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 72,
        "term": "adamant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 73,
        "term": "adapt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 74,
        "term": "addendum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 75,
        "term": "addiction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 76,
        "term": "addle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 77,
        "term": "address",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 78,
        "term": "adept",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 79,
        "term": "adhere",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 80,
        "term": "adherent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 81,
        "term": "adjacent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 82,
        "term": "adjoin",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 83,
        "term": "adjourn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 84,
        "term": "adjunct",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 85,
        "term": "adjuration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 86,
        "term": "adjutant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 87,
        "term": "admonish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 88,
        "term": "adore",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 89,
        "term": "adorn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 90,
        "term": "adroit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 91,
        "term": "adulation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 92,
        "term": "adulterate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 93,
        "term": "Advent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 94,
        "term": "adventitious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 95,
        "term": "adversary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 96,
        "term": "adverse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 97,
        "term": "adversity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 98,
        "term": "advert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 99,
        "term": "advocacy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 100,
        "term": "advocate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 101,
        "term": "aegis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 102,
        "term": "aesthetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 103,
        "term": "affable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 104,
        "term": "affected",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 105,
        "term": "affidavit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 106,
        "term": "affiliation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 107,
        "term": "affinity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 108,
        "term": "affirmation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 109,
        "term": "affliction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 110,
        "term": "affluence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 111,
        "term": "affront",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 112,
        "term": "afterlife",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 113,
        "term": "agape",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 114,
        "term": "agenda",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 115,
        "term": "agglomeration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 116,
        "term": "aggrandize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 117,
        "term": "aggregate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 118,
        "term": "aghast",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 119,
        "term": "agility",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 120,
        "term": "agitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 121,
        "term": "agnostic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 122,
        "term": "agog",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 123,
        "term": "agrarian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 124,
        "term": "airy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 125,
        "term": "alacrity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 126,
        "term": "alchemy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 127,
        "term": "alcove",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 128,
        "term": "alias",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 129,
        "term": "alienate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 130,
        "term": "alimentary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 131,
        "term": "alimony",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 132,
        "term": "allay",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 133,
        "term": "allege",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 134,
        "term": "allegiance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 135,
        "term": "allegory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 136,
        "term": "alleviate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 137,
        "term": "alliteration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 138,
        "term": "allocate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 139,
        "term": "alloy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 140,
        "term": "allude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 141,
        "term": "allure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 142,
        "term": "alluvial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 143,
        "term": "alms",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 144,
        "term": "aloft",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 145,
        "term": "aloof",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 146,
        "term": "altercation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 147,
        "term": "altruistic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 148,
        "term": "amalgam",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 149,
        "term": "amalgamate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 150,
        "term": "amass",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 151,
        "term": "amazon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 152,
        "term": "ambidextrous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 153,
        "term": "ambience",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 154,
        "term": "ambiguous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 155,
        "term": "ambivalence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 156,
        "term": "amble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 157,
        "term": "ambrosia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 158,
        "term": "ambulatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 159,
        "term": "ambush",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 160,
        "term": "ameliorate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 161,
        "term": "amenable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 162,
        "term": "amend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 163,
        "term": "amenities",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 164,
        "term": "amiable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 165,
        "term": "amicable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 166,
        "term": "amiss",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 167,
        "term": "amity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 168,
        "term": "amnesia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 169,
        "term": "amnesty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 170,
        "term": "amoral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 171,
        "term": "amorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 172,
        "term": "amorphous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 173,
        "term": "amphibian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 174,
        "term": "amphitheater",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 175,
        "term": "ample",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 176,
        "term": "amplify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 177,
        "term": "amputate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 178,
        "term": "amulet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 179,
        "term": "anachronism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 180,
        "term": "analgesia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 181,
        "term": "analgesic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 182,
        "term": "analogous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 183,
        "term": "analogy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 184,
        "term": "anarchist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 185,
        "term": "anarchy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 186,
        "term": "anathema",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 187,
        "term": "ancestry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 188,
        "term": "anchor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 189,
        "term": "ancillary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 190,
        "term": "anecdote",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 191,
        "term": "anemia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 192,
        "term": "anesthetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 193,
        "term": "anguish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 194,
        "term": "angular",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 195,
        "term": "animadversion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 196,
        "term": "animated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 197,
        "term": "animosity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 198,
        "term": "animus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 199,
        "term": "annals",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 200,
        "term": "anneal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 201,
        "term": "annex",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 202,
        "term": "annihilate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 203,
        "term": "annotate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 204,
        "term": "annuity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 205,
        "term": "annul",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 206,
        "term": "anodyne",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 207,
        "term": "anoint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 208,
        "term": "anomalous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 209,
        "term": "anomaly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 210,
        "term": "anonymity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 211,
        "term": "antagonism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 212,
        "term": "antecede",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 213,
        "term": "antecedents",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 214,
        "term": "antediluvian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 215,
        "term": "anthem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 216,
        "term": "anthology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 217,
        "term": "anthropoid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 218,
        "term": "anthropologist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 219,
        "term": "anthropomorphic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 220,
        "term": "anticlimax",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 221,
        "term": "antidote",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 222,
        "term": "antipathy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 223,
        "term": "antiquated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 224,
        "term": "antique",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 225,
        "term": "antiquity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 226,
        "term": "antiseptic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 227,
        "term": "antithesis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 228,
        "term": "antler",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 229,
        "term": "anvil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 230,
        "term": "apathy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 231,
        "term": "ape",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 232,
        "term": "aperture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 233,
        "term": "apex",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 234,
        "term": "aphasia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 235,
        "term": "aphorism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 236,
        "term": "apiarist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 237,
        "term": "apiary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 238,
        "term": "apiculture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 239,
        "term": "aplomb",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 240,
        "term": "apocalyptic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 241,
        "term": "apocryphal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 242,
        "term": "apogee",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 243,
        "term": "apolitical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 244,
        "term": "apologist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 245,
        "term": "apoplexy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 246,
        "term": "apostate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 247,
        "term": "apothecary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 248,
        "term": "apotheosis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 249,
        "term": "appall",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 250,
        "term": "apparent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 251,
        "term": "apparition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 252,
        "term": "appease",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 253,
        "term": "appellation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 254,
        "term": "append",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 255,
        "term": "application",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 256,
        "term": "apposite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 257,
        "term": "appraise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 258,
        "term": "appreciate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 259,
        "term": "apprehend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 260,
        "term": "apprehensive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 261,
        "term": "apprise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 262,
        "term": "approbation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 263,
        "term": "appropriate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 264,
        "term": "appurtenances",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 265,
        "term": "apropos",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 266,
        "term": "aptitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 267,
        "term": "aquiline",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 268,
        "term": "arable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 269,
        "term": "arbiter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 270,
        "term": "arbitrary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 271,
        "term": "arbitrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 272,
        "term": "arboreal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 273,
        "term": "arboretum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 274,
        "term": "arcade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 275,
        "term": "arcane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 276,
        "term": "archaeology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 277,
        "term": "archaic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 278,
        "term": "archetype",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 279,
        "term": "archipelago",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 280,
        "term": "archives",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 281,
        "term": "ardor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 282,
        "term": "arduous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 283,
        "term": "argot",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 284,
        "term": "aria",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 285,
        "term": "arid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 286,
        "term": "aristocracy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 287,
        "term": "armada",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 288,
        "term": "aromatic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 289,
        "term": "arraign",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 290,
        "term": "array",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 291,
        "term": "arrears",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 292,
        "term": "arrhythmic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 293,
        "term": "arrogance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 294,
        "term": "arroyo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 295,
        "term": "arsenal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 296,
        "term": "artery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 297,
        "term": "artful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 298,
        "term": "articulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 299,
        "term": "artifacts",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 300,
        "term": "artifice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 301,
        "term": "artisan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 302,
        "term": "artless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 303,
        "term": "ascendancy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 304,
        "term": "ascertain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 305,
        "term": "ascetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 306,
        "term": "ascribe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 307,
        "term": "aseptic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 308,
        "term": "ashen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 309,
        "term": "asinine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 310,
        "term": "askance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 311,
        "term": "askew",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 312,
        "term": "asperity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 313,
        "term": "aspersion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 314,
        "term": "aspirant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 315,
        "term": "aspire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 316,
        "term": "assail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 317,
        "term": "assay",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 318,
        "term": "assent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 319,
        "term": "assert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 320,
        "term": "assiduous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 321,
        "term": "assimilate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 322,
        "term": "assuage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 323,
        "term": "assurance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 324,
        "term": "asteroid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 325,
        "term": "astigmatism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 326,
        "term": "astral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 327,
        "term": "astringent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 328,
        "term": "astronomical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 329,
        "term": "astute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 330,
        "term": "asunder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 331,
        "term": "asylum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 332,
        "term": "asymmetric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 333,
        "term": "atavism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 334,
        "term": "atheistic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 335,
        "term": "atone",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 336,
        "term": "atrocity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 337,
        "term": "atrophy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 338,
        "term": "attentive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 339,
        "term": "attenuate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 340,
        "term": "attest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 341,
        "term": "attire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 342,
        "term": "attribute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 343,
        "term": "attrition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 344,
        "term": "atypical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 345,
        "term": "audacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 346,
        "term": "audit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 347,
        "term": "augment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 348,
        "term": "augury",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 349,
        "term": "august",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 350,
        "term": "aureole",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 351,
        "term": "auroral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 352,
        "term": "auspicious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 353,
        "term": "austere",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 354,
        "term": "authenticate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 355,
        "term": "authoritarian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 356,
        "term": "authoritative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 357,
        "term": "autocratic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 358,
        "term": "automaton",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 359,
        "term": "autonomous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 360,
        "term": "autopsy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 361,
        "term": "auxiliary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 362,
        "term": "avalanche",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 363,
        "term": "avantgarde",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 364,
        "term": "avarice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 365,
        "term": "avenge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 366,
        "term": "aver",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 367,
        "term": "averse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 368,
        "term": "aversion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 369,
        "term": "avert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 370,
        "term": "aviary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 371,
        "term": "avid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 372,
        "term": "avocation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 373,
        "term": "avow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 374,
        "term": "avuncular",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 375,
        "term": "awe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 376,
        "term": "awful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 377,
        "term": "awl",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 378,
        "term": "awry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 379,
        "term": "axiom",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 380,
        "term": "azure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 381,
        "term": "babble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 382,
        "term": "bacchanal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 383,
        "term": "bacchanalia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 384,
        "term": "bacchanalian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 385,
        "term": "backslide",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 386,
        "term": "backwards",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 387,
        "term": "badger",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 388,
        "term": "badinage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 389,
        "term": "baffle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 390,
        "term": "bait",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 391,
        "term": "baleful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 392,
        "term": "balk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 393,
        "term": "ballast",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 394,
        "term": "balm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 395,
        "term": "balmy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 396,
        "term": "banal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 397,
        "term": "bandy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 398,
        "term": "bane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 399,
        "term": "bank",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 400,
        "term": "bantering",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 401,
        "term": "bar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 402,
        "term": "barb",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 403,
        "term": "bard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 404,
        "term": "barefaced",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 405,
        "term": "bargain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 406,
        "term": "baroque",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 407,
        "term": "barrage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 408,
        "term": "barrister",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 409,
        "term": "barterer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 410,
        "term": "base",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 411,
        "term": "bask",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 412,
        "term": "bastard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 413,
        "term": "bastion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 414,
        "term": "bate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 415,
        "term": "battalion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 416,
        "term": "bauble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 417,
        "term": "bawdy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 418,
        "term": "bearing",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 419,
        "term": "beatific",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 420,
        "term": "beatitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 421,
        "term": "bedizen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 422,
        "term": "bedraggle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 423,
        "term": "beeline",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 424,
        "term": "befuddle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 425,
        "term": "beget",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 426,
        "term": "begrudge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 427,
        "term": "beguile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 428,
        "term": "behemoth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 429,
        "term": "beholden",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 430,
        "term": "belabor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 431,
        "term": "belated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 432,
        "term": "beleaguer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 433,
        "term": "belie",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 434,
        "term": "belittle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 435,
        "term": "bellicose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 436,
        "term": "belligerent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 437,
        "term": "bemoan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 438,
        "term": "bemused",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 439,
        "term": "benediction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 440,
        "term": "benefactor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 441,
        "term": "beneficent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 442,
        "term": "beneficial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 443,
        "term": "beneficiary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 444,
        "term": "benefit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 445,
        "term": "benevolent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 446,
        "term": "benign",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 447,
        "term": "benison",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 448,
        "term": "bent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 449,
        "term": "bequeath",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 450,
        "term": "berate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 451,
        "term": "bereaved",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 452,
        "term": "bereavement",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 453,
        "term": "bereft",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 454,
        "term": "berserk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 455,
        "term": "beseech",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 456,
        "term": "beset",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 457,
        "term": "besiege",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 458,
        "term": "besmirch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 459,
        "term": "bestial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 460,
        "term": "bestow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 461,
        "term": "betoken",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 462,
        "term": "betray",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 463,
        "term": "betroth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 464,
        "term": "bevy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 465,
        "term": "beware",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 466,
        "term": "bewitch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 467,
        "term": "bicameral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 468,
        "term": "bicker",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 469,
        "term": "bid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 470,
        "term": "biennial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 471,
        "term": "bifurcated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 472,
        "term": "bigot",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 473,
        "term": "bigotry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 474,
        "term": "bilious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 475,
        "term": "bilk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 476,
        "term": "billow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 477,
        "term": "billowing",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 478,
        "term": "biting",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 479,
        "term": "bitter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 480,
        "term": "bivouac",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 481,
        "term": "bizarre",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 482,
        "term": "blackball",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 483,
        "term": "blanch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 484,
        "term": "bland",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 485,
        "term": "blandishment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 486,
        "term": "blare",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 487,
        "term": "blase",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 488,
        "term": "blasphemy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 489,
        "term": "blatant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 490,
        "term": "bleak",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 491,
        "term": "blemish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 492,
        "term": "blight",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 493,
        "term": "blighted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 494,
        "term": "bliss",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 495,
        "term": "bloated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 496,
        "term": "blotch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 497,
        "term": "blowhard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 498,
        "term": "bludgeon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 499,
        "term": "blue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 500,
        "term": "blues",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 501,
        "term": "bluff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 502,
        "term": "blunder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 503,
        "term": "blunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 504,
        "term": "blurt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 505,
        "term": "blush",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 506,
        "term": "bluster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 507,
        "term": "bode",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 508,
        "term": "bog",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 509,
        "term": "bogus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 510,
        "term": "Bohemian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 511,
        "term": "boisterous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 512,
        "term": "bolster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 513,
        "term": "bolt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 514,
        "term": "bombardment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 515,
        "term": "bombast",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 516,
        "term": "bombastic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 517,
        "term": "bookish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 518,
        "term": "boon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 519,
        "term": "boor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 520,
        "term": "boorish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 521,
        "term": "boost",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 522,
        "term": "botch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 523,
        "term": "bouillon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 524,
        "term": "bound",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 525,
        "term": "bountiful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 526,
        "term": "bourgeois",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 527,
        "term": "bout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 528,
        "term": "bovine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 529,
        "term": "bowdlerize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 530,
        "term": "brackish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 531,
        "term": "brag",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 532,
        "term": "braggadocio",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 533,
        "term": "braggart",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 534,
        "term": "braid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 535,
        "term": "brand",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 536,
        "term": "brandish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 537,
        "term": "bravado",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 538,
        "term": "brave",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 539,
        "term": "brawl",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 540,
        "term": "brawn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 541,
        "term": "brawny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 542,
        "term": "brazen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 543,
        "term": "breach",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 544,
        "term": "breadth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 545,
        "term": "breed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 546,
        "term": "brevity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 547,
        "term": "bridle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 548,
        "term": "brim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 549,
        "term": "brindled",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 550,
        "term": "brink",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 551,
        "term": "brisk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 552,
        "term": "bristle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 553,
        "term": "bristling",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 554,
        "term": "brittle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 555,
        "term": "broach",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 556,
        "term": "brocade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 557,
        "term": "brochure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 558,
        "term": "broil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 559,
        "term": "bromide",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 560,
        "term": "brooch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 561,
        "term": "brood",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 562,
        "term": "brook",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 563,
        "term": "browbeat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 564,
        "term": "browse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 565,
        "term": "bruise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 566,
        "term": "brunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 567,
        "term": "brusque",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 568,
        "term": "buccaneer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 569,
        "term": "bucolic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 570,
        "term": "buffet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 571,
        "term": "buffoon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 572,
        "term": "buffoonery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 573,
        "term": "bugaboo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 574,
        "term": "bulge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 575,
        "term": "bulk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 576,
        "term": "bullion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 577,
        "term": "bully",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 578,
        "term": "bulwark",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 579,
        "term": "bump",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 580,
        "term": "bungle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 581,
        "term": "buoyant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 582,
        "term": "bureaucracy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 583,
        "term": "burgeon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 584,
        "term": "burlesque",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 585,
        "term": "burnish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 586,
        "term": "bust",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 587,
        "term": "buttress",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 588,
        "term": "buxom",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 589,
        "term": "cabal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 590,
        "term": "cache",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 591,
        "term": "cacophonous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 592,
        "term": "cadaver",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 593,
        "term": "cadaverous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 594,
        "term": "cadence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 595,
        "term": "cadet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 596,
        "term": "cajole",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 597,
        "term": "calamity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 598,
        "term": "calculated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 599,
        "term": "caliber",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 600,
        "term": "calligraphy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 601,
        "term": "callous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 602,
        "term": "callow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 603,
        "term": "callus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 604,
        "term": "calorific",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 605,
        "term": "calumny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 606,
        "term": "camaraderie",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 607,
        "term": "cameo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 608,
        "term": "camp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 609,
        "term": "canard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 610,
        "term": "candor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 611,
        "term": "canine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 612,
        "term": "canker",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 613,
        "term": "canny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 614,
        "term": "cant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 615,
        "term": "cantankerous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 616,
        "term": "cantata",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 617,
        "term": "canter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 618,
        "term": "canto",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 619,
        "term": "canvass",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 620,
        "term": "capacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 621,
        "term": "capacity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 622,
        "term": "capillary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 623,
        "term": "capitulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 624,
        "term": "caprice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 625,
        "term": "capricious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 626,
        "term": "capsize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 627,
        "term": "caption",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 628,
        "term": "captious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 629,
        "term": "carafe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 630,
        "term": "carapace",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 631,
        "term": "carcinogenic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 632,
        "term": "cardinal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 633,
        "term": "careen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 634,
        "term": "career",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 635,
        "term": "carefree",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 636,
        "term": "caricature",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 637,
        "term": "carillon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 638,
        "term": "carnage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 639,
        "term": "carnal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 640,
        "term": "carnivorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 641,
        "term": "carousal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 642,
        "term": "carping",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 643,
        "term": "carrion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 644,
        "term": "cartographer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 645,
        "term": "cascade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 646,
        "term": "caste",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 647,
        "term": "castigation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 648,
        "term": "castrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 649,
        "term": "casual",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 650,
        "term": "casualty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 651,
        "term": "cataclysm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 652,
        "term": "catalyst",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 653,
        "term": "catapult",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 654,
        "term": "cataract",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 655,
        "term": "catastrophe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 656,
        "term": "catcall",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 657,
        "term": "catechism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 658,
        "term": "cater",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 659,
        "term": "catharsis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 660,
        "term": "cathartic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 661,
        "term": "catholic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 662,
        "term": "caucus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 663,
        "term": "causal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 664,
        "term": "caustic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 665,
        "term": "cauterize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 666,
        "term": "cavalcade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 667,
        "term": "cavalier",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 668,
        "term": "cavil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 669,
        "term": "cede",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 670,
        "term": "celerity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 671,
        "term": "celestial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 672,
        "term": "celibate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 673,
        "term": "cemetery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 674,
        "term": "censor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 675,
        "term": "censorious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 676,
        "term": "censure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 677,
        "term": "centaur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 678,
        "term": "centigrade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 679,
        "term": "centrifugal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 680,
        "term": "centrifuge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 681,
        "term": "centripetal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 682,
        "term": "centurion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 683,
        "term": "cerebral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 684,
        "term": "cerebration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 685,
        "term": "ceremonious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 686,
        "term": "certitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 687,
        "term": "cessation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 688,
        "term": "cession",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 689,
        "term": "chafe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 690,
        "term": "chaff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 691,
        "term": "chaffing",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 692,
        "term": "chagrin",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 693,
        "term": "chalice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 694,
        "term": "chameleon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 695,
        "term": "champion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 696,
        "term": "championship",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 697,
        "term": "chancellor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 698,
        "term": "chant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 699,
        "term": "chaotic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 700,
        "term": "chapel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 701,
        "term": "chaperon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 702,
        "term": "chaplain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 703,
        "term": "char",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 704,
        "term": "charisma",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 705,
        "term": "charlatan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 706,
        "term": "charm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 707,
        "term": "chary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 708,
        "term": "chase",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 709,
        "term": "chasm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 710,
        "term": "chassis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 711,
        "term": "chaste",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 712,
        "term": "chasten",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 713,
        "term": "chastise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 714,
        "term": "chauvinist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 715,
        "term": "check",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 716,
        "term": "cherubic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 717,
        "term": "chicanery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 718,
        "term": "chide",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 719,
        "term": "chimerical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 720,
        "term": "chip",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 721,
        "term": "chisel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 722,
        "term": "chivalrous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 723,
        "term": "choice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 724,
        "term": "choir",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 725,
        "term": "choleric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 726,
        "term": "chore",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 727,
        "term": "choreography",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 728,
        "term": "chortle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 729,
        "term": "chorus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 730,
        "term": "chronic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 731,
        "term": "chronicle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 732,
        "term": "chuckle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 733,
        "term": "churlish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 734,
        "term": "ciliated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 735,
        "term": "cipher",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 736,
        "term": "circlet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 737,
        "term": "circuit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 738,
        "term": "circuitous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 739,
        "term": "circumlocution",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 740,
        "term": "circumscribe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 741,
        "term": "circumspect",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 742,
        "term": "circumvent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 743,
        "term": "cistern",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 744,
        "term": "citadel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 745,
        "term": "cite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 746,
        "term": "civil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 747,
        "term": "clairvoyant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 748,
        "term": "clamber",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 749,
        "term": "clamor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 750,
        "term": "clandestine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 751,
        "term": "clangor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 752,
        "term": "clap",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 753,
        "term": "clapper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 754,
        "term": "clarion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 755,
        "term": "clasp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 756,
        "term": "claustrophobia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 757,
        "term": "clavicle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 758,
        "term": "cleave",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 759,
        "term": "cleft",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 760,
        "term": "clemency",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 761,
        "term": "clientele",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 762,
        "term": "climactic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 763,
        "term": "clime",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 764,
        "term": "clip",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 765,
        "term": "clipper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 766,
        "term": "clique",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 767,
        "term": "cloister",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 768,
        "term": "clot",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 769,
        "term": "clout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 770,
        "term": "clown",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 771,
        "term": "cloying",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 772,
        "term": "coagulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 773,
        "term": "coalesce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 774,
        "term": "coalition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 775,
        "term": "coax",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 776,
        "term": "coda",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 777,
        "term": "coddle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 778,
        "term": "codicil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 779,
        "term": "codify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 780,
        "term": "coercion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 781,
        "term": "coeval",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 782,
        "term": "cog",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 783,
        "term": "cogent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 784,
        "term": "cogitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 785,
        "term": "cognate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 786,
        "term": "cognitive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 787,
        "term": "cognizance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 788,
        "term": "cohabit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 789,
        "term": "cohere",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 790,
        "term": "cohesion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 791,
        "term": "cohorts",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 792,
        "term": "coiffure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 793,
        "term": "coin",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 794,
        "term": "coincidence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 795,
        "term": "colander",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 796,
        "term": "collaborate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 797,
        "term": "collage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 798,
        "term": "collate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 799,
        "term": "collateral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 800,
        "term": "collation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 801,
        "term": "collected",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 802,
        "term": "colloquial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 803,
        "term": "colloquy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 804,
        "term": "collusion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 805,
        "term": "colossal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 806,
        "term": "colossus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 807,
        "term": "coma",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 808,
        "term": "comatose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 809,
        "term": "combustible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 810,
        "term": "comeback",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 811,
        "term": "comely",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 812,
        "term": "comestible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 813,
        "term": "comeuppance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 814,
        "term": "comity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 815,
        "term": "commandeer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 816,
        "term": "commemorate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 817,
        "term": "commemorative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 818,
        "term": "commensurate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 819,
        "term": "commiserate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 820,
        "term": "commodious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 821,
        "term": "commonplace",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 822,
        "term": "commonwealth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 823,
        "term": "communal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 824,
        "term": "commune",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 825,
        "term": "compact",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 826,
        "term": "compartment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 827,
        "term": "compassion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 828,
        "term": "compatible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 829,
        "term": "compelling",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 830,
        "term": "compendium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 831,
        "term": "compensatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 832,
        "term": "compilation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 833,
        "term": "compile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 834,
        "term": "complacency",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 835,
        "term": "complaisant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 836,
        "term": "complement",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 837,
        "term": "complementary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 838,
        "term": "compliance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 839,
        "term": "compliant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 840,
        "term": "complicity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 841,
        "term": "component",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 842,
        "term": "comport",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 843,
        "term": "compost",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 844,
        "term": "composure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 845,
        "term": "compound",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 846,
        "term": "comprehend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 847,
        "term": "comprehensive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 848,
        "term": "compress",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 849,
        "term": "comprise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 850,
        "term": "compromise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 851,
        "term": "compulsion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 852,
        "term": "compulsive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 853,
        "term": "compulsory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 854,
        "term": "compunction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 855,
        "term": "compute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 856,
        "term": "concatenate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 857,
        "term": "concave",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 858,
        "term": "concede",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 859,
        "term": "conceit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 860,
        "term": "concentric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 861,
        "term": "conception",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 862,
        "term": "concerted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 863,
        "term": "concession",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 864,
        "term": "conciliatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 865,
        "term": "concise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 866,
        "term": "conclave",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 867,
        "term": "conclusive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 868,
        "term": "concoct",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 869,
        "term": "concomitant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 870,
        "term": "concord",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 871,
        "term": "concordat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 872,
        "term": "concur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 873,
        "term": "concurrent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 874,
        "term": "condescend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 875,
        "term": "condign",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 876,
        "term": "condiments",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 877,
        "term": "condole",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 878,
        "term": "condone",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 879,
        "term": "conducive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 880,
        "term": "conduit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 881,
        "term": "confide",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 882,
        "term": "confidence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 883,
        "term": "confidential",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 884,
        "term": "confine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 885,
        "term": "confiscate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 886,
        "term": "conflagration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 887,
        "term": "confluence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 888,
        "term": "conformist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 889,
        "term": "conformity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 890,
        "term": "confound",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 891,
        "term": "congeal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 892,
        "term": "congenial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 893,
        "term": "congenital",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 894,
        "term": "conglomerate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 895,
        "term": "conglomeration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 896,
        "term": "congruence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 897,
        "term": "congruent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 898,
        "term": "conifer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 899,
        "term": "conjecture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 900,
        "term": "conjugal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 901,
        "term": "conjure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 902,
        "term": "connivance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 903,
        "term": "connoisseur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 904,
        "term": "connotation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 905,
        "term": "connubial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 906,
        "term": "consanguinity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 907,
        "term": "conscientious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 908,
        "term": "conscript",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 909,
        "term": "consecrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 910,
        "term": "consensus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 911,
        "term": "consequential",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 912,
        "term": "consign",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 913,
        "term": "consistency",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 914,
        "term": "console",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 915,
        "term": "consolidation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 916,
        "term": "consonance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 917,
        "term": "consonant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 918,
        "term": "consort",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 919,
        "term": "conspiracy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 920,
        "term": "conspire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 921,
        "term": "consternation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 922,
        "term": "constituency",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 923,
        "term": "constituent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 924,
        "term": "constitution",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 925,
        "term": "constraint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 926,
        "term": "construe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 927,
        "term": "consummate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 928,
        "term": "contagion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 929,
        "term": "contaminate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 930,
        "term": "contempt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 931,
        "term": "contend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 932,
        "term": "contention",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 933,
        "term": "contentious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 934,
        "term": "contest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 935,
        "term": "context",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 936,
        "term": "contiguous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 937,
        "term": "continence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 938,
        "term": "contingent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 939,
        "term": "contortions",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 940,
        "term": "contraband",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 941,
        "term": "contravene",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 942,
        "term": "contrite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 943,
        "term": "contrivance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 944,
        "term": "contrive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 945,
        "term": "contrived",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 946,
        "term": "controvert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 947,
        "term": "contumacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 948,
        "term": "contusion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 949,
        "term": "conundrum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 950,
        "term": "convene",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 951,
        "term": "convention",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 952,
        "term": "conventional",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 953,
        "term": "converge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 954,
        "term": "conversant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 955,
        "term": "converse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 956,
        "term": "convert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 957,
        "term": "convex",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 958,
        "term": "conveyance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 959,
        "term": "conviction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 960,
        "term": "convivial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 961,
        "term": "convoke",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 962,
        "term": "convoluted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 963,
        "term": "convulsion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 964,
        "term": "copious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 965,
        "term": "coquette",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 966,
        "term": "cordial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 967,
        "term": "cordon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 968,
        "term": "cornice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 969,
        "term": "cornucopia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 970,
        "term": "corollary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 971,
        "term": "coroner",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 972,
        "term": "corporeal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 973,
        "term": "corpulent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 974,
        "term": "corpus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 975,
        "term": "corpuscle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 976,
        "term": "correlate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 977,
        "term": "correlation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 978,
        "term": "corroborate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 979,
        "term": "corrode",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 980,
        "term": "corrosive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 981,
        "term": "corrugated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 982,
        "term": "cosmic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 983,
        "term": "coterie",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 984,
        "term": "countenance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 985,
        "term": "countermand",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 986,
        "term": "counterpart",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 987,
        "term": "coup",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 988,
        "term": "couple",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 989,
        "term": "courier",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 990,
        "term": "court",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 991,
        "term": "covenant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 992,
        "term": "covert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 993,
        "term": "covetous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 994,
        "term": "cow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 995,
        "term": "cower",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 996,
        "term": "coy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 997,
        "term": "cozen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 998,
        "term": "crabbed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 999,
        "term": "craft",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1000,
        "term": "crass",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1001,
        "term": "crave",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1002,
        "term": "craven",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1003,
        "term": "credence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1004,
        "term": "credential",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1005,
        "term": "credo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1006,
        "term": "credulity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1007,
        "term": "creed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1008,
        "term": "creep",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1009,
        "term": "cremate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1010,
        "term": "incinerate",
        "picture": "",
        "meaning": "(a corpse); N. crematory, crematorium",
        "mnemonic": ""
      },
      {
        "id": 1011,
        "term": "crescendo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1012,
        "term": "crest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1013,
        "term": "crestfallen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1014,
        "term": "crevice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1015,
        "term": "cringe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1016,
        "term": "crinkle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1017,
        "term": "criteria",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1018,
        "term": "crochet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1019,
        "term": "crone",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1020,
        "term": "cross",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1021,
        "term": "crossbreed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1022,
        "term": "crotchety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1023,
        "term": "crust",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1024,
        "term": "crux",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1025,
        "term": "crypt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1026,
        "term": "cryptic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1027,
        "term": "cubicle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1028,
        "term": "cue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1029,
        "term": "cuisine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1030,
        "term": "culinary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1031,
        "term": "cull",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1032,
        "term": "culmination",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1033,
        "term": "culpable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1034,
        "term": "culprit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1035,
        "term": "culvert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1036,
        "term": "cumbersome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1037,
        "term": "cumulative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1038,
        "term": "cunning",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1039,
        "term": "cupidity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1040,
        "term": "curator",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1041,
        "term": "curb",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1042,
        "term": "curfew",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1043,
        "term": "curmudgeon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1044,
        "term": "cursive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1045,
        "term": "cursory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1046,
        "term": "curtail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1047,
        "term": "cynical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1048,
        "term": "cynosure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1049,
        "term": "dabble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1050,
        "term": "dainty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1051,
        "term": "dais",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1052,
        "term": "dally",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1053,
        "term": "damn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1054,
        "term": "dank",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1055,
        "term": "dapper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1056,
        "term": "dappled",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1057,
        "term": "dart",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1058,
        "term": "daub",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1059,
        "term": "daunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1060,
        "term": "dauntless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1061,
        "term": "dawdle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1062,
        "term": "daze",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1063,
        "term": "dazzle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1064,
        "term": "deadlock",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1065,
        "term": "deadpan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1066,
        "term": "dearth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1067,
        "term": "debacle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1068,
        "term": "debar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1069,
        "term": "debase",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1070,
        "term": "debauch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1071,
        "term": "debilitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1072,
        "term": "debonair",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1073,
        "term": "debris",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1074,
        "term": "debunk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1075,
        "term": "debut",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1076,
        "term": "debutante",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1077,
        "term": "decadence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1078,
        "term": "decant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1079,
        "term": "decapitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1080,
        "term": "decelerate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1081,
        "term": "deciduous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1082,
        "term": "decimate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1083,
        "term": "decipher",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1084,
        "term": "declivity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1085,
        "term": "decollete",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1086,
        "term": "decorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1087,
        "term": "decorum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1088,
        "term": "decoy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1089,
        "term": "decree",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1090,
        "term": "decrepit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1091,
        "term": "decrepitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1092,
        "term": "decry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1093,
        "term": "deducible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1094,
        "term": "deface",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1095,
        "term": "defalcate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1096,
        "term": "defame",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1097,
        "term": "default",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1098,
        "term": "defeatist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1099,
        "term": "defect",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1100,
        "term": "defection",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1101,
        "term": "defer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1102,
        "term": "deference",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1103,
        "term": "defiance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1104,
        "term": "defile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1105,
        "term": "definitive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1106,
        "term": "deflect",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1107,
        "term": "defoliate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1108,
        "term": "defray",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1109,
        "term": "defrock",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1110,
        "term": "deft",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1111,
        "term": "defunct",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1112,
        "term": "degenerate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1113,
        "term": "degradation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1114,
        "term": "dehydrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1115,
        "term": "deify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1116,
        "term": "deign",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1117,
        "term": "delete",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1118,
        "term": "deleterious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1119,
        "term": "deliberate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1120,
        "term": "delineate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1121,
        "term": "delirium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1122,
        "term": "delta",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1123,
        "term": "delude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1124,
        "term": "deluge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1125,
        "term": "delusion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1126,
        "term": "delusive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1127,
        "term": "delve",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1128,
        "term": "demagogue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1129,
        "term": "demean",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1130,
        "term": "demeanor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1131,
        "term": "demented",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1132,
        "term": "demerit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1133,
        "term": "demise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1134,
        "term": "demographic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1135,
        "term": "demolition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1136,
        "term": "demotic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1137,
        "term": "demur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1138,
        "term": "demure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1139,
        "term": "denigrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1140,
        "term": "denizen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1141,
        "term": "denomination",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1142,
        "term": "denotation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1143,
        "term": "denouement",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1144,
        "term": "denounce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1145,
        "term": "depict",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1146,
        "term": "deplete",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1147,
        "term": "deplore",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1148,
        "term": "deploy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1149,
        "term": "deport",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1150,
        "term": "depose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1151,
        "term": "deposition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1152,
        "term": "depravity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1153,
        "term": "deprecate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1154,
        "term": "depreciate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1155,
        "term": "depredation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1156,
        "term": "deputize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1157,
        "term": "deranged",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1158,
        "term": "derelict",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1159,
        "term": "dereliction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1160,
        "term": "deride",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1161,
        "term": "derision",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1162,
        "term": "derivation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1163,
        "term": "derivative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1164,
        "term": "dermatologist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1165,
        "term": "derogatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1166,
        "term": "descry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1167,
        "term": "desecrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1168,
        "term": "deserts",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1169,
        "term": "desiccate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1170,
        "term": "desolate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1171,
        "term": "desperado",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1172,
        "term": "desperate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1173,
        "term": "despise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1174,
        "term": "despoil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1175,
        "term": "despondent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1176,
        "term": "despot",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1177,
        "term": "destitute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1178,
        "term": "desultory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1179,
        "term": "detached",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1180,
        "term": "detain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1181,
        "term": "determinate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1182,
        "term": "determination",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1183,
        "term": "deterrent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1184,
        "term": "detonation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1185,
        "term": "detraction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1186,
        "term": "detrimental",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1187,
        "term": "deviate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1188,
        "term": "devious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1189,
        "term": "devise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1190,
        "term": "devoid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1191,
        "term": "devolve",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1192,
        "term": "devotee",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1193,
        "term": "devout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1194,
        "term": "dexterous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1195,
        "term": "diabolical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1196,
        "term": "diadem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1197,
        "term": "dialectical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1198,
        "term": "diaphanous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1199,
        "term": "diatribe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1200,
        "term": "dichotomy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1201,
        "term": "dictum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1202,
        "term": "didactic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1203,
        "term": "die",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1204,
        "term": "diffidence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1205,
        "term": "diffuse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1206,
        "term": "dignitary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1207,
        "term": "digression",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1208,
        "term": "dilapidated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1209,
        "term": "dilate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1210,
        "term": "dilatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1211,
        "term": "dilemma",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1212,
        "term": "dilettante",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1213,
        "term": "diligence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1214,
        "term": "dilute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1215,
        "term": "diminution",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1216,
        "term": "din",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1217,
        "term": "dinghy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1218,
        "term": "dingy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1219,
        "term": "dint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1220,
        "term": "diorama",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1221,
        "term": "dire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1222,
        "term": "dirge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1223,
        "term": "disabuse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1224,
        "term": "disaffected",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1225,
        "term": "disapprobation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1226,
        "term": "disarray",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1227,
        "term": "disavowal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1228,
        "term": "disband",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1229,
        "term": "disbar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1230,
        "term": "disburse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1231,
        "term": "discernible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1232,
        "term": "discerning",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1233,
        "term": "disclaim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1234,
        "term": "disclose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1235,
        "term": "discombobulated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1236,
        "term": "discomfit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1237,
        "term": "discompose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1238,
        "term": "disconcert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1239,
        "term": "disconsolate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1240,
        "term": "discord",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1241,
        "term": "discordant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1242,
        "term": "discount",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1243,
        "term": "discourse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1244,
        "term": "discredit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1245,
        "term": "discrepancy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1246,
        "term": "discrete",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1247,
        "term": "discretion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1248,
        "term": "discriminate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1249,
        "term": "discriminating",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1250,
        "term": "discursive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1251,
        "term": "disdain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1252,
        "term": "disembark",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1253,
        "term": "disenfranchise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1254,
        "term": "disengage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1255,
        "term": "disfigure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1256,
        "term": "disgorge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1257,
        "term": "disgruntle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1258,
        "term": "dishearten",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1259,
        "term": "disheveled",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1260,
        "term": "dishonor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1261,
        "term": "disinclination",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1262,
        "term": "disingenuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1263,
        "term": "disinter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1264,
        "term": "disjointed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1265,
        "term": "disjunction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1266,
        "term": "dislodge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1267,
        "term": "dismantle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1268,
        "term": "dismember",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1269,
        "term": "dismiss",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1270,
        "term": "disparage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1271,
        "term": "disparate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1272,
        "term": "disparity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1273,
        "term": "dispassionate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1274,
        "term": "dispatch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1275,
        "term": "dispel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1276,
        "term": "dispense",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1277,
        "term": "disperse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1278,
        "term": "dispirited",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1279,
        "term": "disport",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1280,
        "term": "disproportion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1281,
        "term": "disputatious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1282,
        "term": "disquietude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1283,
        "term": "disquisition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1284,
        "term": "dissection",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1285,
        "term": "dissemble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1286,
        "term": "disseminate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1287,
        "term": "dissension",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1288,
        "term": "dissent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1289,
        "term": "dissertation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1290,
        "term": "dissident",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1291,
        "term": "dissimulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1292,
        "term": "dissipate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1293,
        "term": "dissolution",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1294,
        "term": "dissonance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1295,
        "term": "dissuade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1296,
        "term": "distant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1297,
        "term": "distend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1298,
        "term": "distill",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1299,
        "term": "distinct",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1300,
        "term": "distinction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1301,
        "term": "distinctive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1302,
        "term": "distort",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1303,
        "term": "distract",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1304,
        "term": "distrait",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1305,
        "term": "distraught",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1306,
        "term": "diurnal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1307,
        "term": "diva",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1308,
        "term": "diverge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1309,
        "term": "diverse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1310,
        "term": "diversion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1311,
        "term": "divest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1312,
        "term": "divine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1313,
        "term": "divulge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1314,
        "term": "docile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1315,
        "term": "docket",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1316,
        "term": "doctrinaire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1317,
        "term": "doctrine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1318,
        "term": "document",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1319,
        "term": "doddering",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1320,
        "term": "doff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1321,
        "term": "dogged",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1322,
        "term": "doggerel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1323,
        "term": "dogmatic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1324,
        "term": "doldrums",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1325,
        "term": "dolorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1326,
        "term": "dolt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1327,
        "term": "domicile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1328,
        "term": "dominant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1329,
        "term": "dominate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1330,
        "term": "domineer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1331,
        "term": "don",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1332,
        "term": "doom",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1333,
        "term": "dormant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1334,
        "term": "dormer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1335,
        "term": "dorsal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1336,
        "term": "dossier",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1337,
        "term": "dotage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1338,
        "term": "dote",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1339,
        "term": "dour",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1340,
        "term": "douse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1341,
        "term": "dowdy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1342,
        "term": "downcast",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1343,
        "term": "dowry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1344,
        "term": "dowse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1345,
        "term": "doze",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1346,
        "term": "drab",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1347,
        "term": "draconian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1348,
        "term": "draft",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1349,
        "term": "drama",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1350,
        "term": "drastic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1351,
        "term": "draught",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1352,
        "term": "draw",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1353,
        "term": "dregs",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1354,
        "term": "dribble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1355,
        "term": "drip",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1356,
        "term": "drivel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1357,
        "term": "droll",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1358,
        "term": "drone",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1359,
        "term": "droop",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1360,
        "term": "dross",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1361,
        "term": "drudge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1362,
        "term": "drudgery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1363,
        "term": "dubious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1364,
        "term": "ductile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1365,
        "term": "dulcet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1366,
        "term": "dull",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1367,
        "term": "dummy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1368,
        "term": "dupe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1369,
        "term": "duplicity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1370,
        "term": "duration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1371,
        "term": "duress",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1372,
        "term": "dwindle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1373,
        "term": "dynamic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1374,
        "term": "dynamo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1375,
        "term": "dysentery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1376,
        "term": "dyslexia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1377,
        "term": "dyspeptic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1378,
        "term": "earmark",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1379,
        "term": "earn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1380,
        "term": "earthly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1381,
        "term": "earthy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1382,
        "term": "ebb",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1383,
        "term": "ebullient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1384,
        "term": "eccentric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1385,
        "term": "eccentricity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1386,
        "term": "ecclesiastic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1387,
        "term": "eclectic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1388,
        "term": "eclipse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1389,
        "term": "ecliptic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1390,
        "term": "ecologist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1391,
        "term": "economy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1392,
        "term": "ecosystem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1393,
        "term": "ecstasy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1394,
        "term": "eddy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1395,
        "term": "edict",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1396,
        "term": "edifice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1397,
        "term": "edify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1398,
        "term": "eerie",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1399,
        "term": "efface",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1400,
        "term": "effective",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1401,
        "term": "effectual",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1402,
        "term": "effectuate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1403,
        "term": "effeminate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1404,
        "term": "effervescence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1405,
        "term": "effete",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1406,
        "term": "efficacy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1407,
        "term": "effigy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1408,
        "term": "effluvium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1409,
        "term": "effrontery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1410,
        "term": "effulgent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1411,
        "term": "effusion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1412,
        "term": "ego",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1413,
        "term": "egoism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1414,
        "term": "egotism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1415,
        "term": "egotistical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1416,
        "term": "egregious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1417,
        "term": "egress",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1418,
        "term": "ejaculation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1419,
        "term": "elaborate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1420,
        "term": "elaboration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1421,
        "term": "elastic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1422,
        "term": "elated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1423,
        "term": "elegy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1424,
        "term": "elevation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1425,
        "term": "elicit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1426,
        "term": "elixir",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1427,
        "term": "ellipsis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1428,
        "term": "elliptical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1429,
        "term": "elope",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1430,
        "term": "eloquence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1431,
        "term": "elucidate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1432,
        "term": "elusive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1433,
        "term": "elysian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1434,
        "term": "Elysium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1435,
        "term": "emaciated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1436,
        "term": "emanate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1437,
        "term": "emancipate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1438,
        "term": "emasculate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1439,
        "term": "embargo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1440,
        "term": "embark",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1441,
        "term": "embellish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1442,
        "term": "embezzlement",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1443,
        "term": "embitter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1444,
        "term": "emblazon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1445,
        "term": "embody",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1446,
        "term": "emboss",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1447,
        "term": "embrace",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1448,
        "term": "embroider",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1449,
        "term": "embroil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1450,
        "term": "embryonic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1451,
        "term": "emend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1452,
        "term": "emetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1453,
        "term": "eminent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1454,
        "term": "emissary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1455,
        "term": "emollient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1456,
        "term": "emolument",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1457,
        "term": "empathy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1458,
        "term": "empirical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1459,
        "term": "emulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1460,
        "term": "enact",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1461,
        "term": "enamored",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1462,
        "term": "encipher",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1463,
        "term": "encircle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1464,
        "term": "enclave",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1465,
        "term": "encomiastic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1466,
        "term": "encompass",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1467,
        "term": "encroachment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1468,
        "term": "encumber",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1469,
        "term": "endear",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1470,
        "term": "endearment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1471,
        "term": "endemic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1472,
        "term": "endorse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1473,
        "term": "endue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1474,
        "term": "enduring",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1475,
        "term": "energize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1476,
        "term": "enervate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1477,
        "term": "enfranchise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1478,
        "term": "engage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1479,
        "term": "engaged",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1480,
        "term": "engaging",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1481,
        "term": "engender",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1482,
        "term": "engross",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1483,
        "term": "engulf",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1484,
        "term": "enhance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1485,
        "term": "enigma",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1486,
        "term": "enjoin",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1487,
        "term": "enlist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1488,
        "term": "enliven",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1489,
        "term": "enmity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1490,
        "term": "ennui",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1491,
        "term": "enormity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1492,
        "term": "enrapture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1493,
        "term": "ensconce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1494,
        "term": "ensue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1495,
        "term": "entail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1496,
        "term": "enterprise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1497,
        "term": "enterprising",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1498,
        "term": "enthrall",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1499,
        "term": "entice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1500,
        "term": "entity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1501,
        "term": "entomology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1502,
        "term": "entourage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1503,
        "term": "entrance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1504,
        "term": "entreat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1505,
        "term": "entrepreneur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1506,
        "term": "enumerate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1507,
        "term": "enunciate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1508,
        "term": "environ",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1509,
        "term": "ephemeral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1510,
        "term": "epic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1511,
        "term": "epicure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1512,
        "term": "epicurean",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1513,
        "term": "epigram",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1514,
        "term": "epilogue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1515,
        "term": "episodic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1516,
        "term": "epistemologist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1517,
        "term": "epitaph",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1518,
        "term": "epithet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1519,
        "term": "epitome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1520,
        "term": "epoch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1521,
        "term": "equable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1522,
        "term": "equanimity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1523,
        "term": "equestrian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1524,
        "term": "equilibrium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1525,
        "term": "equine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1526,
        "term": "equinox",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1527,
        "term": "equipoise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1528,
        "term": "equitable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1529,
        "term": "equity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1530,
        "term": "equivocal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1531,
        "term": "equivocate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1532,
        "term": "erode",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1533,
        "term": "erotic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1534,
        "term": "errant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1535,
        "term": "erratic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1536,
        "term": "erroneous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1537,
        "term": "erudite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1538,
        "term": "escapade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1539,
        "term": "eschew",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1540,
        "term": "esoteric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1541,
        "term": "espionage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1542,
        "term": "espouse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1543,
        "term": "esteem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1544,
        "term": "estimable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1545,
        "term": "estranged",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1546,
        "term": "ethereal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1547,
        "term": "ethnic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1548,
        "term": "ethnology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1549,
        "term": "ethos",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1550,
        "term": "etymology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1551,
        "term": "eugenic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1552,
        "term": "eulogistic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1553,
        "term": "eulogy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1554,
        "term": "euphemism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1555,
        "term": "euphony",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1556,
        "term": "euphoria",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1557,
        "term": "euthanasia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1558,
        "term": "evanescent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1559,
        "term": "evasive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1560,
        "term": "evenhanded",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1561,
        "term": "eventual",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1562,
        "term": "evince",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1563,
        "term": "evocative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1564,
        "term": "evoke",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1565,
        "term": "ewe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1566,
        "term": "exacerbate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1567,
        "term": "exact",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1568,
        "term": "exacting",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1569,
        "term": "exalt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1570,
        "term": "exasperate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1571,
        "term": "except",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1572,
        "term": "exceptionable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1573,
        "term": "excerpt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1574,
        "term": "exchequer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1575,
        "term": "excise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1576,
        "term": "exclaim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1577,
        "term": "excoriate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1578,
        "term": "exculpate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1579,
        "term": "execrable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1580,
        "term": "execrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1581,
        "term": "execute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1582,
        "term": "executioner",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1583,
        "term": "executive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1584,
        "term": "executor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1585,
        "term": "exegesis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1586,
        "term": "exemplary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1587,
        "term": "exemplify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1588,
        "term": "exempt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1589,
        "term": "exertion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1590,
        "term": "exhale",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1591,
        "term": "exhilarating",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1592,
        "term": "exhort",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1593,
        "term": "exhume",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1594,
        "term": "exigency",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1595,
        "term": "exiguous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1596,
        "term": "existential",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1597,
        "term": "exodus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1598,
        "term": "exonerate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1599,
        "term": "exorbitant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1600,
        "term": "exorcise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1601,
        "term": "exotic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1602,
        "term": "expansive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1603,
        "term": "expatiate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1604,
        "term": "expatriate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1605,
        "term": "expedient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1606,
        "term": "expedite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1607,
        "term": "expeditious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1608,
        "term": "expenditure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1609,
        "term": "expertise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1610,
        "term": "expiate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1611,
        "term": "expletive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1612,
        "term": "explicate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1613,
        "term": "explicit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1614,
        "term": "exploit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1615,
        "term": "expository",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1616,
        "term": "expostulation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1617,
        "term": "exposure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1618,
        "term": "expound",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1619,
        "term": "expropriate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1620,
        "term": "expunge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1621,
        "term": "expurgate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1622,
        "term": "exquisite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1623,
        "term": "extant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1624,
        "term": "extemporaneous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1625,
        "term": "extenuate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1626,
        "term": "extirpate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1627,
        "term": "extol",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1628,
        "term": "extort",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1629,
        "term": "extradition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1630,
        "term": "extraneous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1631,
        "term": "extrapolation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1632,
        "term": "extricate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1633,
        "term": "extrinsic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1634,
        "term": "extrovert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1635,
        "term": "extrude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1636,
        "term": "exuberance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1637,
        "term": "exude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1638,
        "term": "exult",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1639,
        "term": "fabricate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1640,
        "term": "facet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1641,
        "term": "facetious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1642,
        "term": "facile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1643,
        "term": "facilitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1644,
        "term": "facsimile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1645,
        "term": "faction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1646,
        "term": "factious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1647,
        "term": "factitious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1648,
        "term": "factotum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1649,
        "term": "faculty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1650,
        "term": "fake",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1651,
        "term": "fallacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1652,
        "term": "fallible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1653,
        "term": "fallow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1654,
        "term": "falsify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1655,
        "term": "falter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1656,
        "term": "fanaticism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1657,
        "term": "fancied",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1658,
        "term": "fancier",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1659,
        "term": "fanciful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1660,
        "term": "fancy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1661,
        "term": "fanfare",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1662,
        "term": "farce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1663,
        "term": "fashion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1664,
        "term": "fastidious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1665,
        "term": "fatalism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1666,
        "term": "fathom",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1667,
        "term": "fathomless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1668,
        "term": "fatuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1669,
        "term": "fauna",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1670,
        "term": "favoritism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1671,
        "term": "fawning",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1672,
        "term": "faze",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1673,
        "term": "feasible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1674,
        "term": "feature",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1675,
        "term": "febrile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1676,
        "term": "fecundity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1677,
        "term": "feebleminded",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1678,
        "term": "feign",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1679,
        "term": "feint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1680,
        "term": "felicitous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1681,
        "term": "felicity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1682,
        "term": "feline",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1683,
        "term": "fell",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1684,
        "term": "felon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1685,
        "term": "feral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1686,
        "term": "ferment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1687,
        "term": "fermentation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1688,
        "term": "ferocious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1689,
        "term": "ferret",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1690,
        "term": "fertile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1691,
        "term": "fervent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1692,
        "term": "fervid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1693,
        "term": "fervor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1694,
        "term": "fester",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1695,
        "term": "festive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1696,
        "term": "fetter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1697,
        "term": "feud",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1698,
        "term": "fiasco",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1699,
        "term": "fiat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1700,
        "term": "fickle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1701,
        "term": "fictitious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1702,
        "term": "fidelity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1703,
        "term": "fiend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1704,
        "term": "figment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1705,
        "term": "figurative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1706,
        "term": "figure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1707,
        "term": "figurine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1708,
        "term": "filch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1709,
        "term": "filial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1710,
        "term": "filibuster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1711,
        "term": "filigree",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1712,
        "term": "filing",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1713,
        "term": "filth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1714,
        "term": "finale",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1715,
        "term": "finery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1716,
        "term": "finesse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1717,
        "term": "finicky",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1718,
        "term": "finish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1719,
        "term": "finished",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1720,
        "term": "finite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1721,
        "term": "firebrand",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1722,
        "term": "fissure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1723,
        "term": "fit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1724,
        "term": "fitful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1725,
        "term": "flaccid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1726,
        "term": "flag",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1727,
        "term": "flagrant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1728,
        "term": "flail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1729,
        "term": "flair",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1730,
        "term": "flamboyant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1731,
        "term": "flashy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1732,
        "term": "flaunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1733,
        "term": "flay",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1734,
        "term": "fleck",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1735,
        "term": "fleece",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1736,
        "term": "fleet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1737,
        "term": "flick",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1738,
        "term": "flicker",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1739,
        "term": "flighty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1740,
        "term": "flinch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1741,
        "term": "flip",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1742,
        "term": "flippant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1743,
        "term": "flirt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1744,
        "term": "flit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1745,
        "term": "floe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1746,
        "term": "flora",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1747,
        "term": "florescence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1748,
        "term": "florid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1749,
        "term": "flotsam",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1750,
        "term": "flounder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1751,
        "term": "flourish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1752,
        "term": "flout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1753,
        "term": "flowery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1754,
        "term": "fluctuate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1755,
        "term": "fluency",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1756,
        "term": "fluke",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1757,
        "term": "flush",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1758,
        "term": "fluster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1759,
        "term": "fluted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1760,
        "term": "flutter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1761,
        "term": "flux",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1762,
        "term": "fodder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1763,
        "term": "foible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1764,
        "term": "foil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1765,
        "term": "foist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1766,
        "term": "foliage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1767,
        "term": "foment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1768,
        "term": "foolhardy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1769,
        "term": "foppish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1770,
        "term": "foray",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1771,
        "term": "forbearance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1772,
        "term": "ford",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1773,
        "term": "foreboding",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1774,
        "term": "forensic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1775,
        "term": "forerunner",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1776,
        "term": "foreshadow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1777,
        "term": "foresight",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1778,
        "term": "forestall",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1779,
        "term": "forfeit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1780,
        "term": "forge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1781,
        "term": "forlorn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1782,
        "term": "formality",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1783,
        "term": "formidable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1784,
        "term": "forsake",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1785,
        "term": "forswear",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1786,
        "term": "forte",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1787,
        "term": "forthcoming",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1788,
        "term": "forthright",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1789,
        "term": "fortitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1790,
        "term": "fortuitous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1791,
        "term": "forum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1792,
        "term": "forward",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1793,
        "term": "foster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1794,
        "term": "foul",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1795,
        "term": "founder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1796,
        "term": "fracas",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1797,
        "term": "fractious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1798,
        "term": "frail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1799,
        "term": "franchise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1800,
        "term": "frantic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1801,
        "term": "fraudulent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1802,
        "term": "fraught",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1803,
        "term": "fray",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1804,
        "term": "freebooter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1805,
        "term": "frenzied",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1806,
        "term": "fresco",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1807,
        "term": "fret",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1808,
        "term": "friction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1809,
        "term": "frieze",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1810,
        "term": "frigid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1811,
        "term": "fringe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1812,
        "term": "frisk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1813,
        "term": "fritter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1814,
        "term": "frivolous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1815,
        "term": "frock",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1816,
        "term": "frolic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1817,
        "term": "frolicsome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1818,
        "term": "frond",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1819,
        "term": "fructify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1820,
        "term": "frugality",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1821,
        "term": "fruitful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1822,
        "term": "fruition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1823,
        "term": "frustrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1824,
        "term": "fuddle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1825,
        "term": "fugitive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1826,
        "term": "fulcrum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1827,
        "term": "fulminate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1828,
        "term": "fulsome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1829,
        "term": "fumble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1830,
        "term": "functional",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1831,
        "term": "functionary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1832,
        "term": "fundamental",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1833,
        "term": "funereal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1834,
        "term": "furor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1835,
        "term": "furrow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1836,
        "term": "furtive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1837,
        "term": "fusillade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1838,
        "term": "fusion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1839,
        "term": "fussy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1840,
        "term": "futile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1841,
        "term": "gadfly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1842,
        "term": "gaffe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1843,
        "term": "gainsay",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1844,
        "term": "gait",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1845,
        "term": "galaxy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1846,
        "term": "gale",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1847,
        "term": "gall",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1848,
        "term": "galleon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1849,
        "term": "galley",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1850,
        "term": "gallows",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1851,
        "term": "galvanic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1852,
        "term": "galvanize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1853,
        "term": "gambit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1854,
        "term": "gambol",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1855,
        "term": "gamely",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1856,
        "term": "gamut",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1857,
        "term": "gangrene",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1858,
        "term": "gape",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1859,
        "term": "garbled",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1860,
        "term": "gargantuan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1861,
        "term": "gargoyle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1862,
        "term": "garish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1863,
        "term": "garner",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1864,
        "term": "garnish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1865,
        "term": "garrulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1866,
        "term": "gastronomy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1867,
        "term": "gauche",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1868,
        "term": "gaudy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1869,
        "term": "gaunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1870,
        "term": "gavel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1871,
        "term": "gawk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1872,
        "term": "gazette",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1873,
        "term": "genealogy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1874,
        "term": "generality",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1875,
        "term": "generate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1876,
        "term": "generic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1877,
        "term": "genesis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1878,
        "term": "geniality",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1879,
        "term": "genre",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1880,
        "term": "genteel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1881,
        "term": "gentility",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1882,
        "term": "gentle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1883,
        "term": "gentry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1884,
        "term": "genuflect",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1885,
        "term": "genus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1886,
        "term": "germ",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1887,
        "term": "germane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1888,
        "term": "germinal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1889,
        "term": "germinate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1890,
        "term": "gerontocracy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1891,
        "term": "gerontology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1892,
        "term": "gerrymander",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1893,
        "term": "gestate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1894,
        "term": "gesticulation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1895,
        "term": "ghastly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1896,
        "term": "gibberish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1897,
        "term": "gibe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1898,
        "term": "giddy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1899,
        "term": "gild",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1900,
        "term": "gingerly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1901,
        "term": "girth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1902,
        "term": "gist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1903,
        "term": "glacial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1904,
        "term": "glamor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1905,
        "term": "glare",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1906,
        "term": "glaring",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1907,
        "term": "glaze",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1908,
        "term": "gleam",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1909,
        "term": "glean",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1910,
        "term": "glib",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1911,
        "term": "glimmer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1912,
        "term": "glitter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1913,
        "term": "gloat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1914,
        "term": "gloss",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1915,
        "term": "glossary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1916,
        "term": "glossy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1917,
        "term": "glow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1918,
        "term": "glower",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1919,
        "term": "glut",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1920,
        "term": "glutinous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1921,
        "term": "glutton",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1922,
        "term": "gnarl",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1923,
        "term": "gnarled",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1924,
        "term": "gnome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1925,
        "term": "goad",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1926,
        "term": "gobble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1927,
        "term": "gorge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1928,
        "term": "gory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1929,
        "term": "gossamer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1930,
        "term": "gouge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1931,
        "term": "gourmand",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1932,
        "term": "gourmet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1933,
        "term": "gracious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1934,
        "term": "gradation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1935,
        "term": "graduate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1936,
        "term": "graduated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1937,
        "term": "granary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1938,
        "term": "grandeur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1939,
        "term": "grandiose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1940,
        "term": "granulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1941,
        "term": "graphic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1942,
        "term": "graphite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1943,
        "term": "grapple",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1944,
        "term": "grate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1945,
        "term": "gratify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1946,
        "term": "gratis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1947,
        "term": "gratuitous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1948,
        "term": "gratuity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1949,
        "term": "gravity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1950,
        "term": "graze",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1951,
        "term": "gregarious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1952,
        "term": "grievance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1953,
        "term": "grill",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1954,
        "term": "grim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1955,
        "term": "grimace",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1956,
        "term": "grisly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1957,
        "term": "groom",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1958,
        "term": "groove",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1959,
        "term": "gross",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1960,
        "term": "grotesque",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1961,
        "term": "grotto",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1962,
        "term": "grouch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1963,
        "term": "grouse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1964,
        "term": "grovel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1965,
        "term": "growl",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1966,
        "term": "grudge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1967,
        "term": "grudging",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1968,
        "term": "gruel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1969,
        "term": "grueling",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1970,
        "term": "gruesome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1971,
        "term": "gruff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1972,
        "term": "grumble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1973,
        "term": "grunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1974,
        "term": "guffaw",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1975,
        "term": "guile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1976,
        "term": "guileless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1977,
        "term": "guise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1978,
        "term": "gull",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1979,
        "term": "gullible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1980,
        "term": "gush",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1981,
        "term": "gust",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1982,
        "term": "gustatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1983,
        "term": "gusto",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1984,
        "term": "gusty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1985,
        "term": "guy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1986,
        "term": "gyroscope",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1987,
        "term": "habitat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1988,
        "term": "habituate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1989,
        "term": "hackles",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1990,
        "term": "hackneyed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1991,
        "term": "haggard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1992,
        "term": "haggle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1993,
        "term": "hail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1994,
        "term": "halcyon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1995,
        "term": "hale",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1996,
        "term": "halfhearted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1997,
        "term": "hallowed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1998,
        "term": "hallucination",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 1999,
        "term": "halting",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2000,
        "term": "hamper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2001,
        "term": "handsome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2002,
        "term": "hap",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2003,
        "term": "haphazard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2004,
        "term": "hapless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2005,
        "term": "harangue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2006,
        "term": "harass",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2007,
        "term": "harbinger",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2008,
        "term": "harbor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2009,
        "term": "hardy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2010,
        "term": "harping",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2011,
        "term": "harrowing",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2012,
        "term": "harry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2013,
        "term": "hatch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2014,
        "term": "haughtiness",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2015,
        "term": "haunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2016,
        "term": "haven",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2017,
        "term": "havoc",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2018,
        "term": "hazard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2019,
        "term": "hazardous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2020,
        "term": "hazy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2021,
        "term": "headfirst",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2022,
        "term": "headlong",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2023,
        "term": "headstrong",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2024,
        "term": "healthful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2025,
        "term": "healthy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2026,
        "term": "heckler",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2027,
        "term": "hedonist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2028,
        "term": "heed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2029,
        "term": "heedless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2030,
        "term": "hegemony",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2031,
        "term": "heinous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2032,
        "term": "helm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2033,
        "term": "hem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2034,
        "term": "herald",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2035,
        "term": "herbivorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2036,
        "term": "herd",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2037,
        "term": "hereafter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2038,
        "term": "heresy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2039,
        "term": "hermetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2040,
        "term": "hermitage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2041,
        "term": "herpetologist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2042,
        "term": "heterodox",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2043,
        "term": "hew",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2044,
        "term": "heyday",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2045,
        "term": "hiatus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2046,
        "term": "hibernal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2047,
        "term": "hibernate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2048,
        "term": "hide",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2049,
        "term": "hideous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2050,
        "term": "hierarchy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2051,
        "term": "hieroglyphic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2052,
        "term": "hilarity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2053,
        "term": "hindmost",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2054,
        "term": "hindrance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2055,
        "term": "hindsight",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2056,
        "term": "hinterlands",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2057,
        "term": "hireling",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2058,
        "term": "hirsute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2059,
        "term": "historic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2060,
        "term": "historical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2061,
        "term": "histrionic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2062,
        "term": "hive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2063,
        "term": "hoard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2064,
        "term": "hoary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2065,
        "term": "hoax",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2066,
        "term": "holocaust",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2067,
        "term": "holster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2068,
        "term": "homage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2069,
        "term": "homely",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2070,
        "term": "homeostasis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2071,
        "term": "homespun",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2072,
        "term": "homily",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2073,
        "term": "homogeneous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2074,
        "term": "hone",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2075,
        "term": "hoodwink",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2076,
        "term": "horde",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2077,
        "term": "horoscope",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2078,
        "term": "hortatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2079,
        "term": "horticultural",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2080,
        "term": "hostage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2081,
        "term": "hostility",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2082,
        "term": "hothead",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2083,
        "term": "hovel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2084,
        "term": "hover",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2085,
        "term": "hubbub",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2086,
        "term": "hubris",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2087,
        "term": "hue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2088,
        "term": "hull",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2089,
        "term": "humane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2090,
        "term": "humanitarian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2091,
        "term": "humble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2092,
        "term": "humdrum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2093,
        "term": "humid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2094,
        "term": "humility",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2095,
        "term": "hummock",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2096,
        "term": "humor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2097,
        "term": "humus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2098,
        "term": "hurl",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2099,
        "term": "hurtle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2100,
        "term": "husband",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2101,
        "term": "husbandry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2102,
        "term": "hut",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2103,
        "term": "hybrid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2104,
        "term": "hygiene",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2105,
        "term": "hyperbole",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2106,
        "term": "hypercritical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2107,
        "term": "hypnosis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2108,
        "term": "hypocritical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2109,
        "term": "hypothetical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2110,
        "term": "hysteria",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2111,
        "term": "ichthyology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2112,
        "term": "iconoclastic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2113,
        "term": "ideology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2114,
        "term": "idiom",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2115,
        "term": "idiosyncrasy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2116,
        "term": "idle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2117,
        "term": "idolatry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2118,
        "term": "idyllic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2119,
        "term": "igneous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2120,
        "term": "ignite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2121,
        "term": "ignoble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2122,
        "term": "ignominy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2123,
        "term": "illicit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2124,
        "term": "illimitable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2125,
        "term": "illuminate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2126,
        "term": "illusion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2127,
        "term": "illusive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2128,
        "term": "illusory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2129,
        "term": "imbalance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2130,
        "term": "imbecility",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2131,
        "term": "imbibe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2132,
        "term": "imbroglio",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2133,
        "term": "imbue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2134,
        "term": "immaculate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2135,
        "term": "imminent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2136,
        "term": "immobility",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2137,
        "term": "immolate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2138,
        "term": "immune",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2139,
        "term": "immure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2140,
        "term": "immutable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2141,
        "term": "impair",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2142,
        "term": "impale",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2143,
        "term": "impalpable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2144,
        "term": "impart",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2145,
        "term": "impartial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2146,
        "term": "impassable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2147,
        "term": "impasse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2148,
        "term": "impassioned",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2149,
        "term": "impassive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2150,
        "term": "impeach",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2151,
        "term": "impeccable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2152,
        "term": "impecunious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2153,
        "term": "impede",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2154,
        "term": "impediment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2155,
        "term": "impel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2156,
        "term": "impending",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2157,
        "term": "impenetrable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2158,
        "term": "impenitent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2159,
        "term": "imperative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2160,
        "term": "imperceptible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2161,
        "term": "imperial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2162,
        "term": "imperil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2163,
        "term": "imperious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2164,
        "term": "impermeable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2165,
        "term": "impersonal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2166,
        "term": "impertinent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2167,
        "term": "imperturbable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2168,
        "term": "impervious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2169,
        "term": "impetuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2170,
        "term": "impetus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2171,
        "term": "impiety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2172,
        "term": "impinge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2173,
        "term": "impious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2174,
        "term": "implacable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2175,
        "term": "implausible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2176,
        "term": "implement",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2177,
        "term": "implicate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2178,
        "term": "implication",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2179,
        "term": "implicit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2180,
        "term": "implode",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2181,
        "term": "implore",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2182,
        "term": "imply",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2183,
        "term": "impolitic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2184,
        "term": "imponderable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2185,
        "term": "import",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2186,
        "term": "importunate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2187,
        "term": "importune",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2188,
        "term": "imposture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2189,
        "term": "impotent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2190,
        "term": "impoverish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2191,
        "term": "imprecation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2192,
        "term": "impregnable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2193,
        "term": "impregnate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2194,
        "term": "impromptu",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2195,
        "term": "impropriety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2196,
        "term": "improvident",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2197,
        "term": "improvise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2198,
        "term": "imprudent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2199,
        "term": "impudence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2200,
        "term": "impugn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2201,
        "term": "impuissance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2202,
        "term": "impunity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2203,
        "term": "impute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2204,
        "term": "inadvertently",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2205,
        "term": "inalienable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2206,
        "term": "inamorata",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2207,
        "term": "inane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2208,
        "term": "inanimate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2209,
        "term": "inarticulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2210,
        "term": "inaugurate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2211,
        "term": "incandescent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2212,
        "term": "incantation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2213,
        "term": "incapacitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2214,
        "term": "incarcerate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2215,
        "term": "incarnate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2216,
        "term": "incarnation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2217,
        "term": "incendiary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2218,
        "term": "incense",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2219,
        "term": "incentive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2220,
        "term": "inception",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2221,
        "term": "incessant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2222,
        "term": "inchoate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2223,
        "term": "incidence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2224,
        "term": "incident",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2225,
        "term": "incidental",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2226,
        "term": "incipient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2227,
        "term": "incisive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2228,
        "term": "incite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2229,
        "term": "inclement",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2230,
        "term": "incline",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2231,
        "term": "inclined",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2232,
        "term": "inclusive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2233,
        "term": "incognito",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2234,
        "term": "incoherent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2235,
        "term": "incommodious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2236,
        "term": "incompatible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2237,
        "term": "incongruity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2238,
        "term": "inconsistency",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2239,
        "term": "incontinent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2240,
        "term": "incorporate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2241,
        "term": "incorporeal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2242,
        "term": "incorrigible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2243,
        "term": "incredulity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2244,
        "term": "incredulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2245,
        "term": "increment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2246,
        "term": "incriminate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2247,
        "term": "incrustation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2248,
        "term": "incubate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2249,
        "term": "incubus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2250,
        "term": "inculcate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2251,
        "term": "incumbent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2252,
        "term": "incur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2253,
        "term": "incursion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2254,
        "term": "indecision",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2255,
        "term": "indecisive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2256,
        "term": "indefatigable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2257,
        "term": "indelible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2258,
        "term": "indemnify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2259,
        "term": "indentation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2260,
        "term": "indenture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2261,
        "term": "indeterminate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2262,
        "term": "indices",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2263,
        "term": "indict",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2264,
        "term": "indifferent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2265,
        "term": "indigence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2266,
        "term": "indigenous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2267,
        "term": "indigent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2268,
        "term": "indignation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2269,
        "term": "indignity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2270,
        "term": "indisputable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2271,
        "term": "indissoluble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2272,
        "term": "indite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2273,
        "term": "indoctrinate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2274,
        "term": "indolent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2275,
        "term": "indomitable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2276,
        "term": "indubitable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2277,
        "term": "induce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2278,
        "term": "induct",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2279,
        "term": "inductive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2280,
        "term": "indulge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2281,
        "term": "indulgent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2282,
        "term": "industrious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2283,
        "term": "inebriate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2284,
        "term": "inebriated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2285,
        "term": "ineffable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2286,
        "term": "ineffectual",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2287,
        "term": "ineluctable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2288,
        "term": "inept",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2289,
        "term": "inequity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2290,
        "term": "inerrancy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2291,
        "term": "inert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2292,
        "term": "inestimable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2293,
        "term": "inevitable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2294,
        "term": "inexorable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2295,
        "term": "inextricable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2296,
        "term": "infallible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2297,
        "term": "infamous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2298,
        "term": "infantile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2299,
        "term": "infer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2300,
        "term": "infernal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2301,
        "term": "infest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2302,
        "term": "infidel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2303,
        "term": "infiltrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2304,
        "term": "infinitesimal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2305,
        "term": "infirmity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2306,
        "term": "inflated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2307,
        "term": "influx",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2308,
        "term": "infraction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2309,
        "term": "infringe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2310,
        "term": "ingenious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2311,
        "term": "ingenue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2312,
        "term": "ingenuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2313,
        "term": "ingrained",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2314,
        "term": "ingrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2315,
        "term": "ingratiate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2316,
        "term": "inherent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2317,
        "term": "inhibit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2318,
        "term": "inhibited",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2319,
        "term": "inimical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2320,
        "term": "inimitable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2321,
        "term": "iniquitous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2322,
        "term": "initiate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2323,
        "term": "injurious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2324,
        "term": "inkling",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2325,
        "term": "innate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2326,
        "term": "innocuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2327,
        "term": "innovation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2328,
        "term": "innuendo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2329,
        "term": "inopportune",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2330,
        "term": "inordinate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2331,
        "term": "inquisitive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2332,
        "term": "inquisitor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2333,
        "term": "inroad",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2334,
        "term": "insalubrious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2335,
        "term": "insatiable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2336,
        "term": "inscrutable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2337,
        "term": "insensate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2338,
        "term": "insensible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2339,
        "term": "insidious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2340,
        "term": "insightful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2341,
        "term": "insinuate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2342,
        "term": "insipid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2343,
        "term": "insolence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2344,
        "term": "insolvent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2345,
        "term": "insomnia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2346,
        "term": "insouciant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2347,
        "term": "instigate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2348,
        "term": "institute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2349,
        "term": "institution",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2350,
        "term": "insubstantial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2351,
        "term": "insularity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2352,
        "term": "insuperable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2353,
        "term": "insurgent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2354,
        "term": "insurrection",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2355,
        "term": "intangible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2356,
        "term": "integral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2357,
        "term": "integrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2358,
        "term": "integrity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2359,
        "term": "intellect",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2360,
        "term": "intelligentsia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2361,
        "term": "inter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2362,
        "term": "interdict",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2363,
        "term": "interim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2364,
        "term": "interjection",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2365,
        "term": "interloper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2366,
        "term": "intermediary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2367,
        "term": "interminable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2368,
        "term": "intermittent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2369,
        "term": "internecine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2370,
        "term": "interpolate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2371,
        "term": "interregnum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2372,
        "term": "interrogate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2373,
        "term": "interstice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2374,
        "term": "intervene",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2375,
        "term": "intimate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2376,
        "term": "intimidate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2377,
        "term": "intolerant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2378,
        "term": "intoxicate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2379,
        "term": "intractable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2380,
        "term": "intransigence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2381,
        "term": "intrepid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2382,
        "term": "intrigue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2383,
        "term": "intrinsic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2384,
        "term": "introspective",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2385,
        "term": "introvert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2386,
        "term": "intrude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2387,
        "term": "intuition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2388,
        "term": "inundate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2389,
        "term": "inured",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2390,
        "term": "invalid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2391,
        "term": "invalidate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2392,
        "term": "invective",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2393,
        "term": "inveigh",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2394,
        "term": "inveigle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2395,
        "term": "inverse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2396,
        "term": "invert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2397,
        "term": "inveterate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2398,
        "term": "invidious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2399,
        "term": "invincible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2400,
        "term": "inviolable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2401,
        "term": "invocation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2402,
        "term": "invoke",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2403,
        "term": "invulnerable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2404,
        "term": "iota",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2405,
        "term": "irascible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2406,
        "term": "irate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2407,
        "term": "iridescent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2408,
        "term": "irksome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2409,
        "term": "ironic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2410,
        "term": "irony",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2411,
        "term": "irreconcilable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2412,
        "term": "irrefutable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2413,
        "term": "irrelevant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2414,
        "term": "irremediable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2415,
        "term": "irreparable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2416,
        "term": "irrepressible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2417,
        "term": "irreproachable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2418,
        "term": "irresolute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2419,
        "term": "irretrievable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2420,
        "term": "irreverence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2421,
        "term": "irrevocable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2422,
        "term": "isotope",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2423,
        "term": "isthmus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2424,
        "term": "itinerant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2425,
        "term": "itinerary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2426,
        "term": "jab",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2427,
        "term": "jabber",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2428,
        "term": "jaded",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2429,
        "term": "jargon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2430,
        "term": "jaundice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2431,
        "term": "jaundiced",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2432,
        "term": "jaunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2433,
        "term": "jaunty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2434,
        "term": "jeopardize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2435,
        "term": "jest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2436,
        "term": "jetsam",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2437,
        "term": "jettison",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2438,
        "term": "jibe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2439,
        "term": "jingoist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2440,
        "term": "jocose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2441,
        "term": "jocular",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2442,
        "term": "jocund",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2443,
        "term": "jollity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2444,
        "term": "jostle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2445,
        "term": "jovial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2446,
        "term": "jubilation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2447,
        "term": "judiciary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2448,
        "term": "judicious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2449,
        "term": "jug",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2450,
        "term": "juggernaut",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2451,
        "term": "jumble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2452,
        "term": "juncture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2453,
        "term": "junket",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2454,
        "term": "junta",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2455,
        "term": "juridical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2456,
        "term": "jurisdiction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2457,
        "term": "juxtapose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2458,
        "term": "kaleidoscope",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2459,
        "term": "ken",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2460,
        "term": "kernel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2461,
        "term": "killjoy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2462,
        "term": "kindle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2463,
        "term": "kindred",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2464,
        "term": "kinetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2465,
        "term": "kismet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2466,
        "term": "knack",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2467,
        "term": "knave",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2468,
        "term": "knead",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2469,
        "term": "kneel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2470,
        "term": "knell",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2471,
        "term": "knit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2472,
        "term": "knoll",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2473,
        "term": "knotty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2474,
        "term": "kudos",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2475,
        "term": "labile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2476,
        "term": "laborious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2477,
        "term": "labyrinth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2478,
        "term": "lace",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2479,
        "term": "laceration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2480,
        "term": "lachrymose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2481,
        "term": "lackadaisical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2482,
        "term": "lackluster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2483,
        "term": "laconic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2484,
        "term": "lag",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2485,
        "term": "laggard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2486,
        "term": "lagoon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2487,
        "term": "laity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2488,
        "term": "lament",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2489,
        "term": "lampoon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2490,
        "term": "lance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2491,
        "term": "lancet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2492,
        "term": "languid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2493,
        "term": "languish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2494,
        "term": "languor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2495,
        "term": "lank",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2496,
        "term": "lap",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2497,
        "term": "larceny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2498,
        "term": "larder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2499,
        "term": "largess",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2500,
        "term": "lascivious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2501,
        "term": "lassitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2502,
        "term": "latch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2503,
        "term": "latent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2504,
        "term": "lateral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2505,
        "term": "latitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2506,
        "term": "laud",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2507,
        "term": "lavish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2508,
        "term": "lax",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2509,
        "term": "layman",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2510,
        "term": "leash",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2511,
        "term": "leaven",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2512,
        "term": "lechery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2513,
        "term": "lectern",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2514,
        "term": "leery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2515,
        "term": "leeway",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2516,
        "term": "legacy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2517,
        "term": "legato",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2518,
        "term": "legend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2519,
        "term": "legerdemain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2520,
        "term": "legislature",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2521,
        "term": "leniency",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2522,
        "term": "leonine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2523,
        "term": "lethal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2524,
        "term": "lethargic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2525,
        "term": "levee",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2526,
        "term": "levitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2527,
        "term": "levity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2528,
        "term": "levy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2529,
        "term": "lewd",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2530,
        "term": "lexicon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2531,
        "term": "liability",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2532,
        "term": "liaison",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2533,
        "term": "libel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2534,
        "term": "libertine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2535,
        "term": "libidinous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2536,
        "term": "libido",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2537,
        "term": "libretto",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2538,
        "term": "license",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2539,
        "term": "licentious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2540,
        "term": "lien",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2541,
        "term": "ligneous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2542,
        "term": "lilliputian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2543,
        "term": "limber",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2544,
        "term": "limbo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2545,
        "term": "limn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2546,
        "term": "limp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2547,
        "term": "limpid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2548,
        "term": "lineage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2549,
        "term": "lineaments",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2550,
        "term": "linger",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2551,
        "term": "linguistic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2552,
        "term": "lionize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2553,
        "term": "liquidate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2554,
        "term": "list",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2555,
        "term": "listless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2556,
        "term": "litany",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2557,
        "term": "lithe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2558,
        "term": "litigation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2559,
        "term": "litotes",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2560,
        "term": "litter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2561,
        "term": "livid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2562,
        "term": "loath",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2563,
        "term": "loathe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2564,
        "term": "lode",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2565,
        "term": "loft",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2566,
        "term": "lofty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2567,
        "term": "log",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2568,
        "term": "loiter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2569,
        "term": "loll",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2570,
        "term": "longevity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2571,
        "term": "lookout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2572,
        "term": "loom",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2573,
        "term": "lope",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2574,
        "term": "lopsided",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2575,
        "term": "loquacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2576,
        "term": "lot",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2577,
        "term": "lottery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2578,
        "term": "lounge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2579,
        "term": "lout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2580,
        "term": "low",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2581,
        "term": "lubricate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2582,
        "term": "lucid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2583,
        "term": "lucrative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2584,
        "term": "lucre",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2585,
        "term": "ludicrous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2586,
        "term": "lugubrious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2587,
        "term": "lull",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2588,
        "term": "lumber",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2589,
        "term": "lumen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2590,
        "term": "luminary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2591,
        "term": "luminous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2592,
        "term": "lunar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2593,
        "term": "lunatic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2594,
        "term": "lurid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2595,
        "term": "lurk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2596,
        "term": "luscious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2597,
        "term": "lush",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2598,
        "term": "lust",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2599,
        "term": "luster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2600,
        "term": "lustrous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2601,
        "term": "luxuriant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2602,
        "term": "luxuriate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2603,
        "term": "macabre",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2604,
        "term": "mace",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2605,
        "term": "macerate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2606,
        "term": "Machiavellian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2607,
        "term": "machinations",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2608,
        "term": "maculated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2609,
        "term": "madrigal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2610,
        "term": "maelstrom",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2611,
        "term": "magisterial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2612,
        "term": "magistrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2613,
        "term": "magnanimity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2614,
        "term": "magnate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2615,
        "term": "magniloquent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2616,
        "term": "magnitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2617,
        "term": "maim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2618,
        "term": "makeshift",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2619,
        "term": "maladroit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2620,
        "term": "malady",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2621,
        "term": "malaise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2622,
        "term": "malapropism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2623,
        "term": "malapropos",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2624,
        "term": "malcontent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2625,
        "term": "malediction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2626,
        "term": "malefactor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2627,
        "term": "maleficient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2628,
        "term": "malevolent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2629,
        "term": "malfeasance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2630,
        "term": "malicious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2631,
        "term": "malign",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2632,
        "term": "malignant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2633,
        "term": "malingerer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2634,
        "term": "malleable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2635,
        "term": "malodorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2636,
        "term": "mammal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2637,
        "term": "mammoth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2638,
        "term": "manacle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2639,
        "term": "mandate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2640,
        "term": "mandatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2641,
        "term": "mange",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2642,
        "term": "mangle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2643,
        "term": "mangy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2644,
        "term": "maniacal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2645,
        "term": "manifest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2646,
        "term": "manifestation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2647,
        "term": "manifesto",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2648,
        "term": "manifold",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2649,
        "term": "manipulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2650,
        "term": "mannered",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2651,
        "term": "mannerism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2652,
        "term": "mantle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2653,
        "term": "manumit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2654,
        "term": "mar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2655,
        "term": "maraud",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2656,
        "term": "margin",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2657,
        "term": "marginal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2658,
        "term": "marital",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2659,
        "term": "maritime",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2660,
        "term": "marked",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2661,
        "term": "maroon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2662,
        "term": "marred",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2663,
        "term": "marrow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2664,
        "term": "marshal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2665,
        "term": "marsupial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2666,
        "term": "martial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2667,
        "term": "martinet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2668,
        "term": "martyr",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2669,
        "term": "mash",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2670,
        "term": "masochist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2671,
        "term": "mason",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2672,
        "term": "masquerade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2673,
        "term": "mass",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2674,
        "term": "masticate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2675,
        "term": "mat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2676,
        "term": "materialism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2677,
        "term": "maternal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2678,
        "term": "matriarch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2679,
        "term": "matriculate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2680,
        "term": "matrimony",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2681,
        "term": "matrix",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2682,
        "term": "maudlin",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2683,
        "term": "maul",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2684,
        "term": "mausoleum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2685,
        "term": "mauve",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2686,
        "term": "maverick",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2687,
        "term": "mawkish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2688,
        "term": "maxim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2689,
        "term": "mayhem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2690,
        "term": "meager",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2691,
        "term": "mealymouthed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2692,
        "term": "meander",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2693,
        "term": "meddlesome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2694,
        "term": "mediate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2695,
        "term": "mediocre",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2696,
        "term": "meditation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2697,
        "term": "medium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2698,
        "term": "medley",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2699,
        "term": "meek",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2700,
        "term": "megalomania",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2701,
        "term": "melancholy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2702,
        "term": "melee",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2703,
        "term": "mellifluous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2704,
        "term": "memento",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2705,
        "term": "memoir",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2706,
        "term": "memorial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2707,
        "term": "memorialize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2708,
        "term": "menace",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2709,
        "term": "menagerie",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2710,
        "term": "mendacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2711,
        "term": "mendicant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2712,
        "term": "menial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2713,
        "term": "mentor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2714,
        "term": "mercantile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2715,
        "term": "mercenary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2716,
        "term": "mercurial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2717,
        "term": "meretricious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2718,
        "term": "merger",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2719,
        "term": "merit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2720,
        "term": "mesmerize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2721,
        "term": "metallurgical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2722,
        "term": "metamorphosis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2723,
        "term": "metaphor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2724,
        "term": "mete",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2725,
        "term": "meteoric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2726,
        "term": "meter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2727,
        "term": "methodical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2728,
        "term": "meticulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2729,
        "term": "metrical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2730,
        "term": "metropolis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2731,
        "term": "mettle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2732,
        "term": "miasma",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2733,
        "term": "microcosm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2734,
        "term": "migrant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2735,
        "term": "migratory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2736,
        "term": "milieu",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2737,
        "term": "militant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2738,
        "term": "militate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2739,
        "term": "militia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2740,
        "term": "millennium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2741,
        "term": "mime",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2742,
        "term": "mimicry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2743,
        "term": "minatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2744,
        "term": "mincing",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2745,
        "term": "mingle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2746,
        "term": "miniature",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2747,
        "term": "minion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2748,
        "term": "minute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2749,
        "term": "minutiae",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2750,
        "term": "mirage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2751,
        "term": "mire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2752,
        "term": "mirth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2753,
        "term": "misadventure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2754,
        "term": "misanthrope",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2755,
        "term": "misapprehension",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2756,
        "term": "miscellaneous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2757,
        "term": "miscellany",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2758,
        "term": "mischance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2759,
        "term": "mischief",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2760,
        "term": "misconduct",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2761,
        "term": "misconstrue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2762,
        "term": "miscreant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2763,
        "term": "misdemeanor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2764,
        "term": "miserly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2765,
        "term": "misgivings",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2766,
        "term": "mishap",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2767,
        "term": "misnomer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2768,
        "term": "misogamy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2769,
        "term": "misogynist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2770,
        "term": "missile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2771,
        "term": "missive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2772,
        "term": "mite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2773,
        "term": "mitigate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2774,
        "term": "mnemonic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2775,
        "term": "mobile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2776,
        "term": "mock",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2777,
        "term": "mode",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2778,
        "term": "modicum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2779,
        "term": "modish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2780,
        "term": "modulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2781,
        "term": "mogul",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2782,
        "term": "molecule",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2783,
        "term": "mollify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2784,
        "term": "mollycoddle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2785,
        "term": "molten",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2786,
        "term": "momentous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2787,
        "term": "momentum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2788,
        "term": "monarchy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2789,
        "term": "monastic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2790,
        "term": "monetary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2791,
        "term": "mongrel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2792,
        "term": "monochromatic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2793,
        "term": "monochrome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2794,
        "term": "monogram",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2795,
        "term": "monograph",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2796,
        "term": "monolithic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2797,
        "term": "monotheism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2798,
        "term": "monotony",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2799,
        "term": "monumental",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2800,
        "term": "moodiness",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2801,
        "term": "moratorium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2802,
        "term": "morbid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2803,
        "term": "mordant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2804,
        "term": "mores",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2805,
        "term": "morgue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2806,
        "term": "moribund",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2807,
        "term": "morose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2808,
        "term": "mortar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2809,
        "term": "mortician",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2810,
        "term": "mortify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2811,
        "term": "mosaic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2812,
        "term": "mote",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2813,
        "term": "motif",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2814,
        "term": "motility",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2815,
        "term": "motley",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2816,
        "term": "mottled",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2817,
        "term": "motto",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2818,
        "term": "mountebank",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2819,
        "term": "muddle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2820,
        "term": "muggy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2821,
        "term": "mulct",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2822,
        "term": "multifarious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2823,
        "term": "multiform",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2824,
        "term": "multilingual",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2825,
        "term": "multiplicity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2826,
        "term": "mundane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2827,
        "term": "munificent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2828,
        "term": "mural",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2829,
        "term": "murky",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2830,
        "term": "murmur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2831,
        "term": "muse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2832,
        "term": "musky",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2833,
        "term": "muster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2834,
        "term": "musty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2835,
        "term": "mutablility",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2836,
        "term": "mute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2837,
        "term": "muted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2838,
        "term": "mutilate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2839,
        "term": "mutinous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2840,
        "term": "mutter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2841,
        "term": "myopic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2842,
        "term": "myriad",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2843,
        "term": "mystic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2844,
        "term": "nadir",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2845,
        "term": "narcissist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2846,
        "term": "narrative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2847,
        "term": "nascent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2848,
        "term": "natal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2849,
        "term": "natation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2850,
        "term": "natty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2851,
        "term": "nausea",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2852,
        "term": "nauseate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2853,
        "term": "nauseous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2854,
        "term": "nautical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2855,
        "term": "navigable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2856,
        "term": "nebula",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2857,
        "term": "nebulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2858,
        "term": "necromancy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2859,
        "term": "nectar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2860,
        "term": "nefarious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2861,
        "term": "negate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2862,
        "term": "negligence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2863,
        "term": "negligible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2864,
        "term": "nemesis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2865,
        "term": "neologism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2866,
        "term": "neophyte",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2867,
        "term": "nepotism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2868,
        "term": "nether",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2869,
        "term": "nettle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2870,
        "term": "nexus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2871,
        "term": "nib",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2872,
        "term": "nicety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2873,
        "term": "niggardly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2874,
        "term": "niggle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2875,
        "term": "nihilist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2876,
        "term": "nimble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2877,
        "term": "nip",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2878,
        "term": "nirvana",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2879,
        "term": "nocturnal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2880,
        "term": "noisome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2881,
        "term": "nomadic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2882,
        "term": "nomenclature",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2883,
        "term": "nominal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2884,
        "term": "nonchalance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2885,
        "term": "noncommittal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2886,
        "term": "nondescript",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2887,
        "term": "nonentity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2888,
        "term": "nonplus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2889,
        "term": "nonsense",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2890,
        "term": "noose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2891,
        "term": "nostalgia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2892,
        "term": "nostrum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2893,
        "term": "notable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2894,
        "term": "notch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2895,
        "term": "notoriety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2896,
        "term": "nourish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2897,
        "term": "nourishment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2898,
        "term": "nova",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2899,
        "term": "novelty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2900,
        "term": "novice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2901,
        "term": "noxious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2902,
        "term": "nuance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2903,
        "term": "nubile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2904,
        "term": "nugatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2905,
        "term": "nullify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2906,
        "term": "numismatist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2907,
        "term": "nuptial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2908,
        "term": "nurse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2909,
        "term": "nurture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2910,
        "term": "nutrient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2911,
        "term": "nutrition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2912,
        "term": "nutritious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2913,
        "term": "oaf",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2914,
        "term": "oath",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2915,
        "term": "oatmeal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2916,
        "term": "obdurate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2917,
        "term": "obeisance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2918,
        "term": "obelisk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2919,
        "term": "obese",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2920,
        "term": "obfuscate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2921,
        "term": "obituary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2922,
        "term": "objective",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2923,
        "term": "obligatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2924,
        "term": "oblique",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2925,
        "term": "obliterate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2926,
        "term": "oblivion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2927,
        "term": "oblivious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2928,
        "term": "obloquy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2929,
        "term": "obnoxious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2930,
        "term": "obscure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2931,
        "term": "obsequious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2932,
        "term": "obsequy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2933,
        "term": "obsessive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2934,
        "term": "obsidian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2935,
        "term": "obsolete",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2936,
        "term": "obstetrician",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2937,
        "term": "obstinate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2938,
        "term": "obstreperous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2939,
        "term": "obtrude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2940,
        "term": "obtuse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2941,
        "term": "obviate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2942,
        "term": "Occident",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2943,
        "term": "occlude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2944,
        "term": "occult",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2945,
        "term": "oculist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2946,
        "term": "odds",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2947,
        "term": "odious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2948,
        "term": "odium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2949,
        "term": "odoriferous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2950,
        "term": "odorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2951,
        "term": "odyssey",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2952,
        "term": "offensive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2953,
        "term": "offhand",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2954,
        "term": "officious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2955,
        "term": "ogle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2956,
        "term": "olfactory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2957,
        "term": "oligarchy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2958,
        "term": "ominous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2959,
        "term": "omnipotent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2960,
        "term": "omnipresent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2961,
        "term": "omniscient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2962,
        "term": "omnivorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2963,
        "term": "onerous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2964,
        "term": "onslaught",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2965,
        "term": "onus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2966,
        "term": "ooze",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2967,
        "term": "opalescent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2968,
        "term": "opaque",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2969,
        "term": "opiate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2970,
        "term": "opportune",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2971,
        "term": "opportunist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2972,
        "term": "opprobrium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2973,
        "term": "optician",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2974,
        "term": "optimist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2975,
        "term": "optimum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2976,
        "term": "optional",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2977,
        "term": "optometrist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2978,
        "term": "opulence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2979,
        "term": "opus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2980,
        "term": "oracular",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2981,
        "term": "orator",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2982,
        "term": "oratorio",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2983,
        "term": "ordain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2984,
        "term": "ordeal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2985,
        "term": "ordinance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2986,
        "term": "ordination",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2987,
        "term": "orgy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2988,
        "term": "orient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2989,
        "term": "orientation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2990,
        "term": "orifice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2991,
        "term": "ornate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2992,
        "term": "ornithologist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2993,
        "term": "orthodox",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2994,
        "term": "orthography",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2995,
        "term": "oscillate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2996,
        "term": "osseous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2997,
        "term": "ossify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2998,
        "term": "ostensible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 2999,
        "term": "ostentatious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3000,
        "term": "ostracize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3001,
        "term": "oust",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3002,
        "term": "outcast",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3003,
        "term": "outfit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3004,
        "term": "outgoing",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3005,
        "term": "outlandish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3006,
        "term": "outlaw",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3007,
        "term": "outlook",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3008,
        "term": "outmoded",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3009,
        "term": "outrage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3010,
        "term": "outskirts",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3011,
        "term": "outspoken",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3012,
        "term": "outstrip",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3013,
        "term": "outwit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3014,
        "term": "ovation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3015,
        "term": "overbearing",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3016,
        "term": "overblown",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3017,
        "term": "oversee",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3018,
        "term": "overt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3019,
        "term": "overthrow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3020,
        "term": "overture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3021,
        "term": "overturn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3022,
        "term": "overweening",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3023,
        "term": "overwhelm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3024,
        "term": "overwrought",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3025,
        "term": "ovoid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3026,
        "term": "pachyderm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3027,
        "term": "pacifist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3028,
        "term": "pacify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3029,
        "term": "padre",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3030,
        "term": "paean",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3031,
        "term": "painstaking",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3032,
        "term": "palatable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3033,
        "term": "palate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3034,
        "term": "palatial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3035,
        "term": "paleontology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3036,
        "term": "palette",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3037,
        "term": "palimpsest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3038,
        "term": "pall",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3039,
        "term": "pallet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3040,
        "term": "palliate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3041,
        "term": "pallid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3042,
        "term": "palm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3043,
        "term": "palpable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3044,
        "term": "palpitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3045,
        "term": "paltry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3046,
        "term": "pan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3047,
        "term": "panacea",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3048,
        "term": "panache",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3049,
        "term": "pandemic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3050,
        "term": "Pandemonium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3051,
        "term": "pander",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3052,
        "term": "panegyric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3053,
        "term": "pang",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3054,
        "term": "panoramic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3055,
        "term": "pantomime",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3056,
        "term": "papyrus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3057,
        "term": "parable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3058,
        "term": "paradigm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3059,
        "term": "paradox",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3060,
        "term": "paragon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3061,
        "term": "parallel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3062,
        "term": "parallelism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3063,
        "term": "parameter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3064,
        "term": "paramount",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3065,
        "term": "paramour",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3066,
        "term": "paranoia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3067,
        "term": "paraphernalia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3068,
        "term": "paraphrase",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3069,
        "term": "parasite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3070,
        "term": "parched",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3071,
        "term": "parchment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3072,
        "term": "pare",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3073,
        "term": "pariah",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3074,
        "term": "parish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3075,
        "term": "parity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3076,
        "term": "parlance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3077,
        "term": "parley",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3078,
        "term": "parochial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3079,
        "term": "parody",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3080,
        "term": "paroxysm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3081,
        "term": "parquet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3082,
        "term": "parry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3083,
        "term": "parsimony",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3084,
        "term": "partial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3085,
        "term": "partiality",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3086,
        "term": "partisan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3087,
        "term": "partition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3088,
        "term": "parvenu",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3089,
        "term": "passive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3090,
        "term": "paste",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3091,
        "term": "pastiche",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3092,
        "term": "pastoral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3093,
        "term": "pastry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3094,
        "term": "patent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3095,
        "term": "pathetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3096,
        "term": "pathological",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3097,
        "term": "pathos",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3098,
        "term": "patina",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3099,
        "term": "patois",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3100,
        "term": "patriarch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3101,
        "term": "patrician",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3102,
        "term": "patrimony",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3103,
        "term": "patronize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3104,
        "term": "paucity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3105,
        "term": "pauper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3106,
        "term": "peccadillo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3107,
        "term": "pecuniary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3108,
        "term": "pedagogue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3109,
        "term": "pedagogy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3110,
        "term": "pedant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3111,
        "term": "pedantic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3112,
        "term": "peddle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3113,
        "term": "pedestal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3114,
        "term": "pedestrian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3115,
        "term": "pedigree",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3116,
        "term": "peer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3117,
        "term": "peerless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3118,
        "term": "peevish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3119,
        "term": "pejorative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3120,
        "term": "pellucid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3121,
        "term": "pen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3122,
        "term": "penance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3123,
        "term": "penchant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3124,
        "term": "pending",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3125,
        "term": "pendulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3126,
        "term": "penetrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3127,
        "term": "penitent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3128,
        "term": "penology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3129,
        "term": "pensive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3130,
        "term": "penumbra",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3131,
        "term": "penury",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3132,
        "term": "peon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3133,
        "term": "perceptive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3134,
        "term": "percussion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3135,
        "term": "perdition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3136,
        "term": "peregrination",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3137,
        "term": "peremptory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3138,
        "term": "perennial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3139,
        "term": "perfidious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3140,
        "term": "perforate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3141,
        "term": "perfunctory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3142,
        "term": "perigee",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3143,
        "term": "perimeter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3144,
        "term": "peripatetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3145,
        "term": "peripheral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3146,
        "term": "periphery",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3147,
        "term": "perjury",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3148,
        "term": "permeable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3149,
        "term": "permissive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3150,
        "term": "pernicious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3151,
        "term": "peroration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3152,
        "term": "perpetrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3153,
        "term": "perpetual",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3154,
        "term": "perpetuate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3155,
        "term": "persevere",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3156,
        "term": "persist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3157,
        "term": "personable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3158,
        "term": "personify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3159,
        "term": "perspicacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3160,
        "term": "perspicuity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3161,
        "term": "perspicuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3162,
        "term": "pert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3163,
        "term": "pertinacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3164,
        "term": "pertinent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3165,
        "term": "perturb",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3166,
        "term": "peruse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3167,
        "term": "pervasive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3168,
        "term": "perverse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3169,
        "term": "perversion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3170,
        "term": "pervert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3171,
        "term": "pessimism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3172,
        "term": "pestle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3173,
        "term": "petrify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3174,
        "term": "petty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3175,
        "term": "petulant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3176,
        "term": "phalanx",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3177,
        "term": "pharisaical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3178,
        "term": "pharisee",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3179,
        "term": "phenomena",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3180,
        "term": "philanderer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3181,
        "term": "philatelist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3182,
        "term": "Philistine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3183,
        "term": "philology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3184,
        "term": "phlegmatic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3185,
        "term": "phobia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3186,
        "term": "phoenix",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3187,
        "term": "physiognomy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3188,
        "term": "physiological",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3189,
        "term": "piebald",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3190,
        "term": "piecemeal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3191,
        "term": "pied",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3192,
        "term": "piety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3193,
        "term": "pigment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3194,
        "term": "pilfer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3195,
        "term": "pillage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3196,
        "term": "pillory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3197,
        "term": "pinch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3198,
        "term": "pine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3199,
        "term": "pinion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3200,
        "term": "pinnace",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3201,
        "term": "pinnacle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3202,
        "term": "pious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3203,
        "term": "piquant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3204,
        "term": "pique",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3205,
        "term": "piscatorial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3206,
        "term": "pitfall",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3207,
        "term": "pith",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3208,
        "term": "pithy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3209,
        "term": "pittance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3210,
        "term": "pivotal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3211,
        "term": "placate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3212,
        "term": "placebo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3213,
        "term": "placid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3214,
        "term": "plagiarize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3215,
        "term": "plaintive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3216,
        "term": "plait",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3217,
        "term": "plane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3218,
        "term": "plaster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3219,
        "term": "plasticity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3220,
        "term": "platitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3221,
        "term": "platonic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3222,
        "term": "plaudit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3223,
        "term": "plausible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3224,
        "term": "plebeian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3225,
        "term": "plebiscite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3226,
        "term": "plenary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3227,
        "term": "plenitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3228,
        "term": "plethora",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3229,
        "term": "pliable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3230,
        "term": "pliant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3231,
        "term": "plight",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3232,
        "term": "ploy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3233,
        "term": "pluck",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3234,
        "term": "plumage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3235,
        "term": "plumb",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3236,
        "term": "plumber",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3237,
        "term": "plume",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3238,
        "term": "plummet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3239,
        "term": "plump",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3240,
        "term": "plutocracy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3241,
        "term": "podiatrist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3242,
        "term": "podium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3243,
        "term": "poignancy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3244,
        "term": "poise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3245,
        "term": "polar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3246,
        "term": "polarity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3247,
        "term": "polarize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3248,
        "term": "polemic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3249,
        "term": "politic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3250,
        "term": "polity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3251,
        "term": "polygamist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3252,
        "term": "polyglot",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3253,
        "term": "pomposity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3254,
        "term": "ponderous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3255,
        "term": "pontifical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3256,
        "term": "pore",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3257,
        "term": "porous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3258,
        "term": "porridge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3259,
        "term": "portend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3260,
        "term": "portly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3261,
        "term": "pose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3262,
        "term": "poseur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3263,
        "term": "posterity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3264,
        "term": "postmortem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3265,
        "term": "postulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3266,
        "term": "posture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3267,
        "term": "potable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3268,
        "term": "potent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3269,
        "term": "potentate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3270,
        "term": "potential",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3271,
        "term": "potion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3272,
        "term": "potpourri",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3273,
        "term": "poultice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3274,
        "term": "practicable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3275,
        "term": "practical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3276,
        "term": "pragmatic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3277,
        "term": "pragmatist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3278,
        "term": "prance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3279,
        "term": "prank",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3280,
        "term": "prate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3281,
        "term": "prattle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3282,
        "term": "preamble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3283,
        "term": "precarious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3284,
        "term": "precedent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3285,
        "term": "precept",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3286,
        "term": "precinct",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3287,
        "term": "precipice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3288,
        "term": "precipitant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3289,
        "term": "precipitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3290,
        "term": "precipitous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3291,
        "term": "precise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3292,
        "term": "preclude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3293,
        "term": "precocious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3294,
        "term": "precursor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3295,
        "term": "predator",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3296,
        "term": "predecessor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3297,
        "term": "predetermine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3298,
        "term": "predicament",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3299,
        "term": "predilection",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3300,
        "term": "predispose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3301,
        "term": "preeminent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3302,
        "term": "preempt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3303,
        "term": "preen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3304,
        "term": "prefatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3305,
        "term": "prefigure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3306,
        "term": "prehensile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3307,
        "term": "prelate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3308,
        "term": "prelude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3309,
        "term": "premeditate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3310,
        "term": "premise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3311,
        "term": "premonition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3312,
        "term": "premonitory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3313,
        "term": "preponderance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3314,
        "term": "preposterous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3315,
        "term": "prerogative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3316,
        "term": "presage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3317,
        "term": "prescience",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3318,
        "term": "presentiment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3319,
        "term": "prestige",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3320,
        "term": "presume",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3321,
        "term": "pretend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3322,
        "term": "pretension",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3323,
        "term": "pretentious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3324,
        "term": "preternatural",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3325,
        "term": "pretext",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3326,
        "term": "prevail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3327,
        "term": "prevalent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3328,
        "term": "prevaricate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3329,
        "term": "prey",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3330,
        "term": "prim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3331,
        "term": "primal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3332,
        "term": "primary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3333,
        "term": "primate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3334,
        "term": "prime",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3335,
        "term": "primogeniture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3336,
        "term": "primordial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3337,
        "term": "primp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3338,
        "term": "pristine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3339,
        "term": "privation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3340,
        "term": "privy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3341,
        "term": "prize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3342,
        "term": "probe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3343,
        "term": "probity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3344,
        "term": "problematic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3345,
        "term": "proclivity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3346,
        "term": "procrastinate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3347,
        "term": "procurement",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3348,
        "term": "prod",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3349,
        "term": "prodigal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3350,
        "term": "prodigious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3351,
        "term": "prodigy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3352,
        "term": "profane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3353,
        "term": "profligate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3354,
        "term": "profound",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3355,
        "term": "profusion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3356,
        "term": "progenitor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3357,
        "term": "progeny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3358,
        "term": "prognosis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3359,
        "term": "prognosticate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3360,
        "term": "prohibitive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3361,
        "term": "projectile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3362,
        "term": "proletarian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3363,
        "term": "proliferate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3364,
        "term": "prolific",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3365,
        "term": "prolixity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3366,
        "term": "prologue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3367,
        "term": "prolong",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3368,
        "term": "prominent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3369,
        "term": "promiscuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3370,
        "term": "promontory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3371,
        "term": "promote",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3372,
        "term": "prompt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3373,
        "term": "promulgate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3374,
        "term": "prone",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3375,
        "term": "prong",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3376,
        "term": "pronounced",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3377,
        "term": "prop",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3378,
        "term": "propagate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3379,
        "term": "propensity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3380,
        "term": "prophetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3381,
        "term": "propinquity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3382,
        "term": "propitiate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3383,
        "term": "propitious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3384,
        "term": "proponent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3385,
        "term": "propound",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3386,
        "term": "propriety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3387,
        "term": "propulsive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3388,
        "term": "prosaic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3389,
        "term": "proscenium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3390,
        "term": "proscribe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3391,
        "term": "proselytize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3392,
        "term": "prosody",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3393,
        "term": "prosper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3394,
        "term": "prosperity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3395,
        "term": "prosperous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3396,
        "term": "prostrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3397,
        "term": "protagonist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3398,
        "term": "protean",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3399,
        "term": "protocol",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3400,
        "term": "prototype",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3401,
        "term": "protract",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3402,
        "term": "protrude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3403,
        "term": "protuberance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3404,
        "term": "provenance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3405,
        "term": "provender",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3406,
        "term": "proverb",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3407,
        "term": "providence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3408,
        "term": "provident",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3409,
        "term": "provincial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3410,
        "term": "provision",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3411,
        "term": "provisional",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3412,
        "term": "proviso",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3413,
        "term": "provocative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3414,
        "term": "prowess",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3415,
        "term": "proximity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3416,
        "term": "proxy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3417,
        "term": "prude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3418,
        "term": "prudent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3419,
        "term": "prune",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3420,
        "term": "prurient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3421,
        "term": "pry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3422,
        "term": "pseudonym",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3423,
        "term": "psyche",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3424,
        "term": "psychiatrist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3425,
        "term": "psychic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3426,
        "term": "pterodactyl",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3427,
        "term": "pucker",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3428,
        "term": "pudding",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3429,
        "term": "puerile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3430,
        "term": "pugilist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3431,
        "term": "pugnacity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3432,
        "term": "puissant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3433,
        "term": "pulchritude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3434,
        "term": "pulmonary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3435,
        "term": "pulpit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3436,
        "term": "pulsate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3437,
        "term": "pulse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3438,
        "term": "pulverize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3439,
        "term": "pummel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3440,
        "term": "punctilious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3441,
        "term": "pundit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3442,
        "term": "pungent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3443,
        "term": "punitive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3444,
        "term": "puny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3445,
        "term": "purchase",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3446,
        "term": "purgatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3447,
        "term": "purge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3448,
        "term": "purport",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3449,
        "term": "purported",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3450,
        "term": "purse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3451,
        "term": "purveyor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3452,
        "term": "pusillanimous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3453,
        "term": "putative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3454,
        "term": "putrefy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3455,
        "term": "putrescent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3456,
        "term": "putrid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3457,
        "term": "puzzle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3458,
        "term": "pyromaniac",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3459,
        "term": "quack",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3460,
        "term": "quadruped",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3461,
        "term": "quaff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3462,
        "term": "quagmire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3463,
        "term": "quail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3464,
        "term": "quaint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3465,
        "term": "qualified",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3466,
        "term": "qualify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3467,
        "term": "qualms",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3468,
        "term": "quandary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3469,
        "term": "quarantine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3470,
        "term": "quarry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3471,
        "term": "quash",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3472,
        "term": "quay",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3473,
        "term": "queasy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3474,
        "term": "queer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3475,
        "term": "quell",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3476,
        "term": "quench",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3477,
        "term": "querulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3478,
        "term": "query",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3479,
        "term": "queue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3480,
        "term": "quibble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3481,
        "term": "quicksilver",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3482,
        "term": "quiescent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3483,
        "term": "quietude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3484,
        "term": "quip",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3485,
        "term": "quirk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3486,
        "term": "quisling",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3487,
        "term": "quiver",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3488,
        "term": "quixotic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3489,
        "term": "quizzical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3490,
        "term": "quorum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3491,
        "term": "quotidian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3492,
        "term": "rabble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3493,
        "term": "rabid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3494,
        "term": "rabies",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3495,
        "term": "raconteur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3496,
        "term": "raffle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3497,
        "term": "rag",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3498,
        "term": "ragamuffin",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3499,
        "term": "rail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3500,
        "term": "raiment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3501,
        "term": "rake",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3502,
        "term": "rakish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3503,
        "term": "rally",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3504,
        "term": "ram",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3505,
        "term": "ramble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3506,
        "term": "ramify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3507,
        "term": "ramp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3508,
        "term": "rampant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3509,
        "term": "rampart",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3510,
        "term": "ramshackle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3511,
        "term": "rancid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3512,
        "term": "rancor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3513,
        "term": "random",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3514,
        "term": "rank",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3515,
        "term": "rankle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3516,
        "term": "ransack",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3517,
        "term": "rant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3518,
        "term": "rapacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3519,
        "term": "rapport",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3520,
        "term": "rapt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3521,
        "term": "rapture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3522,
        "term": "rare",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3523,
        "term": "rarefied",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3524,
        "term": "rasp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3525,
        "term": "raspy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3526,
        "term": "ratify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3527,
        "term": "ration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3528,
        "term": "rational",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3529,
        "term": "rationale",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3530,
        "term": "rationalize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3531,
        "term": "raucous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3532,
        "term": "ravage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3533,
        "term": "rave",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3534,
        "term": "ravel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3535,
        "term": "ravenous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3536,
        "term": "ravine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3537,
        "term": "raze",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3538,
        "term": "reactionary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3539,
        "term": "realm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3540,
        "term": "reaper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3541,
        "term": "rebate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3542,
        "term": "rebuff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3543,
        "term": "rebuke",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3544,
        "term": "rebus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3545,
        "term": "rebuttal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3546,
        "term": "recalcitrant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3547,
        "term": "recant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3548,
        "term": "recapitulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3549,
        "term": "recast",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3550,
        "term": "receptive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3551,
        "term": "recess",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3552,
        "term": "recession",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3553,
        "term": "recidivism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3554,
        "term": "recipient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3555,
        "term": "reciprocal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3556,
        "term": "reciprocate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3557,
        "term": "recital",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3558,
        "term": "recite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3559,
        "term": "reckon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3560,
        "term": "recline",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3561,
        "term": "recluse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3562,
        "term": "reconcile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3563,
        "term": "recondite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3564,
        "term": "reconnaissance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3565,
        "term": "recount",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3566,
        "term": "recourse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3567,
        "term": "recreant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3568,
        "term": "recrimination",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3569,
        "term": "rectify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3570,
        "term": "rectitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3571,
        "term": "recumbent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3572,
        "term": "recuperate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3573,
        "term": "recurrent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3574,
        "term": "redolent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3575,
        "term": "redoubtable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3576,
        "term": "redress",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3577,
        "term": "reduce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3578,
        "term": "redundant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3579,
        "term": "reek",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3580,
        "term": "refectory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3581,
        "term": "referendum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3582,
        "term": "refraction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3583,
        "term": "refractory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3584,
        "term": "refrain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3585,
        "term": "refulgent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3586,
        "term": "refurbish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3587,
        "term": "refuse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3588,
        "term": "refute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3589,
        "term": "regal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3590,
        "term": "regale",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3591,
        "term": "regatta",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3592,
        "term": "regent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3593,
        "term": "who",
        "picture": "",
        "meaning": "is ill, abse nt, or still a  child;",
        "mnemonic": ""
      },
      {
        "id": 3594,
        "term": "regicide",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3595,
        "term": "regime",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3596,
        "term": "regimen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3597,
        "term": "regiment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3598,
        "term": "rehabilitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3599,
        "term": "reimburse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3600,
        "term": "reinstate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3601,
        "term": "reiterate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3602,
        "term": "rejoinder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3603,
        "term": "rejuvenate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3604,
        "term": "relapse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3605,
        "term": "relegate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3606,
        "term": "relent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3607,
        "term": "relevant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3608,
        "term": "relic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3609,
        "term": "religious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3610,
        "term": "relinquish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3611,
        "term": "relish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3612,
        "term": "remediable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3613,
        "term": "reminiscence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3614,
        "term": "reminiscent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3615,
        "term": "remiss",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3616,
        "term": "remission",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3617,
        "term": "remit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3618,
        "term": "remittance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3619,
        "term": "remnant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3620,
        "term": "remonstrate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3621,
        "term": "remorse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3622,
        "term": "remunerative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3623,
        "term": "rend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3624,
        "term": "render",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3625,
        "term": "rendezvous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3626,
        "term": "rendition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3627,
        "term": "renegade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3628,
        "term": "renege",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3629,
        "term": "renounce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3630,
        "term": "renovate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3631,
        "term": "renown",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3632,
        "term": "rent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3633,
        "term": "reparable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3634,
        "term": "reparation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3635,
        "term": "repartee",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3636,
        "term": "repast",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3637,
        "term": "repeal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3638,
        "term": "repel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3639,
        "term": "repellent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3640,
        "term": "repercussion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3641,
        "term": "repertoire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3642,
        "term": "repine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3643,
        "term": "replenish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3644,
        "term": "replete",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3645,
        "term": "replica",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3646,
        "term": "replicate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3647,
        "term": "repose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3648,
        "term": "repository",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3649,
        "term": "reprehensible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3650,
        "term": "repress",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3651,
        "term": "reprieve",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3652,
        "term": "reprimand",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3653,
        "term": "reprisal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3654,
        "term": "reprise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3655,
        "term": "reproach",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3656,
        "term": "reprobate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3657,
        "term": "reprobation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3658,
        "term": "reprove",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3659,
        "term": "repudiate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3660,
        "term": "repugnance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3661,
        "term": "repulse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3662,
        "term": "repulsion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3663,
        "term": "reputable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3664,
        "term": "reputed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3665,
        "term": "requiem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3666,
        "term": "requisite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3667,
        "term": "requisition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3668,
        "term": "requite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3669,
        "term": "rescind",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3670,
        "term": "resentment",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3671,
        "term": "reserve",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3672,
        "term": "residual",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3673,
        "term": "residue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3674,
        "term": "resign",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3675,
        "term": "resignation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3676,
        "term": "resilient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3677,
        "term": "resolution",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3678,
        "term": "resolve",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3679,
        "term": "resonant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3680,
        "term": "resort",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3681,
        "term": "resound",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3682,
        "term": "resourceful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3683,
        "term": "respiration",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3684,
        "term": "respite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3685,
        "term": "resplendent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3686,
        "term": "responsiveness",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3687,
        "term": "restitution",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3688,
        "term": "restive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3689,
        "term": "restraint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3690,
        "term": "resumption",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3691,
        "term": "resurge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3692,
        "term": "resurrect",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3693,
        "term": "resuscitate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3694,
        "term": "retain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3695,
        "term": "retaliate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3696,
        "term": "retard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3697,
        "term": "retentive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3698,
        "term": "reticent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3699,
        "term": "retinue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3700,
        "term": "retiring",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3701,
        "term": "retort",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3702,
        "term": "retract",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3703,
        "term": "retrench",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3704,
        "term": "retribution",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3705,
        "term": "retrieve",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3706,
        "term": "retroactive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3707,
        "term": "retrograde",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3708,
        "term": "retrospective",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3709,
        "term": "revelry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3710,
        "term": "reverberate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3711,
        "term": "reverend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3712,
        "term": "reverent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3713,
        "term": "reverie",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3714,
        "term": "revert",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3715,
        "term": "revile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3716,
        "term": "revoke",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3717,
        "term": "revulsion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3718,
        "term": "rhapsodize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3719,
        "term": "rhapsody",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3720,
        "term": "rhetoric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3721,
        "term": "ribald",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3722,
        "term": "rickety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3723,
        "term": "riddle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3724,
        "term": "rider",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3725,
        "term": "rife",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3726,
        "term": "rift",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3727,
        "term": "rig",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3728,
        "term": "righteous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3729,
        "term": "rightful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3730,
        "term": "rigid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3731,
        "term": "rigor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3732,
        "term": "rile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3733,
        "term": "rip",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3734,
        "term": "rivet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3735,
        "term": "riveting",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3736,
        "term": "rivulet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3737,
        "term": "robust",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3738,
        "term": "rococo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3739,
        "term": "roil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3740,
        "term": "rolling",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3741,
        "term": "romp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3742,
        "term": "rooster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3743,
        "term": "roseate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3744,
        "term": "roster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3745,
        "term": "rostrum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3746,
        "term": "rote",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3747,
        "term": "rotund",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3748,
        "term": "rotunda",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3749,
        "term": "rotundity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3750,
        "term": "rousing",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3751,
        "term": "rout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3752,
        "term": "rubble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3753,
        "term": "rubric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3754,
        "term": "ruddy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3755,
        "term": "rudimentary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3756,
        "term": "rue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3757,
        "term": "ruffian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3758,
        "term": "rumble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3759,
        "term": "ruminant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3760,
        "term": "ruminate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3761,
        "term": "rummage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3762,
        "term": "runic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3763,
        "term": "ruse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3764,
        "term": "rustic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3765,
        "term": "rusticate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3766,
        "term": "rustle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3767,
        "term": "ruthless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3768,
        "term": "saboteur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3769,
        "term": "saccharine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3770,
        "term": "sacrilegious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3771,
        "term": "sacrosanct",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3772,
        "term": "sadistic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3773,
        "term": "saga",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3774,
        "term": "sagacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3775,
        "term": "sage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3776,
        "term": "salacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3777,
        "term": "salient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3778,
        "term": "saline",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3779,
        "term": "sallow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3780,
        "term": "salubrious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3781,
        "term": "salutary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3782,
        "term": "salvage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3783,
        "term": "sanctimonious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3784,
        "term": "sanction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3785,
        "term": "sanctuary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3786,
        "term": "sanguinary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3787,
        "term": "sanguine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3788,
        "term": "sap",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3789,
        "term": "sarcasm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3790,
        "term": "sardonic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3791,
        "term": "sartorial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3792,
        "term": "sate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3793,
        "term": "satellite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3794,
        "term": "satiate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3795,
        "term": "satire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3796,
        "term": "satirical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3797,
        "term": "saturate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3798,
        "term": "saturnine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3799,
        "term": "satyr",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3800,
        "term": "saunter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3801,
        "term": "savant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3802,
        "term": "savor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3803,
        "term": "savory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3804,
        "term": "scabbard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3805,
        "term": "scad",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3806,
        "term": "scaffold",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3807,
        "term": "scale",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3808,
        "term": "scanty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3809,
        "term": "scapegoat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3810,
        "term": "scavenge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3811,
        "term": "scenario",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3812,
        "term": "schematic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3813,
        "term": "scheme",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3814,
        "term": "schism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3815,
        "term": "scholarly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3816,
        "term": "scintilla",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3817,
        "term": "scintillate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3818,
        "term": "scion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3819,
        "term": "scoff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3820,
        "term": "scorch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3821,
        "term": "score",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3822,
        "term": "scotch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3823,
        "term": "scourge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3824,
        "term": "scowl",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3825,
        "term": "scrap",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3826,
        "term": "scrappy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3827,
        "term": "scraps",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3828,
        "term": "screech",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3829,
        "term": "unpleasant",
        "picture": "",
        "meaning": "high sharp  sound; shr i ek; V.",
        "mnemonic": ""
      },
      {
        "id": 3830,
        "term": "scrimmage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3831,
        "term": "scruple",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3832,
        "term": "scrupulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3833,
        "term": "scrutinize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3834,
        "term": "scuffle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3835,
        "term": "scurrilous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3836,
        "term": "scurry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3837,
        "term": "scurvy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3838,
        "term": "scuttle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3839,
        "term": "seamy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3840,
        "term": "sear",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3841,
        "term": "season",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3842,
        "term": "seasonable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3843,
        "term": "seasonal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3844,
        "term": "seasoned",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3845,
        "term": "secession",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3846,
        "term": "seclusion",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3847,
        "term": "secrete",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3848,
        "term": "sect",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3849,
        "term": "sectarian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3850,
        "term": "secular",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3851,
        "term": "sedate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3852,
        "term": "sedentary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3853,
        "term": "sedition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3854,
        "term": "seduce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3855,
        "term": "sedulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3856,
        "term": "seedy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3857,
        "term": "seemly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3858,
        "term": "seep",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3859,
        "term": "seethe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3860,
        "term": "seine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3861,
        "term": "seismic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3862,
        "term": "selective",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3863,
        "term": "semblance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3864,
        "term": "seminal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3865,
        "term": "seminary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3866,
        "term": "senility",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3867,
        "term": "sensitization",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3868,
        "term": "sensual",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3869,
        "term": "sensuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3870,
        "term": "sententious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3871,
        "term": "sentient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3872,
        "term": "sentimental",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3873,
        "term": "sentinel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3874,
        "term": "septic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3875,
        "term": "sepulcher",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3876,
        "term": "sequester",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3877,
        "term": "sere",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3878,
        "term": "serendipity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3879,
        "term": "serenity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3880,
        "term": "serpentine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3881,
        "term": "serrated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3882,
        "term": "servile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3883,
        "term": "servitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3884,
        "term": "sever",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3885,
        "term": "severity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3886,
        "term": "sextant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3887,
        "term": "shack",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3888,
        "term": "shackle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3889,
        "term": "shade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3890,
        "term": "sham",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3891,
        "term": "shambles",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3892,
        "term": "shard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3893,
        "term": "shaving",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3894,
        "term": "sheaf",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3895,
        "term": "shear",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3896,
        "term": "sheathe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3897,
        "term": "shed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3898,
        "term": "sheer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3899,
        "term": "sherbet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3900,
        "term": "shift",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3901,
        "term": "shimmer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3902,
        "term": "shirk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3903,
        "term": "shoddy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3904,
        "term": "shoot",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3905,
        "term": "shove",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3906,
        "term": "shrew",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3907,
        "term": "shrewd",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3908,
        "term": "shrivel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3909,
        "term": "shudder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3910,
        "term": "shuffle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3911,
        "term": "shun",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3912,
        "term": "shunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3913,
        "term": "shyster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3914,
        "term": "sibling",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3915,
        "term": "sibylline",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3916,
        "term": "sidereal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3917,
        "term": "sidetrack",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3918,
        "term": "sift",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3919,
        "term": "significant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3920,
        "term": "silt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3921,
        "term": "simian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3922,
        "term": "simile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3923,
        "term": "simper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3924,
        "term": "simplistic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3925,
        "term": "simulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3926,
        "term": "sinecure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3927,
        "term": "sinewy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3928,
        "term": "singular",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3929,
        "term": "sinister",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3930,
        "term": "sinuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3931,
        "term": "siren",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3932,
        "term": "skeptic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3933,
        "term": "skiff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3934,
        "term": "skim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3935,
        "term": "skimp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3936,
        "term": "skinflint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3937,
        "term": "skirmish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3938,
        "term": "skittish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3939,
        "term": "skulk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3940,
        "term": "slack",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3941,
        "term": "slacken",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3942,
        "term": "slag",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3943,
        "term": "slake",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3944,
        "term": "slander",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3945,
        "term": "slap",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3946,
        "term": "slapdash",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3947,
        "term": "slaughter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3948,
        "term": "slavish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3949,
        "term": "sleazy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3950,
        "term": "sledge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3951,
        "term": "sleek",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3952,
        "term": "sleeper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3953,
        "term": "sleigh",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3954,
        "term": "sleight",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3955,
        "term": "slew",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3956,
        "term": "slick",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3957,
        "term": "slight",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3958,
        "term": "slink",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3959,
        "term": "slipshod",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3960,
        "term": "slither",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3961,
        "term": "sloth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3962,
        "term": "slough",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3963,
        "term": "slovenly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3964,
        "term": "sluggard",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3965,
        "term": "sluggish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3966,
        "term": "sluice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3967,
        "term": "slur",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3968,
        "term": "sly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3969,
        "term": "smart",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3970,
        "term": "smattering",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3971,
        "term": "smear",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3972,
        "term": "smelt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3973,
        "term": "smirk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3974,
        "term": "smolder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3975,
        "term": "smother",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3976,
        "term": "smudge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3977,
        "term": "smug",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3978,
        "term": "sneak",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3979,
        "term": "snicker",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3980,
        "term": "snip",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3981,
        "term": "snivel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3982,
        "term": "snub",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3983,
        "term": "snuffle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3984,
        "term": "soar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3985,
        "term": "sober",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3986,
        "term": "sobriety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3987,
        "term": "sodden",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3988,
        "term": "sojourn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3989,
        "term": "solace",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3990,
        "term": "solder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3991,
        "term": "solecism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3992,
        "term": "solemnity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3993,
        "term": "solicit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3994,
        "term": "solicitor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3995,
        "term": "solicitous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3996,
        "term": "soliloquy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3997,
        "term": "solitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3998,
        "term": "solstice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 3999,
        "term": "soluble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4000,
        "term": "solvent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4001,
        "term": "somatic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4002,
        "term": "somber",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4003,
        "term": "somnolent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4004,
        "term": "sonic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4005,
        "term": "sonnet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4006,
        "term": "sonorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4007,
        "term": "soothsayer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4008,
        "term": "sophist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4009,
        "term": "sophisticated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4010,
        "term": "sophistry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4011,
        "term": "sophomoric",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4012,
        "term": "soporific",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4013,
        "term": "sordid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4014,
        "term": "sound",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4015,
        "term": "sour",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4016,
        "term": "sovereign",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4017,
        "term": "sovereignty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4018,
        "term": "sow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4019,
        "term": "spangle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4020,
        "term": "spare",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4021,
        "term": "sparse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4022,
        "term": "Spartan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4023,
        "term": "spasmodic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4024,
        "term": "spat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4025,
        "term": "spate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4026,
        "term": "spatial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4027,
        "term": "spatula",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4028,
        "term": "spawn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4029,
        "term": "specious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4030,
        "term": "speck",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4031,
        "term": "spectral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4032,
        "term": "spectrum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4033,
        "term": "speechless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4034,
        "term": "spendthrift",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4035,
        "term": "spin",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4036,
        "term": "splice",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4037,
        "term": "spoilsport",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4038,
        "term": "spontaneity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4039,
        "term": "spoof",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4040,
        "term": "spoonerism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4041,
        "term": "sporadic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4042,
        "term": "sportive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4043,
        "term": "sprout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4044,
        "term": "spruce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4045,
        "term": "spry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4046,
        "term": "spurious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4047,
        "term": "spurn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4048,
        "term": "squabble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4049,
        "term": "squalor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4050,
        "term": "squander",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4051,
        "term": "squash",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4052,
        "term": "squat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4053,
        "term": "squeamish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4054,
        "term": "squelch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4055,
        "term": "staccato",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4056,
        "term": "stagnant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4057,
        "term": "staid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4058,
        "term": "stalemate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4059,
        "term": "stalwart",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4060,
        "term": "stamina",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4061,
        "term": "stammer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4062,
        "term": "stamp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4063,
        "term": "stampede",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4064,
        "term": "stanch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4065,
        "term": "standstill",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4066,
        "term": "stanza",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4067,
        "term": "start",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4068,
        "term": "stately",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4069,
        "term": "static",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4070,
        "term": "statute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4071,
        "term": "statutory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4072,
        "term": "steadfast",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4073,
        "term": "stealth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4074,
        "term": "steep",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4075,
        "term": "stellar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4076,
        "term": "stem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4077,
        "term": "stench",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4078,
        "term": "stentorian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4079,
        "term": "stereotype",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4080,
        "term": "sterile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4081,
        "term": "stickler",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4082,
        "term": "stifle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4083,
        "term": "stigma",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4084,
        "term": "stilted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4085,
        "term": "stink",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4086,
        "term": "stint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4087,
        "term": "stipend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4088,
        "term": "stipple",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4089,
        "term": "stipulate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4090,
        "term": "stock",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4091,
        "term": "stockade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4092,
        "term": "stodgy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4093,
        "term": "stoic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4094,
        "term": "stoke",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4095,
        "term": "stolid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4096,
        "term": "stoop",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4097,
        "term": "stout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4098,
        "term": "straggle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4099,
        "term": "strangle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4100,
        "term": "stratagem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4101,
        "term": "stratified",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4102,
        "term": "stratum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4103,
        "term": "strew",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4104,
        "term": "striated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4105,
        "term": "stricture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4106,
        "term": "strident",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4107,
        "term": "stringent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4108,
        "term": "strut",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4109,
        "term": "studied",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4110,
        "term": "studious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4111,
        "term": "stultify",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4112,
        "term": "stumble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4113,
        "term": "stump",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4114,
        "term": "stun",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4115,
        "term": "stupefy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4116,
        "term": "stupor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4117,
        "term": "sturdy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4118,
        "term": "stygian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4119,
        "term": "stymie",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4120,
        "term": "suavity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4121,
        "term": "subaltern",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4122,
        "term": "subdue",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4123,
        "term": "subjective",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4124,
        "term": "subjugate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4125,
        "term": "sublimate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4126,
        "term": "sublime",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4127,
        "term": "subliminal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4128,
        "term": "submerge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4129,
        "term": "submissive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4130,
        "term": "subordinate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4131,
        "term": "suborn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4132,
        "term": "subpoena",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4133,
        "term": "subsequent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4134,
        "term": "subservient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4135,
        "term": "subside",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4136,
        "term": "subsidiary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4137,
        "term": "subsidy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4138,
        "term": "subsistence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4139,
        "term": "substantial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4140,
        "term": "substantiate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4141,
        "term": "substantive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4142,
        "term": "subsume",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4143,
        "term": "subterfuge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4144,
        "term": "subtlety",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4145,
        "term": "subversive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4146,
        "term": "succor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4147,
        "term": "succulent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4148,
        "term": "succumb",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4149,
        "term": "suckle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4150,
        "term": "suffocate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4151,
        "term": "suffragist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4152,
        "term": "suffuse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4153,
        "term": "suitor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4154,
        "term": "sullen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4155,
        "term": "sully",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4156,
        "term": "sultry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4157,
        "term": "summation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4158,
        "term": "sumptuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4159,
        "term": "sunder",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4160,
        "term": "sundry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4161,
        "term": "superannuated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4162,
        "term": "supercilious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4163,
        "term": "supererogatory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4164,
        "term": "superficial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4165,
        "term": "superfluous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4166,
        "term": "superimpose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4167,
        "term": "supernumerary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4168,
        "term": "supersede",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4169,
        "term": "supine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4170,
        "term": "supplant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4171,
        "term": "supple",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4172,
        "term": "suppliant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4173,
        "term": "supplicant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4174,
        "term": "supplicate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4175,
        "term": "supposition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4176,
        "term": "supposititious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4177,
        "term": "suppress",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4178,
        "term": "surfeit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4179,
        "term": "surge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4180,
        "term": "surly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4181,
        "term": "surmise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4182,
        "term": "surmount",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4183,
        "term": "surpass",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4184,
        "term": "surreptitious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4185,
        "term": "surrogate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4186,
        "term": "surveillance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4187,
        "term": "susceptible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4188,
        "term": "suspend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4189,
        "term": "suspense",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4190,
        "term": "sustain",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4191,
        "term": "sustenance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4192,
        "term": "suture",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4193,
        "term": "swagger",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4194,
        "term": "swamp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4195,
        "term": "swarm",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4196,
        "term": "swarthy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4197,
        "term": "swathe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4198,
        "term": "sway",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4199,
        "term": "swear",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4200,
        "term": "swell",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4201,
        "term": "swelter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4202,
        "term": "swerve",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4203,
        "term": "swill",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4204,
        "term": "swindler",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4205,
        "term": "swipe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4206,
        "term": "sybarite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4207,
        "term": "sycophant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4208,
        "term": "syllogism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4209,
        "term": "sylvan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4210,
        "term": "symbiosis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4211,
        "term": "symmetry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4212,
        "term": "synoptic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4213,
        "term": "synthetic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4214,
        "term": "tablet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4215,
        "term": "tacit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4216,
        "term": "taciturn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4217,
        "term": "tact",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4218,
        "term": "tactful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4219,
        "term": "tactile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4220,
        "term": "taint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4221,
        "term": "takeoff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4222,
        "term": "talisman",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4223,
        "term": "talon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4224,
        "term": "tan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4225,
        "term": "tangential",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4226,
        "term": "tangible",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4227,
        "term": "tanner",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4228,
        "term": "tantalize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4229,
        "term": "tantamount",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4230,
        "term": "tantrum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4231,
        "term": "taper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4232,
        "term": "tarantula",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4233,
        "term": "tardy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4234,
        "term": "tarnish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4235,
        "term": "tarry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4236,
        "term": "tart",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4237,
        "term": "tatter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4238,
        "term": "taunt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4239,
        "term": "taut",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4240,
        "term": "tautological",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4241,
        "term": "tawdry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4242,
        "term": "tawny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4243,
        "term": "taxonomist",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4244,
        "term": "tedium",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4245,
        "term": "teetotalism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4246,
        "term": "temerity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4247,
        "term": "temper",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4248,
        "term": "temperament",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4249,
        "term": "temperate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4250,
        "term": "tempestuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4251,
        "term": "tempo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4252,
        "term": "temporal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4253,
        "term": "temporize",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4254,
        "term": "tenacious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4255,
        "term": "tenacity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4256,
        "term": "tenancy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4257,
        "term": "tenant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4258,
        "term": "tend",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4259,
        "term": "tendentious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4260,
        "term": "tender",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4261,
        "term": "tenet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4262,
        "term": "tensile",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4263,
        "term": "tension",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4264,
        "term": "tentative",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4265,
        "term": "tenuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4266,
        "term": "tenure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4267,
        "term": "tepid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4268,
        "term": "terminal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4269,
        "term": "termination",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4270,
        "term": "terminology",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4271,
        "term": "terminus",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4272,
        "term": "terrestrial",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4273,
        "term": "terse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4274,
        "term": "tertiary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4275,
        "term": "tessellated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4276,
        "term": "testator",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4277,
        "term": "testy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4278,
        "term": "tether",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4279,
        "term": "thematic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4280,
        "term": "theocracy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4281,
        "term": "theoretical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4282,
        "term": "therapeutic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4283,
        "term": "thermal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4284,
        "term": "thesis",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4285,
        "term": "thespian",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4286,
        "term": "thrall",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4287,
        "term": "thrash",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4288,
        "term": "threadbare",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4289,
        "term": "threat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4290,
        "term": "thresh",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4291,
        "term": "thrifty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4292,
        "term": "thrive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4293,
        "term": "throb",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4294,
        "term": "throes",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4295,
        "term": "throng",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4296,
        "term": "throttle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4297,
        "term": "thwart",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4298,
        "term": "tickle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4299,
        "term": "tightwad",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4300,
        "term": "tiller",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4301,
        "term": "timbre",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4302,
        "term": "timidity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4303,
        "term": "timorous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4304,
        "term": "tinge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4305,
        "term": "tint",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4306,
        "term": "tipple",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4307,
        "term": "tirade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4308,
        "term": "titanic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4309,
        "term": "tithe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4310,
        "term": "titillate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4311,
        "term": "title",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4312,
        "term": "titter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4313,
        "term": "titular",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4314,
        "term": "toady",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4315,
        "term": "toga",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4316,
        "term": "token",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4317,
        "term": "toll",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4318,
        "term": "tome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4319,
        "term": "tonsure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4320,
        "term": "topography",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4321,
        "term": "topple",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4322,
        "term": "torpedo",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4323,
        "term": "torpor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4324,
        "term": "torque",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4325,
        "term": "torrent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4326,
        "term": "torrid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4327,
        "term": "torso",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4328,
        "term": "tortuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4329,
        "term": "toss",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4330,
        "term": "totem",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4331,
        "term": "totter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4332,
        "term": "touching",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4333,
        "term": "touchstone",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4334,
        "term": "touchy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4335,
        "term": "tout",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4336,
        "term": "toxic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4337,
        "term": "tract",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4338,
        "term": "tractable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4339,
        "term": "traduce",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4340,
        "term": "trajectory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4341,
        "term": "tramp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4342,
        "term": "trample",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4343,
        "term": "trance",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4344,
        "term": "tranquillity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4345,
        "term": "transcendent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4346,
        "term": "transcribe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4347,
        "term": "transgression",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4348,
        "term": "transient",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4349,
        "term": "transition",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4350,
        "term": "transitory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4351,
        "term": "translucent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4352,
        "term": "transmute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4353,
        "term": "transparent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4354,
        "term": "transpire",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4355,
        "term": "transport",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4356,
        "term": "transpose",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4357,
        "term": "trappings",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4358,
        "term": "traumatic",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4359,
        "term": "travail",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4360,
        "term": "traverse",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4361,
        "term": "travesty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4362,
        "term": "tread",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4363,
        "term": "treasure",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4364,
        "term": "treatise",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4365,
        "term": "trek",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4366,
        "term": "tremor",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4367,
        "term": "tremulous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4368,
        "term": "trenchant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4369,
        "term": "trepidation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4370,
        "term": "tribulation",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4371,
        "term": "tribunal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4372,
        "term": "tribune",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4373,
        "term": "tribute",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4374,
        "term": "trickle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4375,
        "term": "trickster",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4376,
        "term": "trident",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4377,
        "term": "trifle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4378,
        "term": "trifling",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4379,
        "term": "trigger",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4380,
        "term": "trilogy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4381,
        "term": "trim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4382,
        "term": "trinket",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4383,
        "term": "trite",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4384,
        "term": "trivia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4385,
        "term": "troth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4386,
        "term": "trough",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4387,
        "term": "truculence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4388,
        "term": "truism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4389,
        "term": "truncate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4390,
        "term": "trunk",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4391,
        "term": "tryst",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4392,
        "term": "tumid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4393,
        "term": "tumult",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4394,
        "term": "tundra",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4395,
        "term": "turbid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4396,
        "term": "turbulence",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4397,
        "term": "tureen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4398,
        "term": "turgid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4399,
        "term": "turmoil",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4400,
        "term": "turncoat",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4401,
        "term": "turpitude",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4402,
        "term": "tutelage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4403,
        "term": "tutelary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4404,
        "term": "tycoon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4405,
        "term": "typhoon",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4406,
        "term": "tyranny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4407,
        "term": "tyro",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4408,
        "term": "ubiquitous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4409,
        "term": "ulcer",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4410,
        "term": "ulterior",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4411,
        "term": "ultimate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4412,
        "term": "ultimatum",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4413,
        "term": "umbrage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4414,
        "term": "unaccountable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4415,
        "term": "unanimity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4416,
        "term": "unassailable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4417,
        "term": "unassuaged",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4418,
        "term": "unbridled",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4419,
        "term": "uncanny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4420,
        "term": "unconscionable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4421,
        "term": "uncouth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4422,
        "term": "unction",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4423,
        "term": "unctuous",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4424,
        "term": "underlying",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4425,
        "term": "undermine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4426,
        "term": "underscore",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4427,
        "term": "understate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4428,
        "term": "undertaker",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4429,
        "term": "undulating",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4430,
        "term": "unearth",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4431,
        "term": "unearthly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4432,
        "term": "unequivocal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4433,
        "term": "unerringly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4434,
        "term": "unexceptionable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4435,
        "term": "unfaltering",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4436,
        "term": "unfeigned",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4437,
        "term": "unfetter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4438,
        "term": "unfledged",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4439,
        "term": "unfrock",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4440,
        "term": "ungainly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4441,
        "term": "unguent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4442,
        "term": "uniformity",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4443,
        "term": "unilateral",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4444,
        "term": "unimpeachable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4445,
        "term": "uninhibited",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4446,
        "term": "unintimating",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4447,
        "term": "unique",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4448,
        "term": "unison",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4449,
        "term": "universal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4450,
        "term": "unkempt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4451,
        "term": "unmitigated",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4452,
        "term": "unobtrusive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4453,
        "term": "unprecedented",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4454,
        "term": "unravel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4455,
        "term": "unregenerate",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4456,
        "term": "unrequited",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4457,
        "term": "unruly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4458,
        "term": "unsavory",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4459,
        "term": "unscathed",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4460,
        "term": "unseemly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4461,
        "term": "unsightly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4462,
        "term": "unsullied",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4463,
        "term": "untenable",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4464,
        "term": "untoward",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4465,
        "term": "unwarranted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4466,
        "term": "unwieldy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4467,
        "term": "unwitting",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4468,
        "term": "unwonted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4469,
        "term": "upbraid",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4470,
        "term": "upright",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4471,
        "term": "uproar",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4472,
        "term": "uproarious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4473,
        "term": "upshot",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4474,
        "term": "urbane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4475,
        "term": "urchin",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4476,
        "term": "urge",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4477,
        "term": "urgent",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4478,
        "term": "ursine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4479,
        "term": "usage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4480,
        "term": "usurp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4481,
        "term": "usury",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4482,
        "term": "utopia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4483,
        "term": "uxorious",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4484,
        "term": "wade",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4485,
        "term": "waffle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4486,
        "term": "waft",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4487,
        "term": "wag",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4488,
        "term": "wage",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4489,
        "term": "waggish",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4490,
        "term": "waif",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4491,
        "term": "waive",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4492,
        "term": "wake",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4493,
        "term": "wallow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4494,
        "term": "wan",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4495,
        "term": "wanderlust",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4496,
        "term": "wane",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4497,
        "term": "wangle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4498,
        "term": "wanton",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4499,
        "term": "warble",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4500,
        "term": "ward",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4501,
        "term": "warp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4502,
        "term": "warrant",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4503,
        "term": "warranted",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4504,
        "term": "warranty",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4505,
        "term": "warren",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4506,
        "term": "wary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4507,
        "term": "wastrel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4508,
        "term": "waver",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4509,
        "term": "wax",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4510,
        "term": "waylay",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4511,
        "term": "wean",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4512,
        "term": "weary",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4513,
        "term": "weather",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4514,
        "term": "weird",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4515,
        "term": "welt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4516,
        "term": "welter",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4517,
        "term": "wheedle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4518,
        "term": "whelp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4519,
        "term": "whet",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4520,
        "term": "whiff",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4521,
        "term": "whim",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4522,
        "term": "whimsical",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4523,
        "term": "whimsy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4524,
        "term": "whine",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4525,
        "term": "whinny",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4526,
        "term": "whit",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4527,
        "term": "whittle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4528,
        "term": "wholesome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4529,
        "term": "whorl",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4530,
        "term": "wiggle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4531,
        "term": "willful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4532,
        "term": "willowy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4533,
        "term": "wilt",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4534,
        "term": "wily",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4535,
        "term": "wince",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4536,
        "term": "windfall",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4537,
        "term": "winnow",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4538,
        "term": "winsome",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4539,
        "term": "wisp",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4540,
        "term": "wispy",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4541,
        "term": "wistful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4542,
        "term": "withdrawn",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4543,
        "term": "wither",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4544,
        "term": "withhold",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4545,
        "term": "withstand",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4546,
        "term": "witless",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4547,
        "term": "witticism",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4548,
        "term": "wizardry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4549,
        "term": "wizened",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4550,
        "term": "woe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4551,
        "term": "woeful",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4552,
        "term": "wont",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4553,
        "term": "worldly",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4554,
        "term": "wrangle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4555,
        "term": "wrath",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4556,
        "term": "wreak",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4557,
        "term": "wrench",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4558,
        "term": "wrest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4559,
        "term": "wretch",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4560,
        "term": "wring",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4561,
        "term": "wrinkle",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4562,
        "term": "writ",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4563,
        "term": "writhe",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4564,
        "term": "wry",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4565,
        "term": "xenophobia",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4566,
        "term": "yen",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4567,
        "term": "yield",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4568,
        "term": "yoke",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4569,
        "term": "yokel",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4570,
        "term": "yore",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4571,
        "term": "zany",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4572,
        "term": "zeal",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4573,
        "term": "zealot",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4574,
        "term": "zenith",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      },
      {
        "id": 4575,
        "term": "zest",
        "picture": "",
        "meaning": "",
        "mnemonic": ""
      }
    ]);
  }

  getWord(id: number): Word | undefined {
    return this.words.find(word => word.id === id);
  }
}