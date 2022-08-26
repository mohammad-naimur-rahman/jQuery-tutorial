$(document).ready(function () {
  $.get('https://jsonplaceholder.typicode.com/todos', function (data, status) {
    let post = $()
    for (let i = 0; i < data.length; i++) {
      const el = data[i]
      post = post.add(`
      <div class="shadow shadow-md my-4 px-2 py-3 rounded">
        <p>User Id: ${el.userId}</p>
        <h5>Title: ${el.title}</h5>
      </div>
      `)
    }
    $('.get-ajax').append(post)
  })
})
