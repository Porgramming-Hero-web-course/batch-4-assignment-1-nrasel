{
  type Circle = {
    shape: "circle";
    radius: number;
  };
  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  type Shape = Circle | Rectangle;

  const calculateShapeArea = (shape: Shape): number => {
    if ("radius" in shape) {
      const r = shape.radius;
      return Math.PI * r * r;
    } else if ("width" in shape && "height" in shape) {
      return shape.width * shape.height;
    } else {
      throw new Error("Invalid shape type");
    }
  };

  const circleArea: Circle = { shape: "circle", radius: 5 };
  const rectangelArea: Rectangle = { shape: "rectangle", width: 4, height: 6 };

  const result1 = calculateShapeArea(circleArea).toFixed(2);
  const result2 = calculateShapeArea(rectangelArea);

  // console.log(result1);
  // console.log(result2);
}
