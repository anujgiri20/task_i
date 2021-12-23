var container=document.createElement("div");
container.setAttribute("class","div");
var span=document.getElementById("inner_div")

span.innerHTML=10;
document.body.append(container);
let time=10
setTimeout(()=>{
    time=time-1
    span.innerHTML=time
    setTimeout(()=>{
        time=time-1
        span.innerHTML=time
        setTimeout(()=>{
            time=time-1
            span.innerHTML=time
            setTimeout(()=>{
                time=time-1
                span.innerHTML=time
                setTimeout(()=>{
                    time=time-1
                    span.innerHTML=time
                    setTimeout(()=>{
                        time=time-1
                        span.innerHTML=time
                        setTimeout(()=>{
                            time=time-1
                            span.innerHTML=time
                            setTimeout(()=>{
                                time=time-1
                                span.innerHTML=time
                                setTimeout(()=>{
                                    time=time-1
                                    span.innerHTML=time
                                    setTimeout(()=>{
                                        time=time-1
                                        span.innerHTML="Happy Independence Day!!"
                                },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)

            },1000)
        },1000)

    },1000)
},1000)
