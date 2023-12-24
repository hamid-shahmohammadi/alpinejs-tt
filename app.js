function component1() {
    return {
        init() {
            console.log('hi');
            this.myInput = 'something2'
        },
        keyUpVal($event){
            this.myInput=$event.target.value
        },
        color:'red',
        isShow: false,
        myInput: 'something',
        isDisabled: false,
        myStyle: 'color:red',
        myClass: 'bg-blue-400 p-4 text-white w-1/2 mx mx-auto text-center'
    }
}