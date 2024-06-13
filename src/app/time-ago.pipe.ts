import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(value: string): string {
    const publishedAt = new Date(value);
    const currentTime = new Date();

    const diffMs = currentTime.getTime() - publishedAt.getTime();
    const diffHours = Math.floor(diffMs / 1000 / 3600);

    return `${diffHours} საათის წინ`;
  }
}
