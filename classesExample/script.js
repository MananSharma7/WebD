class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];
    getInfo(){
        return {name: this.name, email: this.email};
    }
    enrollCourse(course){
        this.#courseList.push(course);
    }
    getCourseList(){
        return this.#courseList;
    }
}
    const m = new User("manan", "d");
    m.enrollCourse(1);
    m.enrollCourse(2);
    console.log(m.courseList);
    console.log(m.getCourseList());

    module.exports = User;