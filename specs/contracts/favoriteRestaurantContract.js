/* eslint-disable no-undef */
// const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
//   it('should return the movie that has been added', async () => {
//     favoriteRestaurant.putRestaurant({ id: 1 });
//     favoriteRestaurant.putRestaurant({ id: 2 });

//     expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
//     expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
//     expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
//   });

// eslint-disable-next-line max-len
//   it('should refuse a restaurant from being added if it does not have the correct property', async () => {
//     favoriteRestaurant.putRestaurant({ aProperty: 'property' });

//     expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
//   });

//   it('can return all of the restaurants that have been added', async () => {
//     favoriteRestaurant.putRestaurant({ id: 1 });
//     favoriteRestaurant.putRestaurant({ id: 2 });

//     expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
//   });

//   it('should remove favorite restaurant', async () => {
//     favoriteRestaurant.putRestaurant({ id: 1 });
//     favoriteRestaurant.putRestaurant({ id: 2 });
//     favoriteRestaurant.putRestaurant({ id: 3 });

//     await favoriteRestaurant.deleteRestaurant(1);

//     expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
//   });

// eslint-disable-next-line max-len
//   it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
//     favoriteRestaurant.putRestaurant({ id: 1 });
//     favoriteRestaurant.putRestaurant({ id: 2 });
//     favoriteRestaurant.putRestaurant({ id: 3 });

//     await favoriteRestaurant.deleteRestaurant(4);

// eslint-disable-next-line max-len
//     expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
//   });
// };

// // eslint-disable-next-line import/prefer-default-export
// export { itActsAsFavoriteRestaurantModel };

const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(4);

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });

  // it('should be able to search for restaurants', async () => {
  //   favoriteRestaurant.putRestaurant({ id: 1, title: 'resto a' });
  //   favoriteRestaurant.putRestaurant({ id: 2, title: 'resto b' });
  //   favoriteRestaurant.putRestaurant({ id: 3, title: 'resto abc' });
  //   favoriteRestaurant.putRestaurant({ id: 4, title: 'ini mah resto abcd' });

  //   expect(await favoriteRestaurant.searchRestaurants('resto a')).toEqual([
  //     { id: 1, title: 'resto a' },
  //     { id: 3, title: 'resto abc' },
  //     { id: 4, title: 'ini mah resto abcd' },
  //   ]);
  // });
};

// eslint-disable-next-line import/prefer-default-export
export { itActsAsFavoriteRestaurantModel };
