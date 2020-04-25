import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env';

@Pipe({
  name: 'pfile'
})
export class PfilePipe implements PipeTransform {

  transform(fileName: string, type: string): string {
    switch (type) {
      case 'image/profile': return `${environment.publicUrl}/image/profile/${fileName}`;
      default: throw new Error(`Invalid type specified: ${type}`);
    }
  }

}
