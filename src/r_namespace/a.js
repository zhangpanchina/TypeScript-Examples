var Shape;
(function (Shape) {
    function circle(x) {
        return Math.PI * x;
    }
    Shape.circle = circle;
})(Shape || (Shape = {}));
