
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#page2",
        strat: "0% 90%",
        end: "50% 50%",
        scrub: true,
},  
});
tl.to("#fanta", {
    top: "115%",
    left:"-2%"
},"first");
tl.to("#o2", {
    top: "150%",
    left: "23%",
    zIndex:4
},"first");
tl.to("#o1", {
    top: "170%",
    left: "85%",
    width:"15%",
    zIndex:4
},"first");
tl.to("#l2", {
    top: "105%",
    left: "2%",
    width:"15%",
    zIndex:4
},"first");
tl.to("#leaf", {
    top: "105%",
    left: "75%",
    roatateX:"180deg",
    width:"15%",
    zIndex:4
}, "first");
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#page3",
        strat: "0% 90%",
        end: "50% 50%",
        scrub: true,
},  
});
tl2.to("#fanta", {
    top: "210%",
    left: "33%",
    width:"33%"
},"second");
tl2.to("#o2", {
    top: "205%",
    left: "38.5%",
    width: "23%",
    zIndex:1
}, "second");
tl2.from("#c",{
    roatateX: "20deg",
    left:"80%"
},"second");
tl2.from("#a",{
    roatateX: "20deg",
    left:"80%"
},"second");
tl2.from("#s",{
    roatateX: "20deg",
    left:"-100%"
},"second");
tl2.from("#l",{
    roatateX: "20deg",
    left:"-100%"
},"second");