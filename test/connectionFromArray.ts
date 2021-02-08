export const connectionFromArray = <T extends object>(arr: T[] = []) => {
  if (!arr || arr.length === 0) {
    return {
      edges: [],
      totalCount: 0,
      count: 0,
      endCursorOffset: 0,
      startCursorOffset: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    };
  }

  return {
    edges: arr.map((node) => ({ node })),
    totalCount: arr.length,
    count: arr.length,
    endCursorOffset: arr.length,
    startCursorOffset: 0,
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
  };
};
