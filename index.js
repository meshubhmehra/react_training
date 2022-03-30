let obj = {
  name: "shubham",
  age: 25,
  student(city, collage) {
    console.log(
      `My name is ${this.name} i'm ${this.age} year old belons to ${city} i studied in ${collage}`
    );
  },
};
obj.student("Indore", "Svce");
