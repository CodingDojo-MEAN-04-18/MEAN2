import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleize',
})
export class TitleizePipe implements PipeTransform {
  static skipWords = ['of', 'the', 'a', 'an', 'on', 'in'];
  transform(value: string, args?: string[] | boolean) {
    if (typeof value !== 'string') {
      return value;
    }

    const skipWords = Array.isArray(args) ? args : TitleizePipe.skipWords;
    const processSkipwords = args !== false;

    return value.replace(/\w[^-\s]*/g, (word, index: number) => {
      console.log(word, index);
      if (processSkipwords && index && skipWords.includes(word)) {
        console.log('found word', word);
        return word.toLowerCase();
      }

      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }
}
// class variable
// TitleizePipe.skipWords

// instance of class
// const title = new TitleizePipe()

// title.transform
