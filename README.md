# React Product Catalog

Implement the catalog with a shopping cart and favorites page according to one of the next designs:

- [Original](https://www.figma.com/file/T5ttF21UnT6RRmCQQaZc6L/Phone-catalog-(V2)-Original)
- [Original Dark](https://www.figma.com/file/BUusqCIMAWALqfBahnyIiH/Phone-catalog-(V2)-Original-Dark)
- [Rounded Blue](https://www.figma.com/file/FRxncC4lfyhs6og1L6FGEU/Phone-catalog-(V2)-Rounded-Style-2?node-id=0%3A1)
- [Rounded Purple](https://www.figma.com/file/xMK2Dy0mfBbJJSNctmOuLW/Phone-catalog-(V2)-Rounded-Style-1?node-id=0%3A1)
- [Rounded Orange](https://www.figma.com/file/7JTa0q8n3dTSAyMNaA0u8o/Phone-catalog-(V2)-Rounded-Style-3?node-id=0%3A1)

You may also implement color theme switching!

## If you work in a team

Follow the [Work in a team guideline](https://github.com/mate-academy/react_task-guideline/blob/master/team-flow.md#how-to-work-in-a-team)

## Project Setup from scratch

Follow the [Instruction](https://github.com/mate-academy/react_phone-catalog/blob/master/setup.md) to setup your project, add Eslint, Prettier, Husky and enable auto deploy.

## Data

Use the data from `/public/api` and images from `/public/img` folders. You can reorganize them the way you like.

## App

1. Put components into the `src/components` folder.
   - Each component should be a folder with `index.ts`, `ComponentName.tsx`, `ComponentName.module.scss` files.
   - Use CSS modules.
   - Keep `.module.scss` files together with their components.
2. Advanced project structure:
   - `src/modules` папка.Внутренние модули на страницу `HomePage`, `CartPage`, etc., and `shared` Папка с общим содержанием между модулями.
   - Внутри каждого модуля свой собственный `components` Папка со структурой, описанной выше.И необязательно другие файлы/папки: `hooks`, `constants`, and so on.
3. Добавьте липкий заголовок с логотипом, навигацией, фаворитами и тележкой.
4. The footer with the link to the GitHub repo and `Back to top` button.
   - Содержание должно быть ограничено той же шириной, что и содержание страницы;
   - `Back to top` button should scroll to the top smoothly;
5. Add `NotFoundPage` containing text `Page not found` for all the unknown URLs.
6. All changes the hover effects should be smooth.
7. Scale all image links by 10% on hover.
8. Реализуйте все элементы формы и значки в соответствии с набором пользовательского интерфейса.

## Home page

Implement Home page at available at `/`.

1. `<h1>Product Catalog</h1>` should be visually hidden.
2. `Picturesslider`:
- Найдите свои собственные изображения, чтобы персонализировать приложение;
- менять картинки автоматически каждые 5 секунд;
- Следующие кнопки должны показывать первое изображение после последнего;
- Черный цвет внизу должен позволить выбрать точную картину.
3.
- продукты со скидкой, начиная с самой большой абсолютной стоимости;
- `<` `и`> `кнопки должны прокручивать продукты.
4. `Shop by category` block with links to `/phones`, `/tablets`, and `/accessories`.
5. Add Brand new block using ProductsSlider with products that are the newest according to the year field.

## Product pages

Должно быть 3 отдельных страниц `/телефонов`,`/таблеток и `/аксессуаров.

1. Каждая страница загружает данные требуемого `type`.
2. Добавьте `h1` с` телефоны/планшеты/страница аксессуаров (выберите необходимый).
3. Добавить компонент `productslist`, показывающий все продукты.
4. Реализуйте `Loader ', чтобы показать его в ожидании данных с сервера.
5. В случае ошибки загрузки показать что -то пошло неправильное сообщение с кнопкой перезагрузки.
6. Если нет доступных продуктов, показывают, что сообщение пока нет телефонов/планшетов/аксессуаров (выберите необходимые).
  7. Добавьте `<SELECT>` с `NewSave`,` ALPHABOTICALY` и `Самые дешевые 'варианты для сортировки продуктов по` age`, `title' или` price '(после скидки).
- Сохраните значение сортировки в URL `? Sort = age` и примените его после перезагрузки страницы.
8. Добавьте кнопки «странификации» и элементы `на странице« Выберите элемент с параметрами `4`,` 8`, `16` и` all ».
- это должно ограничить продукты, которые вы показываете пользователю;
- Сохранить параметры странификации в URL `? Page = 2 & perpage = 8` (` page = 1` и `perpage = all` значения по умолчанию и не должны быть добавлены в URL;
- Скрыть элементы страниц, если они не имеют смысла;
-Вы можете использовать логику, объясненную в [задаче React Pagination] (https://github.com/mate-academy/react_pagination#react-pagination).

## Product details page

Create `ProductDetailsPage` available at `/product/:productId`.

1. `ProductCard` image and title should be links to the product details page.
2. Use `Loader` when fetching the product details.
3. Show the details on the page:
   - Display the available colors from colorsAvailable and the capacities from capacityAvailable as radio inputs, allowing the selection of one value from the offered options;
   - `About` section should contain just a description (without any subheaders);
   - Choose `Tech specs` you want to show.
4. Add the ability to choose a picture.
5. Implement `You may also like` block with products chosen randomly:
   - Create `getSuggestedProducts` method fetching the suggested products.
6. Add `Back` button working the same way as a Browser `Back` button.
7. Add `Breadcrumbs` at the top with:
   - A Home page link;
   - A category page link (`Phones`, `Tablets`, `Accessories`);
   - The name of the product (just a text).
8. Show `Product was not found` if there is no product with a given id on the server.

## Shopping Cart page

Create a Cart page with a list of `CartItem`s at `/cart`.
Each item should have an `id`, `quantity`, and a `product`.
Use React Context or Redux to store Items.

1. `Add to cart` button in the `ProductCard` should add a product to the `Cart`.
2. If the product is already in the `Cart` the button should say `Added to cart` and do nothing.
3. Add the ability to remove items from the `Cart` with an `x` button next to a `CartItem`.
4. Add a message `Your cart is empty` when there are no products in the `Cart`.
5. Add the ability to change the item quantity in the `Cart` with `-` and `+` buttons (it should be > 0).
6. Total amount and quantity should be calculated automatically.
7. Show the quantity at the `Cart` icon in the header.
8. Save the `Cart` to `localStorage` on each change and read it on page load.
9. `Checkout` button should show a modal dialog with the text `Checkout is not implemented yet. Do you want to clear the Cart?`:
   - Clear the Cart if the user confirms the order;
   - Keep the Cart items and close the confirmation on cancel;
   - Use the `confirm` function if you don't have a better solution.

## Favorites page

Create `Favorites` page with a `ProductsList` showing favorite products at `/favorites`.

1. Add/remove a product to favorites by pressing a heart button in the `ProductCard` element.
2. The heart should be highlighted if the product is already added to the favorites.
3. Use React Context or Redux to store the favorites.
4. Show the number of favorites at the `Favorites` icon in the header.
5. Save favorites to `localStorage` on each change and load them on page load.

## Other tasks

1. Add `NotFoundPage` containing text `Page not found` for all the other URLs with the link to `HomePage`.
2. Implement the `Product was not found` state for the `ProductDetailsPage`.

## (*) Advanced tasks

- Implement color theme switching!
- Use [skeletons](https://freefrontend.com/css-skeleton-loadings/) to make loading more natural.
- Add the ability to change page language.

### Search

Show `input:search` in the header when a page contains a `ProductList` to search in.

1. Save the `Search` value in the URL as a `?query=value` to apply on page load.
2. Show `There are no phones/tablets/accessories/products matching the query` instead of `ProductList` when needed.
3. Add `debounce` to the search field.
