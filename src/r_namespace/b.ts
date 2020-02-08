/// <reference path="./a.ts" />

namespace Shape {
    export function square(x: number) {
        return x ** 2
    }
}

Shape.circle(1)
Shape.square(2)

import circle = Shape.circle
circle(2)