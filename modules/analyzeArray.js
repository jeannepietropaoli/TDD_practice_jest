export const analyzeArray = (array) => {
    const average = () => {
        return array.reduce((previous, current) => {
            return previous + current;
        }, 0)/(array.length)
    }
    const min = () => {
        return array.reduce((previous, current) => {
            return (previous < current) ? previous : current;
        })
    }
    const max = () => {
        return array.reduce((previous, current) => {
            return (previous > current) ? previous : current;
        })
    }
    const length = array.length;
    return {
      average : average(),
      min : min(),
      max : max(),
      length
    };
  }