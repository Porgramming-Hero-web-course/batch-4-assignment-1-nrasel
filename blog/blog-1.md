# The significance of union and intersection types in Typescript.

- Union and Intersection type is very powerful type that provide us to write our code more remarkable flexibility and clarity .

# Union:

1.  When we need to define a variable or function with multiple type. That
    time Union type enable us to write this code.

    For example:

    const result = string | number;

    const checktype = (value: string | number) => {
    if (typeof value === "string") {
    console.log("provided value is string");
    } else {
    console.log("provided value is number");
    }
    };

    checktype("naimur")
    checktype(4)

2.  Here this code we can see the value is receive multiple type string
    and number
    It's possible with the help of union type.In Union type used | this symbol.The other name is OR
3.  Enhanced The Type safety by avoid the common error
    For example:
    let value:string|number
    value = true

4.  Union Type also improve our code flexibility when we work on dynamic data.
5.  We use the type narrowing using union type. Above example we use this.

# Intersection

1. When we need to merge multiple type into a single one then we use
   Intersection type to incorporate all the properties and methods from each type
   To combine the type we use & operator as follows.

   interface Learner {
   name: string;
   learning: () => void;
   }

   interface Student {
   institute: string;
   study: () => void;
   }

   type LearnerAndStudent = Learner & Student; // here we use Intersection

   let naimur: LearnerAndStudent = {
   name: "Naimur",
   institute: "PUST",
   learning: () => console.log("Learning....."),
   study: () => console.log("Studying....."),
   };

   naimur.study()
   naimur.learning()

2. Intersection types are useful for defining objects that come from
   different types
3. It also check the type strictly for ensuring the stronger type safety
   and prevents the run time error.
4. Intersection type can be used for more maintainable, scalable, and
   safer application.
5. This helps avoid the code duplication and reduce the error

So, the overall discussion we may say that these features on typescript make our code more flexible and reusable and very essential for large application.So, Union an Intersection type are very important for us.
