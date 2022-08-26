$(document).ready(function () {
  $.get('https://jsonplaceholder.typicode.com/todos', function (data, status) {
    let post = $()
    data.forEach(function (el) {
      post = post.add(`
      <div class="shadow shadow-md my-4 px-2 py-3 rounded">
        <p>Id: ${el.id}</p>
        <h5>Title: ${el.title}</h5>
      </div>
      `)
    })
    $('.get-ajax').append(post)
  })
})
