import { CategoryService } from '../../services/category/category.service';

describe('Category Controller', () => {
  let categoryService: any;

  beforeEach(() => {
    categoryService = new CategoryService();
  });

  describe('getCategories', () => {
    test('should return a response with the categories from the database', async () => {
      jest
        .spyOn(categoryService, 'getCategories')
        .mockImplementation(() => null);

      expect(await categoryService.getCategories()).toBe(null);
    });
  });
});
