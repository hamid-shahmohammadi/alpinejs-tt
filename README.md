# alpinejs
## x-model
```
<h1 class="text-3xl font-bold text-gray-600 mb-4">x-model</h1>
<div x-data="{
    myInput:'something',
    isDisabled:false,
    myStyle:'color:red',
    myClass:'bg-blue-400 p-4 text-white w-1/2 mx mx-auto text-center',
    color:'red'
}">
<input x-model="myInput" class="p-1 rounded shadow border border-1" x-bind:value="myInput" /><br>
<input @keyup="console.log($event.target.value)" class="p-1 rounded shadow border border-1" :value="myInput" /><br>
<div x-text="myInput"></div>
<div :style="myStyle">my style</div><br>
<div :class="myClass+' text-3xl font-bold'">my class</div>
<div :class="'bg-' + color + '-500 w-8 h-8 text-center mx-auto mt-10 mb-3'"></div>
<select x-model="color">
    <option>blue</option>
    <option>red</option>
    <option>green</option>
</select>
</div>
```
