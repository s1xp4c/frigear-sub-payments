
// Utils function to get the billing interval as a string
export const translateInterval = (interval: string, count: number) => {
    switch (interval) {
      case 'month':
        if (count === 1) return 'ÅRLIG';
        if (count === 3) return 'KVARTAL';
        break;
      case 'year':
        return 'MÅNED';
      default:
        return 'SUPPORT';
    }
  }
  
