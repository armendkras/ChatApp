export const IsSenderSame = (previus: number, current: number) => {
    return previus === current;
  };

  export const IsNextUser = (previus: number, current: number) => {
    return previus !== current;
  };
