# transition
```
<div x-data="{ open: false }">
    <button class="bg-blue-700 rounded-md px-3 py-2 text-white mb-4" @click="open = ! open">Toggle</button>
 
    <div class="w-80 h-80 bg-blue-500" x-show="open" 
    x-transition 
    x-transition:enter.duration.1000ms
    x-transition:leave.duration.2000ms
    x-transition.scale.10
    
    >
        
    </div>
</div>
```
## transition
```
x-transition.delay.1000ms 
x-transition:enter.scale.10
x-transition:leave.scale.10
x-transition.scale.origin.left
```
