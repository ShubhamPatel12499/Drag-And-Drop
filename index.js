var dragDrop;
const moveObj = function(squareObj){
    const elements = document.querySelectorAll("#squareObj")

    elements.forEach(squareObj => {
        squareObj.addEventListener("mousedown",() => {
            squareObj.style.position = "absolute"
            dragDrop = squareObj

            document.onmousemove = (e) =>{
                var x = e.pageX
                var y = e.pageY

                dragDrop.style.left = x-50 +"px";
                dragDrop.style.top = y-50 +"px";
            }
        })
    })

    document.onmouseup = function(e){
        dragDrop= null;
    }
}
