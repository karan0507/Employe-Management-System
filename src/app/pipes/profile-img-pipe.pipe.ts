import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profileImgPipe'
})
export class ProfileImgPipe implements PipeTransform {

  transform(value: any): string {
    console.log(value);
    
    return null;
  }

}
