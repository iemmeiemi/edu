export const filter = (callback, page, pageSize) => {
  const filtered = callback;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    data: filtered.slice(start, end),
    total: filtered.length,
    page,
    pageSize,
  };
};

export const getAll = (callback, page, pageSize) => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return {
        data: callback.slice(start, end),
        total: callback.length,
        page,
        pageSize,
    };
};