# alpinejs
## vs extention
```
live server
alpine.js
```
## tab
```
<body class="mx-8">
    <h1 class="text-3xl font-bold text-gray-600 mb-4">tab</h1>
    <section x-data="{tab: 1,
        tabClass:'px-5 py-3 rounded-xl rounded-b cursor-pointer ',
        tabHi:'bg-gray-400',
        tabNormal:'bg-gray-200 hover:bg-gray-300'
    
    }">
        <span @click="tab=1" :class="tab==1 ? tabClass+tabHi : tabClass+tabNormal">Tab1</span>
        <span @click="tab=2" :class="tab==2 ? tabClass+tabHi : tabClass+tabNormal">Tab2</span>
        <span @click="tab=3" :class="tab==3 ? tabClass+tabHi : tabClass+tabNormal">Tab3</span>
        <div x-show="tab==1" id="tab1Content" class="mt-4 ml-2 block-inline" style="width: 350px;">
            <b>Content tab 1:</b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat eligendi iste, voluptatibus voluptatem veritatis temporibus sed laudantium quasi at doloremque officiis ea neque optio dolore quisquam asperiores voluptatum deleniti animi?
        </div>
        <div x-show="tab==2" id="tab2Content" class="mt-4 ml-2 block-inline" style="width: 350px;">
            <b>Content tab 2:</b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat eligendi iste, voluptatibus voluptatem veritatis temporibus sed laudantium quasi at doloremque officiis ea neque optio dolore quisquam asperiores voluptatum deleniti animi?
        </div>
        <div x-show="tab==3" id="tab3Content" class="mt-4 ml-2 block-inline" style="width: 350px;">
            <b>Content tab 3:</b>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat eligendi iste, voluptatibus voluptatem veritatis temporibus sed laudantium quasi at doloremque officiis ea neque optio dolore quisquam asperiores voluptatum deleniti animi?
        </div>
    </section>
</body>
```
