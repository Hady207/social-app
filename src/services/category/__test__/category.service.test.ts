import DBClient, { IDBClient } from '../../../models/prismaClient';

const resultArr = [
  {
    id: 'b5952809-98ad-457f-9150-d6c5ce387349',
    translationId: '9eb7a477-9fbf-481a-95ab-e163a39f4682',
    createdAt: '2022-09-07T19:12:45.188Z',
    updatedAt: null,
    name: {
      id: '9eb7a477-9fbf-481a-95ab-e163a39f4682',
      text_en: 'gaming',
      text_ar: 'جامنج',
      createdAt: '2022-09-07T19:12:45.188Z',
      updatedAt: null,
    },
  },
];

const result = {
  id: 'b5952809-98ad-457f-9150-d6c5ce387349',
  translationId: '9eb7a477-9fbf-481a-95ab-e163a39f4682',
  createdAt: '2022-09-07T19:12:45.188Z',
  updatedAt: null,
  name: {
    id: '9eb7a477-9fbf-481a-95ab-e163a39f4682',
    text_en: 'gaming',
    text_ar: 'جامنج',
    createdAt: '2022-09-07T19:12:45.188Z',
    updatedAt: null,
  },
};

describe('Category Service', () => {
  let categoryModal: any;

  beforeEach(() => {
    categoryModal = DBClient.instance.category;
  });

  describe('getCategories', () => {
    test('should return an array of categories from the database', async () => {
      jest.spyOn(categoryModal, 'findMany').mockImplementation(() => resultArr);

      expect(
        await categoryModal.findMany({
          include: {
            name: true,
          },
        }),
      ).toBe(resultArr);
    });
  });

  describe('getCategory', () => {
    test('should return a category from the database', async () => {
      jest.spyOn(categoryModal, 'findUnique').mockImplementation(() => result);

      expect(
        await categoryModal.findUnique({
          where: {
            id: 'b5952809-98ad-457f-9150-d6c5ce387349',
          },
        }),
      ).toBe(result);
    });
  });

  describe('createCategory', () => {
    test('create a category using the database', async () => {
      jest.spyOn(categoryModal, 'create').mockImplementation(() => result);

      expect(
        await categoryModal.create({
          data: {
            name: {
              create: {
                text_en: 'gaming',
                text_ar: 'جامنج',
              },
            },
          },
        }),
      ).toBe(result);
    });
  });

  describe('updateCategory', () => {
    test('update a category using the database', async () => {
      jest.spyOn(categoryModal, 'update').mockResolvedValue(result);

      expect(
        await categoryModal.update({
          where: { id: 'b5952809-98ad-457f-9150-d6c5ce387349' },
          data: {
            name: {
              create: {
                text_en: 'gaming',
                text_ar: 'جامنج',
              },
            },
          },
        }),
      ).toBe(result);
    });
  });

  describe('deleteCategories', () => {
    test('delete all categories', async () => {
      jest.spyOn(categoryModal, 'deleteMany').mockImplementation(() => null);

      expect(await categoryModal.deleteMany()).toBeNull();
    });
  });
});
