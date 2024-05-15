var tl = gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 90%",
    end: "50% 50%",
    scrub: true,
    markers: false
}})

tl.to("#fanta",{
    top:"115%",
    left:"4%"
},'Orange')

tl.to("#orange-cut",{
    top:"145%",
    left:"25%"
},'Orange')

tl.to("#orange",{
    width: "15%",
    top:"165%",
    right:"5%"
},'Orange')

tl.to("#leaf",{
    top:"105%",
    rotate: "130deg",
    left:"80%"
},'Orange')

tl.to("#leaf2",{
    top:"105%",
    rotate: "180deg",
    left:"5%"
},'Orange')

var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 85%",
    end: "20% 50%",
    scrub: true,
    markers: false
}})

tl2.from(".lemon1",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%"
},'Pepsi')

tl2.from("#pepsi",{
    rotate: "-90deg",
    top: "110%",
    left: "-100%"
},'Pepsi')

tl2.from(".lemon2",{
    rotate: "90deg",
    top: "110%",
    left: "100%"
},'Pepsi')

tl2.from("#cocacola",{
    rotate: "90deg",
    top: "110%",
    left: "100%"
},'Pepsi')

tl2.to("#orange-cut",{
    rotate: "45deg",
    top: "200%",
    left: "41%"
},'Pepsi')

tl2.to("#fanta",{
    width: "34%",
    top: "213%",
    left: "33%"
},'Pepsi')