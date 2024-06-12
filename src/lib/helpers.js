export function wait(ms){
    const start = new Date().getTime();
    let end = start;
    while (end < start + ms) {
      end = new Date().getTime();
    }
  }


  export function countPages(totalCount, perPage){
    return Math.ceil(totalCount / (perPage || 99999999999))
  }