## modal
```
<body class="mx-8">
    <h1 class="text-3xl font-bold text-gray-600 mb-4">modal</h1>
    <h1 class="text-3xl font-bold text-gray-600 mb-4">x-ref</h1>
    <section x-data="">
        <button @click="$refs.text.remove()">Remove Text</button>

        <span x-ref="text">Hello 👋</span>
    </section>

    <hr class="my-8"/>

    <section x-data="{limitChar:100}">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea x-ref="message" id="message" rows="4" @keyup="limitChar = 100 - $refs.message.value.length"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."></textarea>
        <span class="text-sm" x-text="limitChar  +' character'"></span>    
    </section>

    
</body>

```
