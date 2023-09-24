/* Необходимо реализовать функцию fetchUrl, которая будет использоваться следующим образом.
Внутри fetchUrl можно использовать условный метод fetch, который просто возвращает
Promise с содержимым страницы или вызывает reject */
function fetchUrl(url, attempt = 1) {
  return Promise.resolve()
    .then(() => fetch(url).then(res => res.json()))
    .catch(() => {
      if (attempt <= 5) {
        console.log(`Chance №${attempt++}`)
        return fetchUrl(url, attempt)
      }
      else{
        console.log('%cЯ попробовал 5 раз... Не получилось, sorry', `color: #ff0000`)
        return Promise.reject('Я попробовал 5 раз... Не получилось, sorry')
      }
    })
}

fetchUrl('https://google/com&#39')
  .then( res => console.log('res', res))
  .catch(err => console.log(`%cError ${err}`, `color: #ff0000`))