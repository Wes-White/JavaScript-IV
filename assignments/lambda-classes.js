// CODE here for your Lambda Classes

class Person { 
    constructor(attributes){
    this.name = attributes.name
    this.age = attributes.age
    this.location = attributes.location
    this.gender = attributes.gender
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}!` 
    }
}
   
class Instructor extends Person{ 
    constructor(favs){ 
        super(favs)
        this.specialty = favs.specialty.
        this.favLanguage = favs.favLanguage
        this.catchPhrase = favs.catchPhrase
      }
    demo(subject){ 
        return `Today we are learning about ${subject}`
     }
    grade(){
        return `${student.name} receives a perfect score on ${subject}`
    }
}
   
class Student extends Person{ 
    constructor(studAttributes){ 
        super(studAttributes)
        this.previousBackground = studAttributes.previousBackground
        this.className = studAttributes.className
        this.favSubject = studAttributes.favSubject
    }
   
    listSubjects(){ 
     return `${this.favSubject}`
    }
   
    PRAssignment(student, subject){ 
        return `${student.name} has submitted a PR for ${subject}`
    }
   
    sprintChallenge(student, subject){ 
        return `${student.name} has begun sprint challenge on ${subject}`
    }
}
   
class ProjectManagers extends(Instructors){ 
    constructor(PMAttributes){
        super(PMAttributes)
        this.gradClassName = PMAttributes.gradClassName
        this.favInstructor = PMAttributes.favInstructor
    }
   
    standUp(channel){ 
        return ` ${name} announces to ${channel}, @channel standy times!​​​​​`
    
    }
   
    debugsCode(student, subject){ 
        return `${name} debugs ${student.name}'s code on ${subject}`
    }
   
   
 }
   
    