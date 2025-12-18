import { RatingRandom } from "./utils.js"; 

window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const myParams = urlParams.get("productid");
  console.log("myParams", myParams);
  getProduct(myParams);
};

const getProduct = (myParams) => {
  const promise = axios({
    method: "GET",
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${myParams}`,
  });
  promise
    .then((result) => {
      console.log(result.data.content);
      console.log(result.data.content.relatedProducts);
      renderproduct(result.data.content);
      renderRelatedProduct(result.data.content.relatedProducts);
    })
    .catch((err) => {
      console.log(err);
    });
};

const renderproduct = (product) => {
  let content = `
  <div class="content_left">
        <img
          src=${product.image}
          alt=""
        />
      </div>
      <div class="content_right space-y-4">
        <h3 class="font-bold text-3xl uppercase">${product.name}</h3>
        <p class="sold_info text-orange-600 text-xl">23 Items sold in last 13 hours</p>
        <p class="short_description text-sm">
          ${product.description}
        </p>
        <p class="price text-xl">${product.price} $</p>
        <div class="shoes_size">
          <h4 class="text-2xl">Available Size</h4>
          <ul
            class="items-center w-full text-sm font-medium text-heading bg-neutral-primary-soft border border-default rounded-lg sm:flex"
          >
            <li
              class="w-full border-b border-default sm:border-b-0 sm:border-r"
            >
              <div class="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-license"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                />
                <label
                  for="horizontal-list-radio-license"
                  class="w-full py-3 select-none ms-2 text-sm font-medium text-heading"
                  >32
                </label>
              </div>
            </li>
            <li
              class="w-full border-b border-default sm:border-b-0 sm:border-r"
            >
              <div class="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-id"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                />
                <label
                  for="horizontal-list-radio-id"
                  class="w-full py-3 select-none ms-2 text-sm font-medium text-heading"
                  >33</label
                >
              </div>
            </li>
            <li
              class="w-full border-b border-default sm:border-b-0 sm:border-r"
            >
              <div class="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-military"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                />
                <label
                  for="horizontal-list-radio-military"
                  class="w-full py-3 select-none ms-2 text-sm font-medium text-heading"
                  >34</label
                >
              </div>
            </li>
            <li class="w-full">
              <div class="flex items-center ps-3">
                <input
                  id="horizontal-list-radio-passport"
                  type="radio"
                  value=""
                  name="list-radio"
                  class="w-4 h-4 text-neutral-primary border-default-medium bg-neutral-secondary-medium rounded-full checked:border-brand focus:ring-2 focus:outline-none focus:ring-brand-subtle border border-default appearance-none"
                />
                <label
                  for="horizontal-list-radio-passport"
                  class="w-full py-3 select-none ms-2 text-sm font-medium text-heading"
                  >35</label
                >
              </div>
            </li>
          </ul>
        </div>
        <form class="">
          <label
            for="quantity-input"
            class="block mb-2.5 text-sm font-medium text-heading text-xl"
            >Choose quantity:</label
          >
          <div
            class="relative flex items-center max-w-[9rem] shadow-xs rounded-base"
          >
            <button
              type="button"
              id="decrement-button"
              data-input-counter-decrement="quantity-input"
              class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-s-base text-sm px-3 focus:outline-none h-10"
            >
              <svg
                class="w-4 h-4 text-heading"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14"
                />
              </svg>
            </button>
            <input
              type="text"
              id="quantity-input"
              data-input-counter
              aria-describedby="helper-text-explanation"
              class="border-x-0 h-10 placeholder:text-heading text-center w-full bg-neutral-secondary-medium border-default-medium py-2.5 placeholder:text-body"
              placeholder="1"
              required
            />
            <button
              type="button"
              id="increment-button"
              data-input-counter-increment="quantity-input"
              class="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary font-medium leading-5 rounded-e-base text-sm px-3 focus:outline-none h-10"
            >
              <svg
                class="w-4 h-4 text-heading"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
  `;
  document.querySelector(".product_info").innerHTML = content;
};

const renderRelatedProduct = (arr) => {
  console.log(arr);
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    const relatedProduct = arr[i]
    const rating = RatingRandom()
    content += `
              <div
          class="w-full max-w-sm bg-neutral-primary-soft p-6 border border-default rounded-base shadow-xs"
        >
          <a href="#">
            <img
              class="rounded-base mb-6"
              src=${relatedProduct.image}
              alt="product image"
            />
          </a>
          <div>
            <div class="flex items-center space-x-3 mb-6">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-5 h-5 text-fg-yellow"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-5 h-5 text-fg-yellow"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-5 h-5 text-fg-yellow"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-5 h-5 text-fg-yellow"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
                <svg
                  class="w-5 h-5 text-fg-yellow"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"
                  />
                </svg>
              </div>
              <span
                class="bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded-sm"
                >${rating}</span
              >
            </div>
            <a href="#">
              <h5 class="text-xl text-heading font-semibold tracking-tight">
                ${relatedProduct.name}
              </h5>
            </a>
            <div class="flex items-center justify-between mt-6">
              <span class="text-3xl font-extrabold text-heading">${relatedProduct.price} $</span>
              <button
                type="button"
                class="inline-flex items-center text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none"
              >
                <svg
                  class="w-4 h-4 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      `;
  }
  document.querySelector(".related_product").innerHTML = content;
};
