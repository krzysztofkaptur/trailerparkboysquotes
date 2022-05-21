import { Injectable } from '@nestjs/common';

import generateRandomNumber from './utils/generateRandomNumber';

const quotes = [
  'Worst case Ontario.',
  'Save me some of those sweet empowered chicken things.',
  'Beauty is in the eye when you hold her.',
  "Don't judge a cover of a book by its look.",
  'For the Gooder of Us All.',
  'Good things come to those at the gate.',
  "Hit 'em with everything we caught.",
];

@Injectable()
export class AppService {
  getRandom(): string {
    const index = generateRandomNumber(0, quotes.length);

    return quotes[index];
  }
}
