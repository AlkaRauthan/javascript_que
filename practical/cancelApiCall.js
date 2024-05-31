The fetch API is a JavaScript API for making HTTP requests. 
  It is a replacement for XMLHttpRequest, which is deprecated in most browsers. 
  It is a promise-based API, meaning that it returns a Promise object that is resolved or rejected when the request is complete.

Let's take a look at the fetch() function.
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

This is great but sometimes we want to cancel the already initiated request.
Let's take a look at the following example.
Suppose we have search input we want to show the suggestions as the user types. when the user types a character, 
  we call the fetch() function and pass the value of the search input field as the URL parameter.

Problem:
The fetch() function is called every time the user types a character, 
This is an inefficient approach as it is called multiple times and we are only interested in the last response.

Solution:
Use debounce() function to limit the number of times the fetch() function is called. 
It will only be called after the user has stopped typing for a certain period (100ms). 
This is a good practice to avoid unnecessary calls to the API.
Edge case: What if the user starts typing just after debounce() has been called. In that case,
  the fetch() function will be called again. It's better than the previous approach.

How can we handle this?
This is where AbortController comes in handy. We can use AbortController to cancel the already initiated request(using fetch).
The modern browsers come with a built-in AbortController interface.

You can create a new AbortController object using the AbortController() constructor.

Properties:
AbortController.signal:
Returns an AbortSignal object instance, which can be used to communicate with, or to abort, a DOM request.

Method:
AbortController.abort():
Aborts a DOM request before it has been completed. When we abort an async operation, the promise rejects with a DOMException named AbortError.

A real-world example

<!DOCTYPE html>
<html>
  <body>
    <input id="search" type="number" />
    <script>
      const results = [];
      const search = document.getElementById("search");
      let controller = new AbortController();
      let signal = controller.signal;

      const getPost = async (value, signal) => {
        try {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${value}`,
            { signal }
          );
          results.push(`Success: ${value}`);
        } catch (error) {
          if (error.name === "AbortError") {
            results.push("API failure");
          } else {
            console.log("Some other error");
          }
        } finally {
          console.log("Status", results);
        }
      };
      const onChange = () => {
        const value = search.value;
        if (value) {
          controller.abort();
          controller = new AbortController();
          signal = controller.signal;
          getPost(value, signal);
        }
      };
      search.onkeyup = onChange;
    </script>
  </body>
</html>
