type Query = {
  filter?: {
    [key: string]: { [key: string]: string | number };
  };
  sort?: {
    [key: string]: string;
  };
  include?: {
    [key: string]: {
      select: {
        [key: string]: boolean;
      };
    };
  };
};

export const restApiFeatures = (query?: Query) => {
  let queryObj;
  let queryStr = JSON.stringify(query);
  queryStr = queryStr.replace(/=/g, '');
  let reqQuery = JSON.parse(queryStr);

  if (JSON.stringify(query) !== '{}') {
    queryObj = {
      ...reqQuery.filter,
      ...reqQuery.sort,
    };
  } else {
    queryObj = {
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: {
          select: {
            id: true,
            username: true,
            profile: true,
          },
        },
        likedBy: {
          select: {
            id: true,
          },
        },
        savedBy: {
          select: {
            id: true,
          },
        },
      },
    };
  }

  return queryObj;
};
