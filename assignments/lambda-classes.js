// CODE here for your Lambda Classes


/*#### Person

* First we need a Person class. This will be our `base-class`
* Person receives `name` `age` `location` all as props
* Person receives `speak` as a method.
* This method logs out a phrase `Hello my name is Fred, I am from Bedrock` where `name` and `location` are the object's own props*/

class Person {
    constructor(Attributes){
        this.name = Attributes.name;
        this.age = Attributes.age;
        this.location = Attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

/*#### Instructor

* Now that we have a Person as our base class, we'll build our Instructor class.
* Instructor uses the same attributes that have been set up by Person
* Instructor has the following unique props:
  * `specialty` what the Instructor is good at i.e. 'redux'
  * `favLanguage` i.e. 'JavaScript, Python, Elm etc.'
  * `catchPhrase` i.e. `Don't forget the homies`
* Instructor has the following methods:
  * `demo` receives a `subject` string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
  * `grade` receives a `student` object and a `subject` string as arguments and logs out '{student.name} receives a perfect score on {subject}'*/

class Instructor extends Person {
    constructor(Attributes){
        super(Attributes);
        this.specialty = Attributes.specialty;
        this.favLanguage = Attributes.favLanguage;
        this.catchPhrase = Attributes.catchPhrase;
    }
    demo(stringSubject){
        return `Today we are learning about ${stringSubject}.`;
    }
    grade(objStudent,stringSubject){
        return `${objStudent.name} receives a perfect score on ${stringSubject}.`;
    }
    changeGrade(objStudent){
        let randomNum = Math.floor(Math.random() * Math.floor(10));
        if (randomNum < 3){
            randomNum = Math.floor(Math.random() * Math.floor(11));
            objStudent.myGrade -= randomNum;
        }
        if (randomNum >= 3){
            randomNum = Math.floor(Math.random() * Math.floor(101));
            objStudent.myGrade += randomNum;
        }
        return `${objStudent.name}'s grade changed to ${objStudent.myGrade}!`
    }
}

/*#### Student

* Now we need some students!
* Student uses the same attributes that have been set up by Person
* Student has the following unique props:
  * `previousBackground` i.e. what the Student used to do before Lambda School
  * `className` i.e. CS132
  * `favSubjects`. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
* Student has the following methods:
  * `listsSubjects` a method that logs out all of the student's favoriteSubjects one by one.
  * `PRAssignment` a method that receives a subject as an argument and logs out that the `student.name has submitted a PR for {subject}`
  * `sprintChallenge` similar to PRAssignment but logs out `student.name has begun sprint challenge on {subject}`*/

class Student extends Person {
    constructor(Attributes){
        super(Attributes);
        this.previousBackground = Attributes.previousBackground;
        this.className = Attributes.className;
        this.favSubjects = Attributes.favSubjects;
        this.myGrade = Attributes.myGrade;
    }
    listsSubjects(){
        var subLength = this.favSubjects.length;
        for (var i=0; i<subLength; i++){
            console.log(this.favSubjects[i]);
        }
    }
    PRAssignment(stringSubject){
        return `${this.name} has submitted a PR for ${stringSubject}.`;
    }
    sprintChallenge(stringSubject){
        return `${this.name} has begun sprint challenge on ${stringSubject}.`;
    }
    graduate(){
        if (this.myGrade >= 70) {
            console.log(`${this.name} graduated!`);
            return true;
        }else{
            console.log(`${this.name} needs to work harder!`);
            return false;
        }
    }
}

/* #### Project Manager

* Now that we have instructors and students, we'd be nowhere without our PM's
* ProjectManagers are extensions of Instructors
* ProjectManagers have the following unique props:
  * `gradClassName`: i.e. CS1
  * `favInstructor`: i.e. Sean
* ProjectManagers have the following Methods:
  * `standUp` a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
  * `debugsCode` a method that takes in a student object and a subject and logs out `{name} debugs {student.name}'s code on {subject}` */

class ProjectManager extends Instructor {
    constructor(Attributes){
        super(Attributes);
        this.gradClassName = Attributes.gradClassName;
        this.favInstructor = Attributes.favInstructor;
    }
    standUp(stringSlackChannel){
        return `${this.name} announces to ${stringSlackChannel}, @channel standy times!`;
    }
    debugsCode(objStudent,stringSubject){
        return `${this.name} debugs ${objStudent.name}'s code on ${stringSubject}.`;
    }
}

/* Objects and method calls */

const fred = new Instructor({
    name: 'Fred Flintstone',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Barney?! My Pebbles!`
  });

  const patti = new Instructor({
      name: 'Patti Mayonnaise',
      location: 'Bluffington',
      age: 13,
      favLanguage: '8086 Assembly',
      specialty: 'Back-end',
      catchPhrase: "We're having your favorite. Liver and onions!"
  });

  const doug = new ProjectManager({
    name: 'Doug Funnie',
    location: 'Bluffington',
    age: 12,
    favLanguage: 'Go',
    specialty: 'Back-end',
    catchPhrase: 'Culoo-koo-koo!',
    gradClassName: 'LT5502',
    favInstructor: 'Patti Mayonnaise'
  });

  const klotz = new Student({
    name: 'Roger Klotz',
    location: 'Bluffington',
    age: 14,
    previousBackground: 'Pounding face!',
    className: 'LT5502',
    favSubjects: ['Bullying', 'Bagging Neematoads', 'Banana Pudding Pizza'],
    myGrade: 40
  });

  const spongebob = new Student({
    name: 'Spongebob Squarepants',
    location: "Bikini Botton",
    age: 32,
    previousBackground: 'Fry Cook',
    className: 'CS203',
    favSubjects: ['Krabby Patties', 'Jellyfishing', 'Mermaid Man', 'Boating'],
    myGrade: 99
  });

  console.log(fred.speak());
  console.log(patti.demo("JavaScript"));
  console.log(doug.grade(spongebob,"Flexbox"));
  console.log(doug.standUp("WEB404"));
  console.log(doug.debugsCode(klotz,"AJAX"));
  klotz.listsSubjects();
  console.log(klotz.PRAssignment("AJAX"));
  console.log(spongebob.sprintChallenge("Flexbox"));

  /* #### Stretch Problem

* Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
* Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
* Add a graduate method to a student.
  * This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
  * If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score. */


var flag;

do{

    //Kickin' it old school!
    flag = klotz.graduate();
    if (flag === false){
        console.log(doug.changeGrade(klotz));
        //klotz.myGrade += 100;
    }else{
        //klotz graduated, so let the loop end
    }

}while(flag === false);

